"use client";
import SliderImage from "react-zoom-slider";
import TableSection from "./TableSection";
import { useEffect, useState } from "react";
import SkeltonLoader from "./SkeltonLoader";
import { PrismicRichText } from "@prismicio/react";
import EnquiryButton from "./EnquiryButton";

const ProductHeroSection = ({ data: { data } }) => {
  const { heading, description, specification_items, image_items, price } =
    data;

  const images = image_items.map((item) => {
    return {
      image: item.image.url,
      text: item.image.alt,
    };
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="section-full content-inner product-hero overflow-hidden">
      <div className="container woo-entry">
        <div className="row m-b30">
          <div
            className="col-lg-5 col-sm-12"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            {!show ? (
              <div style={{ marginTop: "-20px" }}>
                <SkeltonLoader />
              </div>
            ) : (
              <SliderImage
                data={images}
                width="100%"
                showDescription={false}
                direction="right"
              />
            )}
          </div>
          <div
            className="col-lg-7 col-sm-12"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <div className="cart">
              <div className="dlab-post-title">
                <h4 className="post-title mb-2">{heading[0].text}</h4>

                {price && (
                  <div className="product-price lg">
                    <span>{price?.split("/")[0]}</span> / {price?.split("/")[1]}
                  </div>
                )}

                <EnquiryButton />

                <PrismicRichText field={description} />
              </div>
              <TableSection data={specification_items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
