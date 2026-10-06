import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${SITE.url}${p}`;
  return [
    { url: u("/"), priority: 1 },
    { url: u("/shop"), priority: 0.9 },
    { url: u("/about") },
    { url: u("/contact") },
    ...CATEGORIES.map((c) => ({ url: u(`/shop?category=${c.slug}`), priority: 0.8 })),
    ...PRODUCTS.map((p) => ({ url: u(`/product/${p.slug}`), priority: 0.7 })),
  ];
}
