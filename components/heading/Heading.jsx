import { PrismicRichText } from "@prismicio/react";

const Heading = ({ subheading, heading, description , docs=null}) => {
  console.log(docs);
  
  return (
    <div
      className="section-head text-black text-center"
      data-sal="slide-up"
      data-sal-duration="1200"
    >
      <span>{subheading}</span>
      <h2 className="title">{heading?.[0]?.text}</h2>
      <PrismicRichText field={description} />

      {/* {docs?.[0]?.uid === "jute-rope" && (
        <div>arpan</div>
      )} */}
    </div>
  );
};

export default Heading;
