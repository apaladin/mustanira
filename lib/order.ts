import { formatPrice } from "./site";

export type OrderLine = {
  slug: string;
  name: string;
  price: number;
  qty: number;
  size?: string;
  color?: string;
};

export type Customer = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  address?: string;
  notes?: string;
};

const variant = (l: OrderLine) => [l.size && `Size ${l.size}`, l.color].filter(Boolean).join(", ");

export const orderTotal = (lines: OrderLine[]) => lines.reduce((n, l) => n + l.price * l.qty, 0);

/** Plain-text order summary — used for the email body and the mailto fallback. */
export function orderText(lines: OrderLine[], c: Customer, ref: string) {
  const rows = lines.map((l, i) => {
    const v = variant(l);
    return `${i + 1}. ${l.name}${v ? ` (${v})` : ""} — ${l.qty} × ${formatPrice(l.price)} = ${formatPrice(l.qty * l.price)}`;
  });
  return [
    `New order request ${ref}`,
    "",
    "CUSTOMER",
    `Name: ${c.name}`,
    `Email: ${c.email}`,
    c.phone && `Phone: ${c.phone}`,
    c.organization && `Organization / unit: ${c.organization}`,
    c.address && `Shipping address: ${c.address}`,
    "",
    "ITEMS",
    ...rows,
    "",
    `Estimated total: ${formatPrice(orderTotal(lines))} (before shipping & tax)`,
    c.notes ? `\nNOTES\n${c.notes}` : "",
  ]
    .filter((x) => typeof x === "string")
    .join("\n");
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);

export function orderHtml(lines: OrderLine[], c: Customer, ref: string) {
  const rows = lines
    .map(
      (l) => `<tr>
  <td style="padding:10px;border-bottom:1px solid #e5e7eb">${esc(l.name)}<br><span style="color:#6b7280;font-size:13px">${esc(variant(l) || "—")}</span></td>
  <td style="padding:10px;border-bottom:1px solid #e5e7eb;text-align:center">${l.qty}</td>
  <td style="padding:10px;border-bottom:1px solid #e5e7eb;text-align:right">${formatPrice(l.price)}</td>
  <td style="padding:10px;border-bottom:1px solid #e5e7eb;text-align:right">${formatPrice(l.price * l.qty)}</td>
</tr>`,
    )
    .join("");
  const field = (label: string, v?: string) =>
    v ? `<tr><td style="padding:4px 12px 4px 0;color:#6b7280">${label}</td><td style="padding:4px 0">${esc(v).replace(/\n/g, "<br>")}</td></tr>` : "";
  return `<div style="font-family:Arial,sans-serif;max-width:640px;color:#111827">
<h2 style="color:#0f4c4a;margin:0 0 4px">New order request</h2>
<p style="color:#6b7280;margin:0 0 20px">Reference ${esc(ref)}</p>
<table style="font-size:14px;margin-bottom:20px">
${field("Name", c.name)}${field("Email", c.email)}${field("Phone", c.phone)}${field("Organization", c.organization)}${field("Ship to", c.address)}
</table>
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#f3f4f6"><th style="padding:10px;text-align:left">Item</th><th style="padding:10px">Qty</th><th style="padding:10px;text-align:right">Price</th><th style="padding:10px;text-align:right">Total</th></tr></thead>
<tbody>${rows}</tbody>
</table>
<p style="text-align:right;font-size:16px;margin:16px 0"><strong>Estimated total: ${formatPrice(orderTotal(lines))}</strong><br><span style="color:#6b7280;font-size:12px">before shipping &amp; tax</span></p>
${c.notes ? `<h3 style="margin:24px 0 6px">Notes</h3><p style="white-space:pre-wrap;margin:0">${esc(c.notes)}</p>` : ""}
</div>`;
}

export const newOrderRef = () =>
  "MUS-" + Date.now().toString(36).toUpperCase().slice(-6) + Math.random().toString(36).slice(2, 4).toUpperCase();
