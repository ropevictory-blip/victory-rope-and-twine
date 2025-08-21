"use client";

import { FaWhatsapp } from "react-icons/fa";

const EnquiryButton = ({ title, hideWhatsapp }) => {
  const phone_number = "+916292293301";
  const message = `Hello, I am interested in ${title}. Please provide more details.`;

  // update query params
  const updateQueryParams = (params) => {
    const url = new URL(window.location.href);
    url.searchParams.set("enquiry", params);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center gap-1"
      style={{
        maxWidth: "300px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <a
        className="site-button btnhover11"
        style={{
          width: hideWhatsapp ? "auto" : "100%",
        }}
        onClick={() => {
          updateQueryParams(title);
        }}
      >
        Enquire Now
      </a>
      {!hideWhatsapp && (
        <>
          <a
            href={`https://api.whatsapp.com/send?phone=${phone_number}&text=${message}`}
            target="_blank"
            className="site-button d-flex align-items-center justify-content-center d-lg-none"
            style={{
              lineHeight: 1,
              width: "auto",
              padding: "10px",
            }}
          >
            <i
              style={{
                fontSize: "22px",
                position: "relative",
                marginRight: "0",
              }}
            >
              <FaWhatsapp />
            </i>
          </a>

          <a
            href={`https://web.whatsapp.com/send?phone=${phone_number}&text=${message}`}
            target="_blank"
            className="site-button d-flex align-items-center justify-content-center d-none d-lg-flex"
            style={{
              lineHeight: 1,
              width: "auto",
              padding: "10px",
            }}
          >
            <i
              style={{
                fontSize: "22px",
                position: "relative",
                marginRight: "0",
              }}
            >
              <FaWhatsapp />
            </i>
          </a>
        </>
      )}
    </div>
  );
};

export default EnquiryButton;
