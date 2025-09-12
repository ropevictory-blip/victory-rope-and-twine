import { PrismicNextLink } from "@prismicio/next";

const CTASection = ({
  slice: {
    primary: { heading, description, button },
  },
}) => {
  return (
    <div
      className="section-full call-action"
      style={{ backgroundColor: "#007bf6" }}
    >
      <div className="container">
        <div
          className="row rowGap30"
          data-sal="slide-up"
          data-sal-duration="1200"
        >
          <div className="col-lg-9 text-white">
            <h2 className="title">{heading[0]?.text}</h2>
            <p className="m-b0">{description[0]?.text}</p>
          </div>
          <div className="col-lg-3 d-lg-flex">
            <PrismicNextLink
              field={button}
              className="site-button white align-self-center outline ms-auto outline-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
