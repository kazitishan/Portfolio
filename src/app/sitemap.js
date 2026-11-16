import info from "@/data/info.json";

export const dynamic = "force-static";

const { pages, links } = info;

// trailingSlash is enabled in next.config.mjs, so match the canonical URLs
const withSlash = (href) => (href.endsWith("/") ? href : `${href}/`);

export default function sitemap() {
  return pages.map((page) => ({
    url: new URL(withSlash(page.href), links.site).toString(),
    lastModified: new Date(),
  }));
}
