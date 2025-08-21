"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const LeadGenerationModal = ({ images }) => {
  const [source, setSource] = useState();
  const pathname = usePathname();
  const [enquiry, setEnquiry] = useState("");

  const openModal = () => {
    const element = document.getElementById("lead-generation-modal");

    element.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    const element = document.getElementById("lead-generation-modal");

    element.style.display = "none";
    document.body.style.overflow = "auto";

    // remove query params
    const url = new URL(window.location.href);
    url.searchParams.delete("enquiry");
    window.history.pushState({}, "", url.toString());

    // setTimeout(() => {
    //   openModal();
    // }, 1000 * 30);
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("enquiry")) {
      setEnquiry(`I am interested in ${searchParams.get("enquiry")}`);
      openModal();
    }

    return () => {
      setEnquiry("");
    };
  }, [searchParams]);

  useEffect(() => {
    setSource(location.href);
  }, [pathname]);

  useEffect(() => {
    let hasShown = false;
    let timeoutId = null;
    const isFormSubmitted = localStorage.getItem("isFormSubmitted");

    window.addEventListener("message", function (event) {
      // Make sure that the event data has the type `form-submitted`
      if (
        event.data?.type !== "form-submitted" ||
        event.data?.form?.slug != "vrtc-website-hero-qhty4q"
      ) {
        return;
      }

      localStorage.setItem("isFormSubmitted", true);
      window.location.href = "/thank-you";
      closeModal();
    });

    if (isFormSubmitted) return;

    const handleScroll = () => {
      if (!hasShown && window.scrollY > 1000) {
        timeoutId = setTimeout(() => {
          openModal();
        }, 1000 * 30);
        hasShown = true;
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <section id="lead-generation-modal" onClick={closeModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>
            <AiOutlineClose />
          </button>

          <div className="splide-container">
            <Splide
              options={{
                type: "fade",
                perPage: 1,
                perMove: 1,
                autoplay: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                interval: 2000,
                speed: 1000,
                arrows: false,
                pagination: false,
                rewind: true,
              }}
            >
              {images?.map((image, index) => (
                <SplideSlide key={index} className="splide-slide">
                  <img
                    src={image}
                    alt="modal"
                    loading="lazy"
                    style={{ aspectRatio: "114/139" }}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div className="form-container">
            <div className="form-content">
              <h2>Get a Free Quote</h2>
              <p>Fill out the form below we will get back to you as soon as</p>
              <iframe
                src={`https://opnform.com/forms/vrtc-website-hero-qhty4q?4d244d21-496d-43a9-9f3a-0d8a88e2374a=${source}&94636725-7238-4ddc-a33c-0b4d60b56ced=${enquiry}`}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .close-button {
          opacity: 1 !important;
          font-size: 1.5rem;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default LeadGenerationModal;
