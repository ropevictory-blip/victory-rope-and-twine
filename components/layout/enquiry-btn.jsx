"use client";

const EnquiryBtn = () => {
  return (
    <>
      <a
        className="site-button btnhover11"
        onClick={() => {
          const element = document.getElementById("lead-generation-modal");

          element.style.display = "flex";
          document.body.style.overflow = "hidden";
        }}
      >
        Enquire Now
      </a>

      <style jsx>{`
        .site-button {
          position: fixed;
          right: -62px;
          top: 50%;
          z-index: 1000;
          padding: 10px 20px;
          transform: rotate(-90deg) translateY(-50%);
        }
      `}</style>
    </>
  );
};

export default EnquiryBtn;
