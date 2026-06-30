import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business, SITE_URL } from "@/lib/content";
import { photos } from "@/lib/images";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: business.name,
  legalName: business.legalName,
  description:
    "Custom-made, affordable quality blinds, plantation shutters and curtains for homes, offices and apartments across Sydney.",
  url: SITE_URL,
  telephone: business.phone,
  email: business.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.suburb,
    addressRegion: business.state,
    postalCode: business.postcode,
    addressCountry: business.country,
  },
  areaServed: { "@type": "City", name: "Sydney" },
  image: `${SITE_URL}${photos.plantationShutters}`,
  logo: `${SITE_URL}/images/logo.jpg`,
  sameAs: [business.social.facebook, business.social.youtube],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: business.name,
  url: SITE_URL,
  inLanguage: "en-AU",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bestandlessblinds.com.au"),
  title: {
    default: `${business.name} | Custom Blinds, Shutters & Curtains`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Custom-made, affordable quality blinds, plantation shutters and curtains for homes, offices and apartments across Sydney. Honest advice, free consultation and 100% customer satisfaction.",
  keywords: [
    "blinds",
    "shutters",
    "plantation shutters",
    "roller blinds",
    "curtains",
    "Blacktown",
    "Sydney",
  ],
  openGraph: {
    title: `${business.name} | Custom Blinds, Shutters & Curtains`,
    description:
      "Custom-made, affordable quality blinds, plantation shutters and curtains across Sydney.",
    type: "website",
    locale: "en_AU",
    images: [photos.plantationShutters],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
