import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 font-display text-5xl font-semibold text-pine">We couldn&apos;t find that page</h1>
      <p className="mt-3 text-muted">It may have moved, or the product is no longer available.</p>
      <Link href="/shop" className="btn-primary mt-8">
        Back to the shop
      </Link>
    </div>
  );
}
