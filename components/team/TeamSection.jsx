import { PrismicNextImage } from "@prismicio/next";
import Heading from "../heading/Heading";

const TeamSection = ({
  slice: {
    primary,
    primary: { items },
  },
}) => {
  return (
    <div className="section-full content-inner-2 bg-gray">
      <div className="container">
        <Heading {...primary} />

        <div className="row justify-content-center">
          {items.map((item, index) => (
            <TeamMemberItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberItem = ({ data: { image, name, info, details }, index }) => {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="dlab-box m-b30 dlab-team1">
        <div className="dlab-media">
          <PrismicNextImage field={image} />
        </div>
        <div className="dlab-info">
          <h4 className="dlab-title">{name}</h4>
          <span className="dlab-position">{info}</span>

          {details && (
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.4",
                marginTop: "10px",
              }}
            >
              {details}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
