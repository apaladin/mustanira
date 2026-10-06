# Mustanira

Online store for **Mustanira**, a brand for nurses: scrubs, footwear, clinical tools, certifications, courses and gifts.
Mustanira is owned and operated by **LEDSHOW LLC**.

There's no payment checkout yet. Shoppers build an **order list**, and clicking **Send order list** emails it to
`info@mustanira.com`. The team then replies to the customer with a final quote and a payment link.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Product photos come from Unsplash's CDN (free Unsplash License), resized through a custom image loader
- Order emails go out through [Resend](https://resend.com), via its REST API (no SDK)

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub, then **Import Project** in Vercel. It detects Next.js automatically, so no settings are needed.
2. To have orders emailed straight from the site, add these under **Settings → Environment Variables**:
   - `RESEND_API_KEY`: from resend.com (the free tier is enough)
   - `ORDER_FROM_EMAIL`: a sender on a domain you've verified in Resend, e.g. `Mustanira Orders <orders@mustanira.com>`
   - `ORDER_TO_EMAIL` (optional): defaults to `info@mustanira.com`
   - `NEXT_PUBLIC_SITE_URL` (optional): your production URL

If `RESEND_API_KEY` isn't set, ordering still works. **Send order list** opens the shopper's email app with the
order already written and addressed to `info@mustanira.com`.

## Editing products

Every product and category lives in [`lib/products.ts`](lib/products.ts). To add a product, add an object to
`PRODUCTS`. For images, use `unsplash("<photo-id>")` or any `https://images.unsplash.com/...` URL. Pages are generated
automatically.

Brand name, order email and owner are set in [`lib/site.ts`](lib/site.ts).
