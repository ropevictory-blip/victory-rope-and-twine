import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const DetailsSection = ({
  slice: {
    primary: { details, image },
  },
  blog,
}) => {
  return (
    <div className={`section-full ${blog ? "" : "content-inner"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mx-auto">
            <div className="blog-content">
              <PrismicRichText field={details} />

              {image?.url && (
                <PrismicNextImage
                  field={image}
                  className="w-100 h-auto br-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
