"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Heading from "../heading/Heading";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import { useState } from "react";

const TestimonialSection = ({
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
              perPage: 2,
              perMove: 1,
              arrows: false,
              autoplay: true,
              breakpoints: {
                768: {
                  perPage: 1,
                },
              },
            }}
          >
            {items.map((item, index) => (
              <SplideSlide key={index}>
                <TestimonialItem data={item} index={index} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

const TestimonialItem = ({ data, index }) => {
  const { review, image, name, info } = data;

  const [show, setShow] = useState(false);

  return (
    <div
      className="testimonial-8"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div
        className={`testimonial-text cursor-pointer ${show ? "" : "text_truncate"}`}
        onClick={() => setShow(!show)}
      >
        <div>
          <PrismicRichText field={review} />
        </div>
      </div>
      <div className="testimonial-detail clearfix">
        <div className="testimonial-pic radius shadow">
          {image?.url ? (
            <PrismicNextImage field={image} />
          ) : (
            <Image
              src="https://images.prismic.io/vrtc/Z1q605bqstJ98Ytq_user.png?auto=format,compress"
              width={100}
              height={100}
              alt="testimonial"
            />
          )}
        </div>
        <h5 className="testimonial-name m-t0 m-b5">{name}</h5>
        <span className="testimonial-position">{info}</span>
      </div>
    </div>
  );
};

export default TestimonialSection;
