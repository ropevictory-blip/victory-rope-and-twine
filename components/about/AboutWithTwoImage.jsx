import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const AboutWithTwoImage = ({ slice: { primary } }) => {
  const { image, secondary_image,  description, button } = primary;

  return (
    <div className="section-full content-inner-2 const-about about-section">
      <div className="container">
        <div
          className="row align-items-center rowGap30"
        >
          <div
            className={`col-lg-6 col-sm-12 col-12`}
          >
            {image?.url && (
              <div className="radius-sm m-b30 ">
                <PrismicNextImage field={image} />
              </div>
            )}
          </div>
          <div
            className={`col-lg-6 col-sm-12 col-12`}
          >
            {image?.url && (
              <div className="radius-sm m-b30 ">
                <PrismicNextImage field={secondary_image} />
              </div>
            )}
          </div>

          <div
            className={`col-lg-12 col-sm-12 col-12`}
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <div className="section-head style2">
              <PrismicRichText field={description} />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              {button?.url && (
                <PrismicNextLink field={button} className="site-button " />
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithTwoImage;
