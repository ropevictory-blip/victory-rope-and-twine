"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Heading from "../heading/Heading";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import { useState } from "react";

const ClientsSection = ({
  slice: {
    primary,
    primary: { items },
  },
}) => {
  return (
    <div className="section-full content-inner-2 bg-gray" id="client">
      <div className="container">
        <Heading {...primary} />
        <div className="testimonial-six">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              gap: "1rem",
              arrows: false,
              autoplay: true,
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
            {items.map((item, index) => (
              <SplideSlide key={index}>
                <ClientItem data={item} index={index} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

const ClientItem = ({ data, index }) => {
  const { name, info } = data;

  return (
    <div
      className="testimonial-8 bg-white h-100 text-center"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
      style={{
        borderRadius: "10px",
        border: "1px solid #02172C",
      }}
    >
      <div className="testimonial-detail clearfix">
        <h5 className="testimonial-name m-t0 m-b5">{name}</h5>
        <span className="testimonial-position">{info}</span>
      </div>
    </div>
  );
};

export default ClientsSection;
