import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { business, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Best & Less Blinds & Shutters for a free measure and quote. Call, email or visit us in Blacktown, NSW.",
  alternates: { canonical: "/contacts" },
};

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-oat/10 py-4">
      <span className="eyebrow text-taupe">{label}</span>
      <span className="text-cream">{children}</span>
    </div>
  );
}

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapQuery,
  )}&output=embed`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        crumb="Contact"
        eyebrow="Contact Us"
        title="Let's dress your windows beautifully"
        intro="Book your free measure and quote, or ask us anything. We service homes, offices and apartments right across Sydney."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Details */}
          <Reveal>
            <div>
              <p className="eyebrow text-tomato">Get in touch</p>
              <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
                We&rsquo;d love to hear from you
              </h2>

              <div className="mt-8">
                <InfoRow label="Phone">
                  <a
                    href={business.phoneHref}
                    className="text-lg font-medium transition-colors hover:text-tomato"
                  >
                    {business.phone}
                  </a>
                </InfoRow>
                <InfoRow label="Email">
                  <a
                    href={`mailto:${business.email}`}
                    className="transition-colors hover:text-tomato"
                  >
                    {business.email}
                  </a>
                  <br />
                  <a
                    href={`mailto:${business.altEmail}`}
                    className="text-sm text-taupe transition-colors hover:text-tomato"
                  >
                    {business.altEmail}
                  </a>
                </InfoRow>
                <InfoRow label="Visit">
                  {business.address}
                  <br />
                  <span className="text-sm text-taupe">{business.showroom}</span>
                </InfoRow>
                <div className="py-4">
                  <span className="eyebrow text-taupe">Availability</span>
                  <p className="mt-2 text-sm text-oat">
                    {business.availability}. We&rsquo;ll get back to you,
                    usually within one business day.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-oat/10 bg-cocoa-light p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] sm:p-9">
              <h3 className="font-serif text-2xl text-cream">
                Request a free quote
              </h3>
              <p className="mt-1.5 text-sm text-oat">
                Fill in the form and we&rsquo;ll get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <Reveal>
            <p className="eyebrow text-tomato">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <dl className="mt-8 divide-y divide-oat/10 border-t border-oat/10">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) * 80}>
                <div className="py-6">
                  <dt className="font-serif text-lg text-cream">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-oat">{f.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-oat/10 shadow-lg">
              <iframe
                title="Best & Less Blinds location"
                src={mapSrc}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
