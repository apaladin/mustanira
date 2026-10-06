import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About us", description: `The story behind ${SITE.name}.` };

export default function AboutPage() {
  return (
    <>
      <section className="container-x grid items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Our story</p>
          <h1 className="mt-2 font-display text-5xl leading-tight font-semibold text-pine">
            We started with one question: <em className="text-coral">what do nurses actually need?</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {SITE.name} began on hospital floors, in break rooms and on long drives home after night shift. Nurses told us
            their scrubs pilled, their shoes gave out and their continuing education was scattered across a dozen sites.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            So we built one place for all of it — apparel engineered for 12-hour shifts, clinical tools you can rely on,
            and certifications and courses taught by nurses who&apos;ve been there.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/products/mustanira-fleece-vest.jpg"
            alt="Confident charge nurse with a stethoscope"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-mint">
        <div className="container-x grid gap-8 py-16 md:grid-cols-3">
          {[
            ["Designed with nurses", "Every product is wear-tested by working RNs, LPNs and CNAs across ICU, ED, L&D and med-surg."],
            ["Built to last", "Fabrics tested through 100+ industrial wash cycles. Tools backed by our quality guarantee."],
            ["Lifelong learning", "Certifications and CE courses that fit around your schedule — not the other way around."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-white p-8">
              <h2 className="font-display text-2xl font-semibold text-pine">{t}</h2>
              <p className="mt-3 leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="rounded-[2rem] bg-pine p-10 text-white sm:p-14">
          <p className="eyebrow">Ownership</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {SITE.name} is owned and operated by {SITE.owner}.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Questions about orders, partnerships or bulk pricing for your hospital or nursing school? Our team is here to help.
          </p>
          <Link href="/contact" className="btn-coral mt-8">
            Contact us <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
