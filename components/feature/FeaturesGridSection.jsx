import { PrismicRichText } from "@prismicio/react";
import Heading from "../heading/Heading";

const FeaturesGridSection = ({
  slice: {
    primary,
    primary: { items },
  },
}) => {
  return (
    <div
      className="section-full content-inner"
      style={{
        backgroundColor: "#F7F3F4",
      }}
    >
      <div className="container">
        <Heading {...primary} />

        <div className="row justify-content-center">
          {items.map((item, index) => (
            <FeaturesGridItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesGridItem = ({ data: { title, details } }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
      <div className="icon-bx-wraper sr-iconbox1 h-100">
        <div className="icon-content">
          <h4 className="dlab-tilte">{title}</h4>
          <PrismicRichText field={details} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesGridSection;
