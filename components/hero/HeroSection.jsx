import { PrismicNextLink } from "@prismicio/next";
import EnquiryButton from "../product/EnquiryButton";

const HeroSection = ({ slice: { primary } }) => {
  const { heading, description, button, video } = primary;

  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="container header-content">
            <div className="row">
              <div
                className="mx-auto text-center"
                data-sal="slide-up"
                data-sal-duration="1200"
                style={{
                  maxWidth: "800px",
                }}
              >
                <h1>{heading[0].text}</h1>
                {description[0].text && (
                  <p
                    style={{
                      maxWidth: "600px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {description[0].text}
                  </p>
                )}

                {/* {button?.url && (
                  <PrismicNextLink field={button} className="site-button" />
                )} */}

                <EnquiryButton hideWhatsapp={true} />
              </div>
            </div>
          </div>

          {video?.url && (
            <video
              id="video"
              className="video"
              preload="metadata"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src={video?.url} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
