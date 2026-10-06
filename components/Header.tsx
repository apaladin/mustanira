"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { BagIcon, CloseIcon, MenuIcon } from "./Icons";

const NAV = [
  { href: "/shop?category=scrubs", label: "Scrubs" },
  { href: "/shop?category=footwear", label: "Footwear" },
  { href: "/shop?category=tools", label: "Clinical Tools" },
  { href: "/shop?category=certifications", label: "Certifications" },
  { href: "/shop?category=courses", label: "Courses" },
  { href: "/shop?category=gifts", label: "Gifts" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 ${light ? "text-white" : "text-pine"}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path d="M13 8h6v5h5v6h-5v5h-6v-5H8v-6h5z" fill={light ? "#0b3b3a" : "#faf7f2"} />
        <circle cx="25" cy="7" r="3" fill="#e46f55" />
      </svg>
      <span className="font-display text-2xl font-semibold tracking-tight">Mustanira</span>
    </span>
  );
}

export default function Header() {
  const { count, ready, setDrawerOpen } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-pine text-center text-xs font-medium text-white/90">
        <p className="container-x py-2">
          Free shipping on orders over $75 · Bulk & hospital orders welcome — just send us your list
        </p>
      </div>
      <div className="border-b border-ink/10 bg-cream/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <button className="-ml-2 p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </button>
          <Link href="/" aria-label="Mustanira home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm font-medium text-ink/80 transition hover:text-coral">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <Link href="/shop" className="hidden rounded-full px-4 py-2 text-sm font-semibold hover:bg-ink/5 sm:block">
              Shop all
            </Link>
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative -mr-2 rounded-full p-2 hover:bg-ink/5"
              aria-label={`Open order list (${count} items)`}
            >
              <BagIcon />
              {ready && count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[11px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-80 max-w-[85%] flex-col bg-cream p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-1">
                <CloseIcon />
              </button>
            </div>
            <Link href="/shop" className="border-b border-ink/10 py-3 font-semibold">
              Shop all
            </Link>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="border-b border-ink/10 py-3 font-medium">
                {n.label}
              </Link>
            ))}
            <Link href="/shop?category=outerwear" className="border-b border-ink/10 py-3 font-medium">
              Jackets & Layers
            </Link>
            <Link href="/shop?category=accessories" className="border-b border-ink/10 py-3 font-medium">
              Accessories
            </Link>
            <Link href="/about" className="border-b border-ink/10 py-3 font-medium">
              About
            </Link>
            <Link href="/contact" className="py-3 font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
