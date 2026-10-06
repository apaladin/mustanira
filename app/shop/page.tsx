import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ShopControls from "@/components/ShopControls";
import { CATEGORIES, PRODUCTS, getCategory, type Product } from "@/lib/products";

type SearchParams = Promise<{ category?: string; q?: string; sort?: string }>;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const { category } = await searchParams;
  const c = category ? getCategory(category) : undefined;
  return { title: c ? c.name : "Shop all", description: c?.blurb };
}

const SORTERS: Record<string, (a: Product, b: Product) => number> = {
  popular: (a, b) => b.reviews - a.reviews,
  rating: (a, b) => b.rating - a.rating,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const { category, q = "", sort = "featured" } = await searchParams;
  const active = category ? getCategory(category) : undefined;

  let list = active ? PRODUCTS.filter((p) => p.category === active.slug) : [...PRODUCTS];
  const query = q.trim().toLowerCase();
  if (query) {
    list = list.filter((p) =>
      [p.name, p.short, p.description, getCategory(p.category)?.name ?? ""].join(" ").toLowerCase().includes(query),
    );
  }
  if (SORTERS[sort]) list.sort(SORTERS[sort]);

  const href = (slug?: string) => {
    const sp = new URLSearchParams();
    if (slug) sp.set("category", slug);
    if (q) sp.set("q", q);
    if (sort !== "featured") sp.set("sort", sort);
    const s = sp.toString();
    return s ? `/shop?${s}` : "/shop";
  };

  return (
    <div className="container-x py-12">
      <header className="max-w-2xl">
        <p className="eyebrow">{active ? "Category" : "The full collection"}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold text-pine">{active ? active.name : "Shop all"}</h1>
        <p className="mt-3 text-muted">
          {active ? active.blurb : "Scrubs, footwear, clinical tools, certifications, courses and gifts — all in one place."}
        </p>
      </header>

      <div className="mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          <Link
            href={href()}
            className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition ${!active ? "bg-pine text-white" : "bg-white ring-1 ring-ink/10 hover:ring-ink/30"}`}
          >
            All ({PRODUCTS.length})
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={href(c.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition ${active?.slug === c.slug ? "bg-pine text-white" : "bg-white ring-1 ring-ink/10 hover:ring-ink/30"}`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <ShopControls category={active?.slug} q={q} sort={sort} count={list.length} />

      {list.length ? (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-3xl bg-white p-12 text-center ring-1 ring-ink/5">
          <p className="font-display text-2xl text-pine">No products match &ldquo;{q}&rdquo;.</p>
          <p className="mt-2 text-muted">Try a different search, or browse every category.</p>
          <Link href="/shop" className="btn-primary mt-6">
            Clear filters
          </Link>
        </div>
      )}
    </div>
  );
}
