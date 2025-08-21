"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Heading from "../heading/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const FeaturesSection = ({
  slice: {
    primary,
    primary: { items },
  },
}) => {
  return (
    <div className="section-full content-inner-2 bg-gray features-section">
      <div className="container">
        <Heading {...primary} />

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            arrows: false,
            autoplay: true,
            gap: "1rem",
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
          {items?.map((item, index) => (
            <SplideSlide key={index}>
              <FeatureItem data={item} index={index} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

const FeatureItem = ({ data, index }) => {
  const { icon, title, details } = data;

  return (
    <div
      className="icon-bx-wraper bx-style-1 center bg-white h-100"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="m-b20">
        <PrismicNextImage field={icon} className="w-auto" />
      </div>
      <div className="icon-content">
        <h3 className="dlab-tilte text-uppercase">{title}</h3>

        <PrismicRichText field={details} />
      </div>
    </div>
  );
};

export default FeaturesSection;
