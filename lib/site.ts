export const SITE = {
  name: "Mustanira",
  tagline: "Made for the ones who care.",
  description:
    "Mustanira makes premium scrubs, footwear, gear, certifications and courses for nurses — designed for 12-hour shifts and the career that follows.",
  orderEmail: "info@mustanira.com",
  owner: "LEDSHOW LLC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mustanira.com",
};

export const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
