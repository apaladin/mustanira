import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import { SITE } from "@/lib/site";
import { Logo } from "./Header";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-pine text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Premium scrubs, gear, certifications and courses — designed with nurses, for nurses. {SITE.tagline}
          </p>
          <a href={`mailto:${SITE.orderEmail}`} className="mt-6 inline-block text-sm font-semibold text-white hover:text-coral">
            {SITE.orderEmail}
          </a>
        </div>
        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-semibold text-white">Shop</h3>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/shop?category=${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/cart" className="hover:text-white">Order list</Link></li>
            <li><Link href="/contact#bulk" className="hover:text-white">Bulk & hospital orders</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-semibold text-white">How ordering works</h3>
          <p className="text-sm leading-relaxed">
            Add items to your order list and send it to us. Our team replies within one business day with a final quote,
            shipping options and payment link.
          </p>
        </div>
      </div>

      {/* Ownership notice */}
      <div className="border-t border-white/10 bg-ink">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-sm sm:flex-row sm:text-left">
          <p>
            © {year} <strong className="font-semibold text-white">{SITE.owner}</strong>. All rights reserved.
          </p>
          <p>
            {SITE.name}™ is a brand owned and operated by{" "}
            <strong className="font-semibold text-white">{SITE.owner}</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}
