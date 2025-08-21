"use client";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaPlay } from "react-icons/fa";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountersSection = ({
  slice: {
    primary: { background_image, items, heading, video },
  },
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div
        className="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box"
        style={{
          backgroundImage: `url(${background_image.url})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div
                className="section-head text-white mb-0"
                data-sal="slide-right"
                data-sal-duration="1200"
              >
                <h2 className="title">{heading[0]?.text}</h2>
                {video?.url && (
                  <a
                    className="popup-youtube video play-btn cursor-pointer"
                    onClick={() => setToggler(!toggler)}
                  >
                    <span>
                      <i>
                        <FaPlay />
                      </i>
                    </span>
                    {video?.text}
                  </a>
                )}
              </div>
            </div>

            {/* counters */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div
                className="row sp20"
                style={{
                  rowGap: "20px",
                }}
              >
                {items?.map((item, index) => (
                  <CounterItem key={index} data={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FsLightbox toggler={toggler} sources={[video.url]} />
    </>
  );
};

const CounterItem = ({ data: { value, text }, index }) => {
  return (
    <div
      className="col-md-4 h-100"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="icon-bx-wraper center counter-style-5 h-100">
        <div className="icon-content">
          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }) => (
              <h2 className="dlab-tilte counter">
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={parseInt(value.split(" ")[0], 10)}
                    duration={3}
                  />
                ) : null}

                {value.split(" ")[1]}
              </h2>
            )}
          </VisibilitySensor>
          <div className="dlab-separator bg-primary" />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CountersSection;
