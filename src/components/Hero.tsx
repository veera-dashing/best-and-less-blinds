"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,182,118,0.35), transparent 65%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-bark/15 bg-linen/70 px-4 py-1.5 text-xs font-medium text-bark">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            Servicing Sydney homes, offices & apartments
          </div>

          <div className="mt-6 grid">
            {heroSlides.map((slide, i) => (
              <div
                key={i}
                style={{ gridArea: "1 / 1 / 2 / 2" }}
                className={`transition-all duration-700 ease-out ${
                  i === active
                    ? "opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 translate-y-2"
                }`}
                aria-hidden={i !== active}
              >
                <p className="eyebrow text-brass-dark">{slide.eyebrow}</p>
                <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-espresso sm:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-bark">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contacts"
              className="rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-brass-dark hover:shadow-xl"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/our-services"
              className="group flex items-center gap-2 text-sm font-semibold text-espresso"
            >
              Explore our range
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* slide dots */}
          <div className="mt-10 flex gap-2.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-brass" : "w-3 bg-bark/25 hover:bg-bark/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product photo, crossfading with the active slide */}
        <div className="relative z-10">
          <div className="relative mx-auto aspect-4/5 w-full max-w-md">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-bark shadow-[0_40px_80px_-20px_rgba(43,36,32,0.45)]">
              {heroSlides.map((slide, i) => (
                <Image
                  key={i}
                  src={slide.image}
                  alt={slide.eyebrow}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 60vw, 100vw"
                  className={`object-cover transition-opacity duration-700 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== active}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" />
            </div>

            {/* floating quality tag */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-bark/10 bg-linen px-5 py-3 shadow-xl">
              <p className="font-serif text-lg text-espresso">Made to measure</p>
              <p className="text-xs text-stone">Honest advice, every time</p>
            </div>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8 lg:mt-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-bark/10 bg-bark/10 sm:grid-cols-4">
          {[
            { n: "100%", l: "Customer satisfaction" },
            { n: "Free", l: "Measure & quote" },
            { n: "Custom", l: "Made to measure" },
            { n: "Sydney", l: "Wide service area" },
          ].map((s) => (
            <div key={s.l} className="bg-linen px-6 py-7 text-center">
              <dt className="font-serif text-3xl text-espresso">{s.n}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-stone">
                {s.l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
