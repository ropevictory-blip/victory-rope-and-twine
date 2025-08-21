import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import { notFound } from "next/navigation";

import ProductHeroSection from "@/components/product/ProductHeroSection";
import ProductsSection from "@/components/product/ProductsSection";

const ProductPage = async ({ params }) => {
  const client = createClient();

  const product = await client
    .getByUID("product_page", params.slug)
    .catch(() => null);

  const custom = await client
    .getByUID("custom_page", params.slug)
    .catch(() => null);

  const [product_page, custom_page] = await Promise.all([product, custom]);

  const doc = product_page || custom_page;

  // Redirect to 404 if no document is found
  if (!doc) notFound();

  return (
    <>
      {/* // Render Product Hero Section */}
      {product_page && <ProductHeroSection data={doc} />}

      {/* // Render SliceZone */}
      <SliceZone slices={doc.data.slices} components={components} />

      {/* // Render Products Section */}
      {product_page && (
        <ProductsSection
          slice={{
            primary: {
              subheading: "Latest Products",
              heading: [
                {
                  type: "heading2",
                  text: "Our Products",
                  spans: [],
                },
              ],
              number: 4,
            },
          }}
        />
      )}
    </>
  );
};

export async function generateStaticParams() {
  const client = createClient();

  const products = await client.getAllByType("product_page");

  const custom = await client.getAllByType("custom_page");

  const [product_page, custom_page] = await Promise.all([products, custom]);

  const docs = [...product_page, ...custom_page];

  return docs.map((item) => ({
    slug: item.uid,
  }));
}

export async function generateMetadata({ params }) {
  const client = createClient();

  const product = await client
    .getByUID("product_page", params.slug)
    .catch(() => null);

  const custom = await client
    .getByUID("custom_page", params.slug)
    .catch(() => null);

  const [product_page, custom_page] = await Promise.all([product, custom]);

  const page = product_page || custom_page;

  if (!page) return notFound();

  return Seo(page);
}

export default ProductPage;
