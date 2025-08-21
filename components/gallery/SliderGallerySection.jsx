"use client";
import { PrismicNextImage } from "@prismicio/next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

const SliderGallerySection = ({
  slice: {
    primary: { items },
  },
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Splide
      className="testimonial-six slider-gallery"
      data-sal="slide-up"
      data-sal-duration="1200"
      onMove={(splide, newIndex) => setActiveIndex(newIndex)}
      options={{
        type: "loop",
        rewind: true,
        perPage: 1,
        pagination: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        perMove: 1,
        arrows: false,
        padding: { left: "300px", right: "300px" },
        focus: "center",
        autoplay: true,
        interval: 3000,
        speed: 1000,
        breakpoints: {
          1600: {
            padding: { left: "200px", right: "200px" },
          },
          768: {
            padding: { left: "30px", right: "30px" },
          },
        },
      }}
    >
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <SliderGalleryItem data={item} active={activeIndex === index} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

const SliderGalleryItem = ({ data: { image }, active }) => {
  return (
    <>
      <div className={`overlay_ ${active ? "opa" : ""}`}>
        <PrismicNextImage field={image} />
      </div>

      <style jsx>{`
        .overlay_ {
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .overlay_::before {
          content: "";
          background: rgba(0, 0, 0, 0.6);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.4s;
        }

        .opa.overlay_::before {
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default SliderGallerySection;
