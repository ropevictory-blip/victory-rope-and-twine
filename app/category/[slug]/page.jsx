import { createClient } from "@/prismicio";
import Seo from "@/lib/seo/Seo";
import { notFound } from "next/navigation";
import { filter } from "@prismicio/client";
import CategoryProductsSection from "@/components/product/CategoryProductsSection";

const CategoryPage = async ({ params }) => {
  const client = createClient();

  const doc = await client
    .getByUID("category_page", params.slug)
    .catch(() => notFound());

  const docs = await client.getAllByType("product_page", {
    filters: [filter.at("my.product_page.category", doc.id)],
    orderings: {
      field: "my.product_page.published_date",
      direction: "desc",
    },
  });

  return (
    <>
      <CategoryProductsSection
        docs={docs}
        slice={{
          primary: {
            // subheading: ``,
            heading: [
              {
                type: "heading2",
                text: `${doc.data.heading} Products`,
                spans: [],
              },
            
            ],
            description: [
              {
                type: "paragraph",
                text: `${doc.data.description[0].text}`,
                spans: [],
              },
            ],
            number: [{ type: "paragraph", text: "", spans: [] }],
          },
        }}
      />
    </>
  );
};

export async function generateStaticParams() {
  const client = createClient();

  const docs = await client.getAllByType("category_page");

  return docs.map((item) => ({
    slug: item.uid,
  }));
}

export async function generateMetadata({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("category_page", params.slug)
    .catch(() => notFound());

  return Seo(page);
}

export default CategoryPage;
