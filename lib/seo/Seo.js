const getSiteUrl = () => {
  const siteId = process.env.PRISMIC_ID;
  const siteTld = process.env.TLD;

  if (siteId && siteTld) {
    return `https://${siteId}.${siteTld}`;
  }

  return "https://www.victoryropeandtwine.com";
};

const SITE_URL = getSiteUrl();
const normalizeUrl = (path = "/") => new URL(path, SITE_URL).toString();

const Seo = (page) => {
  const { meta_title, meta_description, featured_image } = page?.data || {};
  const canonicalUrl = normalizeUrl(page?.url || "/");

  return {
    title: meta_title || "Victory Rope and Twine",
    description:
      meta_description || "Premium ropes and twines for industrial and personal use.",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": "/",
      },
    },

    openGraph: {
      title: meta_title || "Victory Rope and Twine",
      description:
        meta_description || "Premium ropes and twines for industrial and personal use.",
      url: canonicalUrl,
      siteName: "Victory Rope and Twine",
      images: [
        {
          url: featured_image?.url || `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 600,
          alt: featured_image?.alt || meta_title || "Victory Rope and Twine",
        },
        {
          url: featured_image?.large?.url || `${SITE_URL}/og-image.jpg`,
          width: 1024,
          height: 524,
          alt: featured_image?.alt || meta_title || "Victory Rope and Twine",
        },
        {
          url: featured_image?.medium?.url || `${SITE_URL}/og-image.jpg`,
          width: 300,
          height: 150,
          alt: featured_image?.alt || meta_title || "Victory Rope and Twine",
        },
        {
          url: featured_image?.thumbnail?.url || `${SITE_URL}/og-image.jpg`,
          width: 150,
          height: 150,
          alt: featured_image?.alt || meta_title || "Victory Rope and Twine",
        },
      ].filter(Boolean),
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

export default Seo;
