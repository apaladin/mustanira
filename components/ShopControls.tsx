"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "./Icons";

export default function ShopControls({
  category,
  q,
  sort,
  count,
}: {
  category?: string;
  q: string;
  sort: string;
  count: number;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(q);

  const go = (next: { q?: string; sort?: string }) => {
    const sp = new URLSearchParams();
    if (category) sp.set("category", category);
    const nq = next.q ?? query;
    const ns = next.sort ?? sort;
    if (nq.trim()) sp.set("q", nq.trim());
    if (ns !== "featured") sp.set("sort", ns);
    const s = sp.toString();
    router.push(s ? `/shop?${s}` : "/shop", { scroll: false });
  };

  return (
    <div className="mt-6 flex flex-col gap-3 border-b border-ink/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <form
        className="relative w-full sm:max-w-xs"
        onSubmit={(e) => {
          e.preventDefault();
          go({ q: query });
        }}
      >
        <SearchIcon className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink/40" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === "") go({ q: "" });
          }}
          placeholder="Search products…"
          className="input pl-11"
          aria-label="Search products"
        />
      </form>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <span className="text-sm text-muted">
          {count} {count === 1 ? "product" : "products"}
        </span>
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted">Sort</span>
          <select
            value={sort}
            onChange={(e) => go({ sort: e.target.value })}
            className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium outline-none focus:border-teal"
          >
            <option value="featured">Featured</option>
            <option value="popular">Most popular</option>
            <option value="rating">Top rated</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>
    </div>
  );
}
