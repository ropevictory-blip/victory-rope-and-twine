import Link from "next/link";
import Heading from "../heading/Heading";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import EnquiryButton from "./EnquiryButton";
import Products from "./Products";

const ProductsSection = async ({ slice: { primary } }) => {
  const client = createClient();

  const { number } = primary;

  let docs = null;

  if (number) {
    let tempDoc = await client.getByType("product_page", {
      orderings: {
        field: "my.product_page.published_date",
        direction: "desc",
      },
      pageSize: number,
    });

    docs = tempDoc?.results;
  } else {
    docs = await client.getAllByType("product_page", {
      orderings: {
        field: "my.product_page.published_date",
        direction: "desc",
      },
    });
  }

  const categories = await client.getAllByType("category_page", {
    orderings: {
      field: "my.category_page.published_date",
      direction: "desc",
    },
  });

  return (
    <div className="section-full content-inner-2 bg-gray">
      <div className="container">
        <Heading {...primary} />

        <Products categories={categories} docs={docs} number={number} />

        {number && (
          <div className="text-center mt-5">
            <Link href="/products" className="site-button button-md">
              Explore Our Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductItem = ({ data: { data, url }, index }) => {
  const { heading, image_items, price } = data;

  return (
    <div
      className="col-lg-3 col-md-6 col-sm-6"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="dlab-box service-box-2 h-100">
        <Link href={url}>
          <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
            <div className="product-image">
              <PrismicNextImage field={image_items[0]?.image} />
            </div>
          </div>
        </Link>
        <div className="dlab-info">
          <h4 className="title">
            <Link href={url}>{heading[0].text}</Link>
          </h4>

          {price && (
            <div className="product-price">
              <span>{price?.split("/")[0]}</span> / {price?.split("/")[1]}
            </div>
          )}

          <EnquiryButton title={heading[0].text} fullWidth={true} />
        </div>
      </div>
    </div>
  );
};

export { ProductItem };

export default ProductsSection;
