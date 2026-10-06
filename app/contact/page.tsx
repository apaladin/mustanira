import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: `Get in touch with the ${SITE.name} team.` };

export default function ContactPage() {
  return (
    <div className="container-x py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">We&apos;re here to help</p>
          <h1 className="mt-2 font-display text-5xl font-semibold text-pine">Contact us</h1>
          <p className="mt-4 text-lg text-muted">
            Questions about sizing, an order list you&apos;ve sent, or certifications for your team? Email us and we&apos;ll get
            back to you within one business day.
          </p>

          <a
            href={`mailto:${SITE.orderEmail}`}
            className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-6 ring-1 ring-ink/5 transition hover:ring-teal"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-pine">
              <MailIcon />
            </span>
            <span>
              <span className="block text-sm text-muted">Email</span>
              <span className="block text-lg font-semibold">{SITE.orderEmail}</span>
            </span>
          </a>

          <div id="bulk" className="mt-8 scroll-mt-32 rounded-3xl bg-blush p-8">
            <h2 className="font-display text-2xl font-semibold text-pine">Bulk, hospital & school orders</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>Volume pricing on scrubs in your unit&apos;s color policy</li>
              <li>Logo and name embroidery</li>
              <li>Group BLS / ACLS / PALS enrollment and on-site skills sessions</li>
              <li>Nurse Week and graduation gift programs</li>
            </ul>
            <p className="mt-4 text-sm text-muted">
              Build your list in the{" "}
              <Link href="/shop" className="font-semibold text-teal underline">
                shop
              </Link>{" "}
              and add your quantities and requirements in the notes — we&apos;ll send a custom quote.
            </p>
          </div>
        </div>
        <div className="relative min-h-96 overflow-hidden rounded-[2rem]">
          <Image
            src="/images/products/aura-jogger-scrub-pants.jpg"
            alt="Smiling nurse in teal scrubs"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-12 text-center text-sm text-muted">
        {SITE.name} is a brand of <strong className="text-ink">{SITE.owner}</strong>.
      </p>
    </div>
  );
}
