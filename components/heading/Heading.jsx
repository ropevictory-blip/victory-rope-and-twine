import { PrismicRichText } from "@prismicio/react";

const Heading = ({ subheading, heading, description }) => {
  return (
    <div
      className="section-head text-black text-center"
      data-sal="slide-up"
      data-sal-duration="1200"
    >
      <span>{subheading}</span>
      <h2 className="title">{heading?.[0].text}</h2>
      <PrismicRichText field={description} />
    </div>
  );
};

export default Heading;
