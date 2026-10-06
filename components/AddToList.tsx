"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Color } from "@/lib/products";
import { formatPrice } from "@/lib/site";
import { BagIcon } from "./Icons";
import QtyStepper from "./QtyStepper";

type Props = {
  product: {
    slug: string;
    name: string;
    price: number;
    image: string;
    sizes?: string[];
    colors?: Color[];
    digital?: boolean;
  };
};

export default function AddToList({ product: p }: Props) {
  const { add } = useCart();
  const [size, setSize] = useState<string>();
  const [color, setColor] = useState<string | undefined>(p.colors?.[0]?.name);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");

  const onAdd = () => {
    if (p.sizes && !size) {
      setError("Please choose a size.");
      return;
    }
    setError("");
    add({ slug: p.slug, name: p.name, price: p.price, image: p.image, size, color }, qty);
  };

  return (
    <div className="mt-8 space-y-6">
      {p.colors && (
        <fieldset>
          <legend className="text-sm font-semibold">
            Color: <span className="font-normal text-muted">{color}</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {p.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                title={c.name}
                aria-label={c.name}
                aria-pressed={color === c.name}
                onClick={() => setColor(c.name)}
                className={`h-9 w-9 rounded-full ring-1 ring-ink/15 transition ${color === c.name ? "ring-2 ring-pine ring-offset-2 ring-offset-cream" : "hover:scale-110"}`}
                style={{ background: c.hex }}
              />
            ))}
          </div>
        </fieldset>
      )}

      {p.sizes && (
        <fieldset>
          <legend className="text-sm font-semibold">
            {p.slug.includes("sneaker") || p.slug.includes("clog") ? "US size" : "Size"}
            {size && <span className="font-normal text-muted">: {size}</span>}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => {
                  setSize(s);
                  setError("");
                }}
                className={`min-w-12 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${size === s ? "bg-pine text-white" : "bg-white ring-1 ring-ink/15 hover:ring-ink/40"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <QtyStepper value={qty} onChange={setQty} min={1} />
        <button onClick={onAdd} className="btn-coral flex-1 py-3.5 text-base">
          <BagIcon width={20} height={20} />
          Add to order list · {formatPrice(p.price * qty)}
        </button>
      </div>
      {error && (
        <p className="text-sm font-medium text-coral" role="alert">
          {error}
        </p>
      )}
      <p className="text-xs text-muted">
        No payment required now. Send your order list and our team will reply with a final quote{p.digital ? " and enrollment details" : ""}.
      </p>
    </div>
  );
}
