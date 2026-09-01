import { createClient } from "@/prismicio";

const RESERVED_ROUTES = new Set([
  "about",
  "blogs",
  "categories",
  "contact",
  "gallery",
  "press-release",
  "privacy-policy",
  "products",
  "terms-and-conditions",
  "thank-you",
]);

const getSiteUrl = () => {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
    process.env.NEXT_PUBLIC_PRISMIC_ID && process.env.NEXT_PUBLIC_TLD
      ? `https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.${process.env.NEXT_PUBLIC_TLD}`
      : "",
    process.env.PRISMIC_ID && process.env.TLD
      ? `https://${process.env.PRISMIC_ID}.${process.env.TLD}`
      : "",
  ];

  return candidates.find(Boolean) || "https://www.victoryropeandtwine.com";
};

const buildUrl = (path = "/") => new URL(path, getSiteUrl()).toString();

const createEntry = ({ path, lastModified, changeFrequency = "weekly", priority = 0.7 }) => ({
  url: buildUrl(path),
  lastModified: lastModified ? new Date(lastModified) : new Date(),
  changeFrequency,
  priority,
});

export default async function sitemap() {
  const client = createClient();

  const staticEntries = [
    createEntry({ path: "/", lastModified: new Date(), changeFrequency: "daily", priority: 1.0 }),
    createEntry({ path: "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }),
    createEntry({ path: "/products", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 }),
    createEntry({ path: "/blogs", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 }),
    createEntry({ path: "/categories", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 }),
    createEntry({ path: "/gallery", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }),
    createEntry({ path: "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }),
    createEntry({ path: "/press-release", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }),
    createEntry({ path: "/privacy-policy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 }),
    createEntry({ path: "/terms-and-conditions", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 }),
    createEntry({ path: "/thank-you", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 }),
  ];

  const [products, customPages, blogPosts, categoryPages] = await Promise.all([
    client.getAllByType("product_page").catch(() => []),
    client.getAllByType("custom_page").catch(() => []),
    client.getAllByType("blog_post").catch(() => []),
    client.getAllByType("category_page").catch(() => []),
  ]);

  const dynamicEntries = [
    ...products
      .filter((item) => !RESERVED_ROUTES.has(item.uid))
      .map((item) =>
        createEntry({
          path: `/${item.uid}`,
          lastModified: item.last_publication_date || new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        }),
      ),
    ...customPages
      .filter((item) => !RESERVED_ROUTES.has(item.uid))
      .map((item) =>
        createEntry({
          path: `/${item.uid}`,
          lastModified: item.last_publication_date || new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        }),
      ),
    ...blogPosts.map((item) =>
      createEntry({
        path: `/post/${item.uid}`,
        lastModified: item.last_publication_date || new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }),
    ),
    ...categoryPages.map((item) =>
      createEntry({
        path: `/category/${item.uid}`,
        lastModified: item.last_publication_date || new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }),
    ),
  ];

  const uniqueEntries = [...staticEntries, ...dynamicEntries].filter(
    (entry, index, arr) => arr.findIndex((item) => item.url === entry.url) === index,
  );

  return uniqueEntries;
}
