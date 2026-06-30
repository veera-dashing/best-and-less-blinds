import type { NextConfig } from "next";

// The 15 genuine /services/<slug>/ pages are restored as real pages at their
// original URLs (see src/app/services/[slug]/), so they need NO redirect.
// Only these remain: a duplicate shutters page, and three non-product "feature"
// pages whose content lives on the About page. Destinations carry a trailing
// slash so the original (slashed) URLs resolve in a single 308.
const serviceRedirects: { from: string; to: string }[] = [
  { from: "shutters-2", to: "/services/shutters/" },
  { from: "reasonable-price", to: "/about-us/" },
  { from: "best-decorators", to: "/about-us/" },
  { from: "honest-advice", to: "/about-us/" },
];

// Theme-demo / WooCommerce pages that no longer exist — redirect so they never
// 404 and any stray link equity flows to a real page.
const legacyRedirects: { from: string; to: string }[] = [
  { from: "/about-us-style-1", to: "/about-us/" },
  { from: "/services-style-2", to: "/our-services/" },
  { from: "/shop-intro", to: "/shop/" },
  { from: "/home-2", to: "/" },
  { from: "/home-3", to: "/" },
  { from: "/cart", to: "/shop/" },
  { from: "/checkout", to: "/shop/" },
  { from: "/my-account", to: "/shop/" },
  { from: "/classic-1-column", to: "/" },
  { from: "/classic-2-columns", to: "/" },
  { from: "/classic-3-columns", to: "/" },
  { from: "/chess-2-columns", to: "/" },
  { from: "/chess-4-columns", to: "/" },
  { from: "/chess-6-columns", to: "/" },
  { from: "/portfolio-2-columns", to: "/" },
  { from: "/portfolio-3-columns", to: "/" },
  { from: "/portfolio-4-columns", to: "/" },
  { from: "/grid", to: "/" },
  { from: "/cobbles", to: "/" },
  { from: "/masonry", to: "/" },
  { from: "/shortcodes", to: "/" },
  { from: "/typography", to: "/" },
];

// Old dated blog-post URLs (from the WordPress sitemap) → matching new article.
const blogRedirects: { from: string; to: string }[] = [
  {
    from: "/2017/07/05/how-full-should-my-curtains-be",
    to: "/blog/how-full-should-curtains-be/",
  },
  {
    from: "/2017/07/11/blinds-vs-shades-how-to-make-the-right-choice-for-your-home",
    to: "/blog/blinds-vs-shades/",
  },
  {
    from: "/2017/07/11/5-ways-to-maximise-your-homes-natural-light",
    to: "/blog/maximise-natural-light/",
  },
  {
    from: "/2017/07/11/blackout-curtains-benefits-and-uses",
    to: "/blog/blackout-curtains-benefits/",
  },
  {
    from: "/2017/07/11/how-to-choose-the-right-curtains-and-blinds",
    to: "/blog/how-to-choose-curtains-and-blinds/",
  },
  {
    from: "/2017/06/12/the-best-noise-reducing-blinds-for-windows",
    to: "/blog/noise-reducing-blinds/",
  },
];

const nextConfig: NextConfig = {
  // Match the original WordPress URLs, which all use a trailing slash.
  trailingSlash: true,

  async redirects() {
    return [
      ...serviceRedirects.map((r) => ({
        source: `/services/${r.from}`,
        destination: r.to,
        permanent: true,
      })),
      ...legacyRedirects.map((r) => ({
        source: r.from,
        destination: r.to,
        permanent: true,
      })),
      // The /services landing index itself → consolidated products hub.
      { source: "/services", destination: "/our-services/", permanent: true },

      // Old Lorem-Ipsum blog posts → matching real articles where the topic
      // lines up; everything else under /2017/ → the new blog index.
      ...blogRedirects.map((r) => ({
        source: r.from,
        destination: r.to,
        permanent: true,
      })),
      { source: "/2017/:path*", destination: "/blog/", permanent: true },
    ];
  },
};

export default nextConfig;
