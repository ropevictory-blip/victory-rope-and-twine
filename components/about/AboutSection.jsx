import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const AboutSection = ({ slice: { primary } }) => {
  const { swap, image, subheading, heading, description, button } = primary;

  return (
    <div className="section-full content-inner-2 const-about about-section">
      <div className="container">
        <div
          className="row align-items-center rowGap30"
          style={{ flexDirection: swap ? "row-reverse" : "row" }}
        >
          <div
            className={`col-lg-5 col-sm-12 col-12 ${swap ? "offset-lg-1" : ""}`}
          >
            {image?.url && (
              <div className="radius-sm m-b30 img-ho1">
                <PrismicNextImage field={image} />
              </div>
            )}
          </div>

          <div
            className={`col-lg-6 col-sm-12 col-12 ${swap ? "" : "offset-lg-1"}`}
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <div className="section-head style2">
              <span>{subheading}</span>
              <h2 className="title">{heading?.[0].text}</h2>
              <PrismicRichText field={description} />
            </div>

            {button?.url && (
              <PrismicNextLink field={button} className="site-button" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
