"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { newOrderRef, orderText, type Customer } from "@/lib/order";
import { SITE, formatPrice } from "@/lib/site";
import { ArrowRight, BagIcon, CheckIcon, MailIcon, TrashIcon } from "./Icons";
import QtyStepper from "./QtyStepper";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; ref: string; email: string }
  | { kind: "mailto"; href: string }
  | { kind: "error"; message: string };

const EMPTY: Customer = { name: "", email: "", phone: "", organization: "", address: "", notes: "" };

export default function OrderList() {
  const { items, subtotal, count, ready, setQty, clear } = useCart();
  const [form, setForm] = useState<Customer>(EMPTY);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set = (k: keyof Customer) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailtoHref = () => {
    const ref = newOrderRef();
    const subject = `Order request ${ref} — ${form.name || "Mustanira customer"}`;
    const body = orderText(items, form, ref);
    return `mailto:${SITE.orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = (new FormData(e.currentTarget).get("website") as string) || "";
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: form,
          website: honeypot,
          items: items.map(({ slug, qty, size, color }) => ({ slug, qty, size, color })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus({ kind: "sent", ref: data.ref, email: form.email });
        clear();
        setForm(EMPTY);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (data.fallback || res.status >= 500) {
        // Server email isn't available — hand the list to the visitor's email app instead.
        const href = mailtoHref();
        setStatus({ kind: "mailto", href });
        window.location.href = href;
        return;
      }
      setStatus({ kind: "error", message: data.error || "Something went wrong. Please try again." });
    } catch {
      const href = mailtoHref();
      setStatus({ kind: "mailto", href });
      window.location.href = href;
    }
  };

  if (status.kind === "sent") {
    return (
      <div className="container-x py-20">
        <div className="mx-auto max-w-xl rounded-[2rem] bg-white p-10 text-center shadow-sm ring-1 ring-ink/5">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-pine">
            <CheckIcon width={30} height={30} />
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold text-pine">Order list sent!</h1>
          <p className="mt-3 text-muted">
            Thank you — your request <strong className="text-ink">{status.ref}</strong> is with our team at {SITE.orderEmail}.
            We&apos;ll reply to <strong className="text-ink">{status.email}</strong> within one business day with your final
            quote and payment link.
          </p>
          <Link href="/shop" className="btn-primary mt-8">
            Keep shopping <ArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  if (!ready) return <div className="container-x min-h-[60vh] py-20" />;

  if (items.length === 0) {
    return (
      <div className="container-x py-20 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-pine">
          <BagIcon width={28} height={28} />
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-pine">Your order list is empty</h1>
        <p className="mt-3 text-muted">Browse scrubs, gear, certifications and courses to get started.</p>
        <Link href="/shop" className="btn-primary mt-8">
          Start shopping <ArrowRight />
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-12">
      <p className="eyebrow">Almost there</p>
      <h1 className="mt-2 font-display text-5xl font-semibold text-pine">Your order list</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Review your items, add your details and send the list to our team. We&apos;ll confirm availability and reply with a
        final quote, shipping options and a secure payment link — no payment is taken on this site.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        {/* Items */}
        <section className="lg:col-span-7">
          <div className="rounded-3xl bg-white p-2 ring-1 ring-ink/5 sm:p-4">
            <ul className="divide-y divide-ink/10">
              {items.map((i) => (
                <li key={i.key} className="flex gap-4 p-3 sm:p-4">
                  <Link href={`/product/${i.slug}`} className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-sand">
                    <Image src={i.image} alt={i.name} fill sizes="96px" className="object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <div>
                        <Link href={`/product/${i.slug}`} className="font-semibold hover:text-teal">
                          {i.name}
                        </Link>
                        <p className="mt-0.5 text-sm text-muted">
                          {[i.size && `Size ${i.size}`, i.color].filter(Boolean).join(" · ") || formatPrice(i.price) + " each"}
                        </p>
                      </div>
                      <p className="font-semibold">{formatPrice(i.price * i.qty)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <QtyStepper value={i.qty} onChange={(q) => setQty(i.key, q)} small />
                      <button
                        onClick={() => setQty(i.key, 0)}
                        className="inline-flex items-center gap-1 text-sm text-muted hover:text-coral"
                      >
                        <TrashIcon /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <Link href="/shop" className="text-sm font-semibold text-teal hover:text-coral">
              ← Continue shopping
            </Link>
            <button onClick={clear} className="text-sm text-muted underline hover:text-coral">
              Clear list
            </button>
          </div>
        </section>

        {/* Send form */}
        <section className="lg:col-span-5">
          <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-semibold text-pine">Send your list</h2>
            <dl className="mt-5 space-y-2 border-b border-ink/10 pb-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Items</dt>
                <dd>{count}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Shipping</dt>
                <dd>{subtotal >= 75 ? "Free" : "Quoted by our team"}</dd>
              </div>
              <div className="flex justify-between text-base font-semibold">
                <dt>Estimated total</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Full name *</span>
                  <input required value={form.name} onChange={set("name")} className="input" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Email *</span>
                  <input required type="email" value={form.email} onChange={set("email")} className="input" autoComplete="email" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Phone</span>
                  <input type="tel" value={form.phone} onChange={set("phone")} className="input" autoComplete="tel" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Hospital / school</span>
                  <input value={form.organization} onChange={set("organization")} className="input" autoComplete="organization" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Shipping address</span>
                <textarea rows={2} value={form.address} onChange={set("address")} className="input" autoComplete="street-address" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Notes</span>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={set("notes")}
                  className="input"
                  placeholder="Embroidery, unit color policy, bulk quantities, preferred course dates…"
                />
              </label>
              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            </div>

            {status.kind === "error" && (
              <p className="mt-4 rounded-xl bg-coral/10 p-3 text-sm text-coral-dark" role="alert">
                {status.message}
              </p>
            )}
            {status.kind === "mailto" && (
              <div className="mt-4 rounded-xl bg-mint p-4 text-sm text-pine" role="status">
                Your email app should have opened with your order list addressed to {SITE.orderEmail} — just press send.{" "}
                <a href={status.href} className="font-semibold underline">
                  Open it again
                </a>
                .
              </div>
            )}

            <button type="submit" disabled={status.kind === "sending"} className="btn-coral mt-6 w-full py-4 text-base">
              <MailIcon />
              {status.kind === "sending" ? "Sending…" : `Send order list to ${SITE.orderEmail}`}
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              No payment now. We&apos;ll reply within one business day.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
