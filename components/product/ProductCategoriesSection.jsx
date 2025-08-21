import Link from "next/link";
import Heading from "../heading/Heading";
import CategoriesSlider from "./CategoriesSlider";
import { createClient } from "@/prismicio";

const ProductCategoriesSection = async ({ slice: { primary } }) => {
  const client = createClient();

  const docs = await client.getAllByType("category_page", {
    orderings: {
      field: "my.category_page.published_date",
      direction: "desc",
    },
  });

  return (
    <div className="section-full content-inner-2 bg-gray product-categories">
      <div className="container">
        <Heading {...primary} />

        <CategoriesSlider docs={docs} />

        <div className="text-center mt-5">
          <Link
            href="/categories"
            className="site-button button-md"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            Explore Our Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoriesSection;
