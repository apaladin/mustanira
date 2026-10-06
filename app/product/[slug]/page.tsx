import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToList from "@/components/AddToList";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import { CheckIcon, ShieldIcon, Stars, TruckIcon } from "@/components/Icons";
import { PRODUCTS, getCategory, getProduct } from "@/lib/products";
import { formatPrice } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.short,
    openGraph: { title: p.name, description: p.short, images: [p.image] },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const cat = getCategory(p.category)!;
  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);

  return (
    <div className="container-x py-8 lg:py-12">
      <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${cat.slug}`} className="hover:text-ink">{cat.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{p.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Gallery images={[p.image, ...(p.gallery ?? [])]} alt={p.name} badge={p.badge} />

        <div className="lg:py-4">
          <p className="eyebrow">{cat.name}</p>
          <h1 className="mt-2 font-display text-4xl leading-tight font-semibold text-pine sm:text-5xl">{p.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <Stars rating={p.rating} />
            <span>
              {p.rating.toFixed(1)} · {p.reviews.toLocaleString()} reviews
            </span>
          </div>
          <p className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">{formatPrice(p.price)}</span>
            {p.compareAt && (
              <>
                <span className="text-lg text-muted line-through">{formatPrice(p.compareAt)}</span>
                <span className="rounded-full bg-coral/10 px-2.5 py-1 text-xs font-bold text-coral">
                  Save {Math.round((1 - p.price / p.compareAt) * 100)}%
                </span>
              </>
            )}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">{p.description}</p>

          {p.details && (
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {p.details.map((d) => (
                <div key={d.label} className="rounded-2xl bg-white p-4 ring-1 ring-ink/5">
                  <dt className="text-xs text-muted">{d.label}</dt>
                  <dd className="mt-1 text-sm font-semibold">{d.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <AddToList
            product={{ slug: p.slug, name: p.name, price: p.price, image: p.image, sizes: p.sizes, colors: p.colors, digital: p.digital }}
          />

          <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-ink/5">
            <h2 className="font-semibold">Highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon className="mt-0.5 shrink-0 text-teal" width={16} height={16} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-mint/60 p-4">
              <TruckIcon className="shrink-0 text-pine" />
              {p.digital ? "Instant enrollment details by email" : "Free shipping on orders over $75"}
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-mint/60 p-4">
              <ShieldIcon className="shrink-0 text-pine" />
              {p.digital ? "Bulk enrollment for teams" : "30-day easy exchanges"}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl font-semibold text-pine">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.slug} product={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
