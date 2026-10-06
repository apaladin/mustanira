"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/site";
import { BagIcon, CloseIcon } from "./Icons";
import QtyStepper from "./QtyStepper";

export default function CartDrawer() {
  const { items, subtotal, drawerOpen, setDrawerOpen, setQty } = useCart();

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawerOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen, setDrawerOpen]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Order list">
      <div className="absolute inset-0 bg-ink/40" onClick={() => setDrawerOpen(false)} />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-xl font-semibold">Your order list</h2>
          <button onClick={() => setDrawerOpen(false)} aria-label="Close" className="p-1">
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-mint text-pine">
              <BagIcon />
            </span>
            <p className="text-muted">Your order list is empty.</p>
            <Link href="/shop" className="btn-primary" onClick={() => setDrawerOpen(false)}>
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto px-6">
              {items.map((i) => (
                <li key={i.key} className="flex gap-4 py-5">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-sand">
                    <Image src={i.image} alt={i.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        href={`/product/${i.slug}`}
                        onClick={() => setDrawerOpen(false)}
                        className="text-sm leading-snug font-semibold hover:text-teal"
                      >
                        {i.name}
                      </Link>
                      <span className="text-sm font-semibold">{formatPrice(i.price * i.qty)}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted">{[i.size && `Size ${i.size}`, i.color].filter(Boolean).join(" · ")}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <QtyStepper value={i.qty} onChange={(q) => setQty(i.key, q)} small />
                      <button onClick={() => setQty(i.key, 0)} className="text-xs text-muted underline hover:text-coral">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-ink/10 bg-white px-6 py-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Estimated subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                No payment now — send us your list and we&apos;ll reply with a final quote.
              </p>
              <Link href="/cart" onClick={() => setDrawerOpen(false)} className="btn-coral mt-4 w-full">
                Review & send order list
              </Link>
              <button onClick={() => setDrawerOpen(false)} className="mt-2 w-full py-2 text-sm font-medium text-muted hover:text-ink">
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
