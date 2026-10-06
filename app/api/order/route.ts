import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { newOrderRef, orderHtml, orderText, type Customer, type OrderLine } from "@/lib/order";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (str(body?.website)) return NextResponse.json({ ok: true, ref: newOrderRef() });

  const customer: Customer = {
    name: str(body?.customer?.name, 120),
    email: str(body?.customer?.email, 200),
    phone: str(body?.customer?.phone, 60),
    organization: str(body?.customer?.organization, 160),
    address: str(body?.customer?.address, 500),
    notes: str(body?.customer?.notes, 2000),
  };
  if (!customer.name || !EMAIL_RE.test(customer.email)) {
    return NextResponse.json({ error: "Please enter your name and a valid email." }, { status: 400 });
  }

  // Re-price every line from the catalog so the email can't be tampered with.
  const rawItems: any[] = Array.isArray(body?.items) ? body.items.slice(0, 100) : [];
  const lines: OrderLine[] = [];
  for (const it of rawItems) {
    const p = getProduct(str(it?.slug, 120));
    const qty = Math.floor(Number(it?.qty));
    if (!p || !(qty >= 1 && qty <= 999)) continue;
    const size = str(it?.size, 20);
    const color = str(it?.color, 40);
    lines.push({
      slug: p.slug,
      name: p.name,
      price: p.price,
      qty,
      size: p.sizes?.includes(size) ? size : undefined,
      color: p.colors?.some((c) => c.name === color) ? color : undefined,
    });
  }
  if (lines.length === 0) {
    return NextResponse.json({ error: "Your order list is empty." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Email delivery isn't configured on this deployment; the client falls back to mailto.
    return NextResponse.json({ error: "Email delivery is not configured.", fallback: true }, { status: 503 });
  }

  const ref = newOrderRef();
  const to = process.env.ORDER_TO_EMAIL || SITE.orderEmail;
  const from = process.env.ORDER_FROM_EMAIL || "Mustanira Orders <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: customer.email,
      subject: `Order request ${ref} — ${customer.name} (${lines.reduce((n, l) => n + l.qty, 0)} items)`,
      html: orderHtml(lines, customer, ref),
      text: orderText(lines, customer, ref),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "We couldn't send your order right now.", fallback: true }, { status: 502 });
  }

  return NextResponse.json({ ok: true, ref });
}
