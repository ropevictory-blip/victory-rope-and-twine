"use client";

import { PrismicRichText } from "@prismicio/react";

const ContactSection = ({ slice: { primary } }) => {
  const { contact_items, form_heading, form_description } = primary;

  return (
    <div className="section-full content-inner-2 contact-page-8 bg-white">
      <div className="container">
        <div
          className="row justify-content-center"
          style={{
            rowGap: "30px",
          }}
        >
          <div className="col-10">
            <div
              className="row h-100"
              style={{
                rowGap: "30px",
              }}
            >
              {contact_items.map((item, index) => (
                <ContactItem key={index} data={item} index={index} />
              ))}
            </div>
          </div>

          {/* <div
            className="col-lg-10"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <div className="inquiry-form">
              <h3 className="title-box font-weight-300 m-t0 m-b10">
                {form_heading?.[0]?.text}
              </h3>
              <PrismicRichText field={form_description} />

              <iframe
                style={{ border: "none", width: "100%" }}
                id="vrtc-website-contact-mubnzm"
                src="https://opnform.com/forms/vrtc-website-contact-mubnzm"
              />
            </div>
          </div> */}
        </div>
      </div>
      <style jsx>{`
        .input-group-addon i {
          font-size: 20px;
          position: relative;
          top: 3px;
          padding-right: 5px;
        }

        iframe {
          width: 100%;
          height: 370px;
        }

        @media (min-width: 1200px) {
          iframe {
            height: 370px;
          }
        }
      `}</style>
    </div>
  );
};

const ContactItem = ({ data: { title, contact_details }, index }) => {
  return (
    <div
      className="col-md-4"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm h-100">
        <div className="icon-content">
          <h5 className="dlab-tilte">{title}</h5>
          <PrismicRichText field={contact_details} />
        </div>
      </div>

      <style jsx>{`
        .dlab-tilte {
          position: relative;
          font-size: 18px;
          margin-bottom: 15px;
        }
        .dlab-tilte::before {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -5px;
          width: 30px;
          height: 3px;
          background: #02172c;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
