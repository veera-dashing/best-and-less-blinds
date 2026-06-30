import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Best & Less Blinds & Shutters collects, uses and protects the personal information you share with us.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    h: "Who we are",
    p: [
      `${business.legalName} ("we", "us", "our") provides custom blinds, shutters and curtains across Sydney, NSW. This policy explains how we handle personal information in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth).`,
    ],
  },
  {
    h: "Information we collect",
    p: [
      "We only collect the information you choose to give us — typically your name, phone number, email address, the address where work is to be carried out, and any details you include in an enquiry or quote request.",
      "When you submit our contact form, that information is sent to our business email so we can respond to your enquiry and arrange a measure, quote or installation.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use your information solely to respond to your enquiry, provide quotes, arrange consultations and installations, and provide after-sales service. We do not sell your information, and we do not use it for unrelated marketing.",
    ],
  },
  {
    h: "Disclosure",
    p: [
      "We do not share your personal information with third parties except where it is necessary to provide the service you have requested, or where we are required to do so by law.",
    ],
  },
  {
    h: "Data security",
    p: [
      "This website is served over a secure HTTPS connection. We take reasonable steps to protect the information you provide from misuse, loss and unauthorised access.",
    ],
  },
  {
    h: "Access, correction & contact",
    p: [
      "You may request access to, or correction of, the personal information we hold about you, or ask us to delete it, at any time. To make a request or ask a question about this policy, please contact us:",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        crumb="Privacy Policy"
        eyebrow="Privacy Policy"
        title="Your privacy matters to us"
        intro="How we collect, use and protect the personal information you share with Best & Less Blinds & Shutters."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-serif text-2xl text-espresso">{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-bark">
                    {para}
                  </p>
                ))}
              </div>
            ))}

            <div className="rounded-3xl border border-bark/10 bg-linen p-7">
              <p className="text-sm text-stone">Contact</p>
              <p className="mt-2 text-espresso">{business.name}</p>
              <p className="text-bark">{business.address}</p>
              <p className="mt-1 text-bark">
                <a
                  href={business.phoneHref}
                  className="font-medium text-brass-dark"
                >
                  {business.phone}
                </a>
                {" · "}
                <a
                  href={`mailto:${business.email}`}
                  className="font-medium text-brass-dark"
                >
                  {business.email}
                </a>
              </p>
            </div>

            <p className="text-sm text-stone">
              We may update this policy from time to time. Any changes will be
              posted on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
