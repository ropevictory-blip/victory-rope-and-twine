"use client";

import { PrismicNextImage } from "@prismicio/next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import { useState } from "react";

const CategoriesSlider = ({ docs }) => {
  return (
    <div className="img-carousel service-box-4-area">
      <Splide
        options={{
          type: "slide",
          perPage: 4,
          perMove: 1,
          arrows: false,
          gap: "1rem",
          autoplay: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          breakpoints: {
            768: {
              perPage: 2,
            },
            591: {
              perPage: 1,
            },
          },
        }}
      >
        {docs?.map((item, index) => (
          <SplideSlide key={index}>
            <CategoryItem data={item} index={index} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

const CategoryItem = ({ data: { url, data }, index }) => {
  const { heading, description, image } = data;

  const [showMore, setShowMore] = useState(false);

  return (
    <Link
      href={url}
      className="service-box-4 text-center d-inline-block"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="service-images m-b15">
        {image?.url ? (
          <PrismicNextImage field={image} className="w-100 h-auto" />
        ) : (
          <div
            style={{
              aspectRatio: "1/1",
              background: "#fff",
              borderRadius: "50%",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 30px 0px",
            }}
          />
        )}
      </div>

      <div className="service-content">
        <h6 className="title">{heading}</h6>
        {description?.[0]?.text && (
          <p
            style={{ color: "#7A7B7B" }}
            onClick={() => setShowMore(!showMore)}
            className={`${showMore ? "" : "line-clamp-3"}`}
          >
            {description?.[0]?.text}
          </p>
        )}
      </div>
    </Link>
  );
};

export { CategoryItem };

export default CategoriesSlider;
