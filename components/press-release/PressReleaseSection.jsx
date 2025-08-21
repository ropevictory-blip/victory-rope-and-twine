"use client";

import { IoPlayCircleOutline } from "react-icons/io5";
import Heading from "../heading/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";

const PressReleaseSection = ({ slice: { primary } }) => {
  const [sources, setSources] = useState([]);

  // ===== SLIDE STATE =====
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  // ===== HANDLE SLIDE NUMBER =====
  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  useEffect(() => {
    let tempSources = [];

    primary?.items.map((item) => {
      item?.video_link?.url
        ? tempSources.push(item?.video_link?.url)
        : tempSources.push(item?.image?.large?.url);
    });

    setSources(tempSources);
    return () => {
      setSources([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary]);

  return (
    <>
      <section className="content-inner-2">
        <div className="container">
          <Heading {...primary} />

          <div
            className="row justify-content-center"
            style={{
              rowGap: "30px",
            }}
          >
            {primary?.items?.map((item, index) => (
              <GalleryItem
                key={index}
                data={item}
                onClick={() => openLightboxOnSlide(index + 1)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
    </>
  );
};

const GalleryItem = ({ data, onClick, index }) => {
  const { image, video_link, title } = data;

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-3 col-6">
        <div
          className="gallery-image-wrapper"
          onClick={onClick}
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay={index * 100}
        >
          <div
            className="gallery-image-wrapper-inner"
            style={{
              height: title ? "auto" : "100%",
            }}
          >
            <PrismicNextImage field={image} className="w-100 h-100" />
          </div>

          {video_link?.url && (
            <div className="play-icon">
              <IoPlayCircleOutline />
            </div>
          )}

          {title && <h3 className="text-center">{title}</h3>}
        </div>
      </div>

      <style jsx>{`
        .gallery-image-wrapper {
          border-radius: 4px;
          overflow: hidden;
          cursor: zoom-in;
          position: relative;
          height: 100%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .gallery-image-wrapper-inner {
          overflow: hidden;
        }
        .gallery-image-wrapper img {
          transition: scale 0.3s;
        }

        .gallery-image-wrapper:hover img {
          scale: 1.1;
        }

        h3 {
          margin-top: 14px;
          margin-bottom: 14px;
          font-size: 16px;
          font-weight: 500;
          color: #333;
          line-height: 1.5;
          padding: 0 10px;
        }

        @media (max-width: 767px) {
          h3 {
            font-size: 14px;
          }
        }

        @media (max-width: 591px) {
          h3 {
            font-size: 12px;
          }
        }

        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 50px;
          color: #fff;
          opacity: 0.8;
          transition: opacity 0.3s;
          font-size: 80px;
        }
      `}</style>
    </>
  );
};

export default PressReleaseSection;
