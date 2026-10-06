import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, CapIcon, CheckIcon, HeartIcon, MailIcon, ShieldIcon, Stars, TruckIcon } from "@/components/Icons";
import { CATEGORIES, PRODUCTS, getProduct } from "@/lib/products";
import { SITE, unsplash } from "@/lib/site";

const pick = (slugs: string[]) => slugs.map((s) => getProduct(s)).filter((p) => p !== undefined);

const BESTSELLERS = pick([
  "aura-v-neck-scrub-top",
  "aura-jogger-scrub-pants",
  "cloudstep-nursing-sneaker",
  "cardio-pro-stethoscope",
  "graduated-compression-socks-3pk",
  "shift-warm-up-jacket",
  "nurse-essentials-kit",
  "surgical-scrub-cap",
]);

const LEARN = PRODUCTS.filter((p) => p.category === "certifications" || p.category === "courses")
  .sort((a, b) => b.reviews - a.reviews)
  .slice(0, 4);

const TESTIMONIALS = [
  {
    quote:
      "I've tried every scrub brand out there. The Aura joggers are the first pair that still feel good at hour twelve — and the pockets actually hold my phone.",
    name: "Danielle R., RN",
    role: "ICU · Houston, TX",
    image: unsplash("1784333250630-e647a26b2240"),
  },
  {
    quote:
      "Ordered BLS and ACLS for our entire new-hire cohort plus scrubs in our unit color. One email, one quote, done. Their team made it so easy.",
    name: "Keisha T., MSN",
    role: "Nurse Educator · Atlanta, GA",
    image: unsplash("1643297654416-05795d62e39c"),
  },
  {
    quote:
      "The NCLEX prep questions were harder than the real exam — in the best way. I passed in 85 questions and wore my Mustanira set on my first day.",
    name: "Priya S., RN",
    role: "New Grad · Phoenix, AZ",
    image: unsplash("1623854767648-e7bb8009f0db"),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-blush lg:block" />
        <div className="container-x relative grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up">
            <p className="eyebrow">New season · The Aura Collection</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-pine sm:text-6xl lg:text-7xl">
              Made for the ones <em className="text-coral">who care.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Premium scrubs, shift-proof footwear, clinical tools, certifications and courses — everything a nurse needs,
              from nursing school to charge nurse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop?category=scrubs" className="btn-primary">
                Shop scrubs <ArrowRight />
              </Link>
              <Link href="/shop?category=certifications" className="btn-outline">
                Get certified
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              {[
                ["50k+", "Nurses outfitted"],
                ["4.9★", "Average rating"],
                ["1,200+", "Hospitals & schools"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-semibold text-pine">{n}</dt>
                  <dd className="mt-1 text-xs text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-pine/20">
              <Image
                src="/images/hero-nurse.jpg"
                alt="Smiling young nurse in teal Mustanira scrubs with a stethoscope"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                  <Image src="/images/products/lite-classic-stethoscope.jpg" alt="" fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Lite Classic Stethoscope</p>
                  <Stars rating={4.7} />
                </div>
              </div>
            </div>
            <div className="absolute top-6 -right-3 hidden rounded-2xl bg-pine px-4 py-3 text-white shadow-xl sm:block">
              <p className="text-xs text-white/70">Free engraving</p>
              <p className="font-display text-lg font-semibold">This month only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-ink/10 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-6 text-sm md:grid-cols-4">
          {[
            [TruckIcon, "Free shipping over $75"],
            [ShieldIcon, "30-day easy exchanges"],
            [CapIcon, "CE-approved courses"],
            [HeartIcon, "Bulk & hospital pricing"],
          ].map(([Icon, label]) => {
            const I = Icon as typeof TruckIcon;
            return (
              <div key={label as string} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mint text-pine">
                  <I />
                </span>
                <span className="font-medium">{label as string}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Shop by category</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-pine">Everything for your shift — and your career</h2>
          </div>
          <Link href="/shop" className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-coral">
            View all products <ArrowRight />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/shop?category=${c.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-sand"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                  <p className="mt-1 hidden text-xs text-white/80 lg:block">{c.blurb}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container-x pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Nurse favorites</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-pine">Bestsellers</h2>
          </div>
          <Link href="/shop?sort=popular" className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-coral">
            Shop bestsellers <ArrowRight />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {BESTSELLERS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Feature split */}
      <section className="bg-mint">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl shadow-pine/10 lg:max-w-lg">
            <Image
              src="/images/products/core-classic-scrub-set.jpg"
              alt="Two smiling nurses in blue scrubs"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="eyebrow">The Aura fabric</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-pine sm:text-5xl">Built for 12-hour shifts.</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              We spent two years testing fabrics with ICU, ED and med-surg nurses. The result: scrubs that stretch with every
              compression, wick away sweat and still look crisp at handoff.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Four-way stretch for full range of motion",
                "Moisture-wicking & anti-odor",
                "Wrinkle- and fade-resistant",
                "Pockets designed by nurses",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-medium">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pine text-white">
                    <CheckIcon width={14} height={14} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/product/aura-v-neck-scrub-top" className="btn-primary mt-10">
              Shop the Aura top <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Learn & certify */}
      <section className="bg-pine text-white">
        <div className="container-x py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="eyebrow">Mustanira Academy</p>
              <h2 className="mt-2 font-display text-4xl font-semibold">Certifications & courses that move your career.</h2>
              <p className="mt-5 leading-relaxed text-white/75">
                BLS, ACLS and PALS, NCLEX prep, IV therapy, EKG and leadership — taught by practicing nurses and educators.
                Team enrollment available for units and schools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/shop?category=certifications" className="btn-coral">
                  Certifications
                </Link>
                <Link href="/shop?category=courses" className="btn border border-white/25 text-white hover:bg-white/10">
                  Courses & CE
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-4">
              {LEARN.map((p) => (
                <Link key={p.slug} href={`/product/${p.slug}`} className="group rounded-2xl bg-white/5 p-3 transition hover:bg-white/10">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 16vw, 45vw" className="object-cover transition group-hover:scale-105" />
                  </div>
                  <h3 className="mt-3 text-sm leading-snug font-semibold">{p.name}</h3>
                  <p className="mt-1 text-xs text-white/60">{p.details?.[0]?.value}</p>
                  <p className="mt-2 text-sm font-semibold text-coral">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-20">
        <div className="text-center">
          <p className="eyebrow">Loved on every unit</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-pine">Nurses say it best</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink/5">
              <Stars rating={5} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink/85">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={t.image} alt="" fill sizes="48px" className="object-cover" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* How ordering works */}
      <section className="container-x">
        <div className="grid overflow-hidden rounded-[2rem] bg-blush lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="eyebrow">Simple ordering</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-pine">Send us your list. We handle the rest.</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Build your order list", "Add scrubs, gear, certifications or courses — any size, color and quantity."],
                ["Send it to our team", `Your list goes straight to ${SITE.orderEmail}. No payment needed yet.`],
                ["Get your quote", "We reply within one business day with a final total, shipping options and a secure payment link."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pine font-display font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="mt-1 text-sm text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Start your list <ArrowRight />
              </Link>
              <a href={`mailto:${SITE.orderEmail}`} className="btn-outline">
                <MailIcon /> Email us
              </a>
            </div>
          </div>
          <div className="relative min-h-80">
            <Image
              src="/images/products/new-grad-residency-bootcamp.jpg"
              alt="Smiling new nurse walking down a hospital corridor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
