"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images, alt, badge }: { images: string[]; alt: string; badge?: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
        <Image
          key={images[active]}
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="animate-fade-up object-cover"
        />
        {badge && (
          <span className="absolute top-5 left-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-pine shadow">
            {badge}
          </span>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`relative h-20 w-16 overflow-hidden rounded-xl transition sm:h-24 sm:w-20 ${i === active ? "ring-2 ring-pine ring-offset-2 ring-offset-cream" : "opacity-70 hover:opacity-100"}`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
