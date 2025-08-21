"use client";
import { FiCheckCircle } from "react-icons/fi";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaPlay } from "react-icons/fa";

const WhyUsSection = ({ slice: { primary } }) => {
  const { heading, description, items, blocks } = primary;

  const [toggler, setToggler] = useState(false);

  const {
    experience_years,
    text,
    image_1,
    image_2,
    video,
    title,
    details,
    button,
  } = blocks[0];

  return (
    <>
      <div className="section-full" id="choose-us">
        <div className="row m-lr0">
          {/* left side */}
          <div className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info style1 bg-secondry">
            <div className="align-self-center text-white">
              {/* heading */}
              <div
                className="section-head text-white why-us"
                data-sal="slide-up"
                data-sal-duration="1200"
              >
                <h2 className="title">{heading?.[0]?.text}</h2>
                <PrismicRichText field={description} />
              </div>

              {/* list items */}
              <ul className="list-check row white rounded border">
                {items?.map((item, index) => (
                  <ListItem key={index} data={item} index={index} />
                ))}
              </ul>
            </div>
          </div>

          {/* right side */}
          <div className="col-xl-6 col-lg-12 p-lr0">
            <div className="row spno h-100">
              {/* experience years */}
              <div className="col-lg-6 col-md-6 col-sm-6 bg-primary align-items-center d-flex">
                <div
                  className="dlab-services-box text-white"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                >
                  <h2 className="service-year">
                    {experience_years}
                    <small>years of</small>
                  </h2>
                  <h3 className="title m-b0">{text}</h3>
                </div>
              </div>

              {/* image 1 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <PrismicNextImage
                  field={image_1}
                  className="img-cover"
                  data-sal="fade-up"
                  data-sal-duration="600"
                />
              </div>

              {/* image 2 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div
                  className="video-bx radius-no h-100"
                  data-sal="fade-up"
                  data-sal-duration="600"
                >
                  <PrismicNextImage field={image_2} className="img-cover" />
                  <div className="video-play-icon">
                    <a
                      className="popup-youtube video bg-primary cursor-pointer"
                      onClick={() => setToggler(!toggler)}
                    >
                      <i>
                        <FaPlay />
                      </i>
                    </a>
                  </div>
                </div>
              </div>

              {/* details */}
              <div className="col-lg-6 col-md-6 col-sm-6 bg-secondry align-items-center d-flex">
                <div
                  className="dlab-services-box text-white"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                >
                  <h3 className="title text-white m-b15">{title}</h3>
                  <PrismicRichText field={details} />

                  <PrismicNextLink
                    field={button}
                    className="site-button outline white outline-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FsLightbox toggler={toggler} sources={[video.url]} />
    </>
  );
};

const ListItem = ({ data: { title, details }, index }) => {
  return (
    <li
      className="col-sm-6"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <i className="list-icon">
        <FiCheckCircle />
      </i>
      <h4 className="m-b10">{title}</h4>
      <PrismicRichText field={details} />
    </li>
  );
};

export default WhyUsSection;
