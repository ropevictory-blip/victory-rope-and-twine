"use client";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "../heading/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const MediaSection = ({
  slice: {
    primary,
    primary: { items },
  },
}) => {
  return (
    <div className="section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white content-inner-2 awards">
      <div className="container">
        <div className="section-content">
          <Heading {...primary} />

          <Splide
            className="client-logo-carousel mfp-gallery gallery testimonial-six"
            options={{
              type: "loop",
              perPage: 4,
              pagination: true,
              autoplay: true,
              interval: 3000,
              arrows: false,
              speed: 1000,
              breakpoints: {
                992: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                576: {
                  perPage: 1,
                },
              },
            }}
          >
            {items.map((item, index) => (
              <SplideSlide key={index}>
                <MediaImage data={item} index={index} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

const MediaImage = ({ data: { image }, index }) => {
  return (
    <div
      className="p-2 h-100"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="client-logo">
        <PrismicNextImage field={image} />
      </div>
    </div>
  );
};

export default MediaSection;
