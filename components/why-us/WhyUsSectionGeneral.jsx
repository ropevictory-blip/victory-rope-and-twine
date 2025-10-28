"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./WhyUsSectionGeneral.css";
const WhyUsSectionGeneral = ({ slice: { primary } }) => {
  const {
    general_heading,
    general_description,
    general_image_one,
    general_image_two,
    general_image_three,
    video_link,
  } = primary || {};

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const SafeRichText = ({ field }) => {
    if (Array.isArray(field)) return <p>{field}</p>;
    if (typeof field === "string") return <p>{field}</p>;
    return null;
  };

  const imageItems = [
    general_image_one,
    general_image_two,
    general_image_three,
  ].filter((img) => img?.url);

  // Extract video ID from YouTube URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = video_link?.embed_url ? getYouTubeId(video_link.embed_url) : null;
  const thumbnailUrl = video_link?.thumbnail_url;
  const videoTitle = video_link?.title;

  return (
    <section className="whyus-section text-center py-5">
      <div className="container">
        {/* Heading */}
        {general_heading && (
          <div className="mb-4">
            <h2 className="fw-bold">
              <SafeRichText field={general_heading} />
            </h2>
          </div>
        )}

        {/* Description */}
        {general_description && (
          <div className="mb-5">
            <SafeRichText field={general_description} />
          </div>
        )}

        {/* Image + Video Grid */}
        <div className="row justify-content-center g-2 align-items-stretch">
          {imageItems.map((item, index) => (
            <div className="col-12 col-md-3" key={index}>
              {/* <div className="media-box"> */}
                {item?.url && (
                  <img
                    src={item.url}
                    alt="Gallery"
                    className="img-fluid"
                  />
                )}
              {/* </div> */}
            </div>
          ))}

          {/* Video Box */}
          {video_link && (
            <div className="col-12 col-md-6  video-box" onClick={() => setLightboxOpen(true)}
                role="button"
                tabIndex={0}>
              {/* <div
                className="media-box video-box"
                
              > */}
                <img
                  src={thumbnailUrl}
                  alt={videoTitle}
                  className="img-fluid video-thumbnail"
                />
                <div className="play-overlay">
                  <FaPlay className="play-icon" />
                </div>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {lightboxOpen && videoId && (
        <div className="modal-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setLightboxOpen(false)}
            >
              <IoClose />
            </button>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default WhyUsSectionGeneral;