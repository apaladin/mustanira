import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { getCategory } from "@/lib/products";
import { formatPrice } from "@/lib/site";
import { Stars } from "./Icons";

const BADGE_STYLES: Record<NonNullable<Product["badge"]>, string> = {
  Bestseller: "bg-pine text-white",
  New: "bg-white text-pine",
  Sale: "bg-coral text-white",
  Limited: "bg-ink text-white",
  Popular: "bg-mint text-pine",
};

export default function ProductCard({ product: p, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link href={`/product/${p.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={p.image}
          alt={p.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {p.badge && (
          <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold shadow-sm ${BADGE_STYLES[p.badge]}`}>
            {p.badge}
          </span>
        )}
        {p.colors && p.colors.length > 1 && (
          <span className="absolute bottom-3 left-3 flex -space-x-1 rounded-full bg-white/90 p-1.5 backdrop-blur">
            {p.colors.slice(0, 5).map((c) => (
              <span key={c.name} className="h-3.5 w-3.5 rounded-full ring-2 ring-white" style={{ background: c.hex }} />
            ))}
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-[11px] font-semibold tracking-wider text-muted uppercase">{getCategory(p.category)?.name}</p>
        <h3 className="mt-1 font-semibold leading-snug group-hover:text-teal">{p.name}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
          <Stars rating={p.rating} /> <span>({p.reviews.toLocaleString()})</span>
        </div>
        <p className="mt-2 flex items-baseline gap-2">
          <span className="font-semibold">{formatPrice(p.price)}</span>
          {p.compareAt && <span className="text-sm text-muted line-through">{formatPrice(p.compareAt)}</span>}
        </p>
      </div>
    </Link>
  );
}
