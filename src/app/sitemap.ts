import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";
// import { shopProducts } from "@/lib/content"; // re-add when Shop is unhidden
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

// All canonical URLs use a trailing slash to match trailingSlash: true.
function url(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}/${path.replace(/^\/|\/$/g, "")}/`;
}

type Entry = MetadataRoute.Sitemap[number];
type Freq = Entry["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: { path: string; priority: number; freq: Freq }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/our-services", priority: 0.9, freq: "monthly" },
    { path: "/curtains", priority: 0.8, freq: "monthly" },
    { path: "/about-us", priority: 0.7, freq: "yearly" },
    // { path: "/shop", priority: 0.7, freq: "monthly" }, // Shop hidden for now
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/contacts", priority: 0.8, freq: "yearly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
  ];

  const core: Entry[] = corePages.map((p) => ({
    url: url(p.path),
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  const serviceEntries: Entry[] = services.map((s) => ({
    url: url(`/services/${s.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: Entry[] = blogPosts.map((p) => ({
    url: url(`/blog/${p.slug}`),
    lastModified: p.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  // Shop hidden for now — product URLs left out of the sitemap. Re-enable with
  // the nav + /shop entries above:
  // const productEntries: Entry[] = shopProducts.map((p) => ({
  //   url: url(`/product/${p.slug}`),
  //   changeFrequency: "monthly",
  //   priority: 0.5,
  // }));

  return [...core, ...serviceEntries, ...blogEntries];
}
