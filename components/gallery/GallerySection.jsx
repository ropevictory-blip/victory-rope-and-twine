"use client";

import { IoPlayCircleOutline } from "react-icons/io5";
import Heading from "../heading/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";

const GallerySection = ({ slice: { primary } }) => {
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
  const { image, video_link } = data;

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div
          className="gallery-image-wrapper"
          onClick={onClick}
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay={index * 100}
        >
          <PrismicNextImage field={image} className="w-100 h-auto" />

          {video_link?.url && (
            <div className="play-icon">
              <IoPlayCircleOutline />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .gallery-image-wrapper {
          border-radius: 4px;
          overflow: hidden;
          cursor: zoom-in;
          position: relative;
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

export default GallerySection;
