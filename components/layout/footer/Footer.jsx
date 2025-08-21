"use client";

import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Footer = ({ data }) => {
  const {
    background_image,
    description,
    quick_links,
    contact_items,
    social_links,
    form_heading,
    form_description,
  } = data;

  return (
    <>
      <div className="bg-light">
        <div
          className="col-lg-10 mx-auto"
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
        </div>
      </div>

      <footer className="site-footer style1">
        {/* footer top part */}
        <div
          className="footer-top"
          style={{
            backgroundImage: `url(${background_image?.url})`,
            backgroundSize: "contain",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="widget widget_about">
                  <h4 className="footer-title">About Us</h4>
                  <PrismicRichText field={description} />
                </div>
              </div>
              <div className="offset-md-2 col-md-4 col-sm-12">
                <div className="widget">
                  <h4 className="footer-title">Quick Link</h4>
                  <ul className="list-2">
                    {quick_links?.map((item, index) => (
                      <li key={index}>
                        <PrismicNextLink field={item?.link} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-12 footer-col-4">
                <div className="widget widget_getintuch">
                  <h4 className="footer-title">Contact Us</h4>
                  <ul className="row px-3">
                    {contact_items?.map((item, index) => (
                      <li key={index} className="ps-0 col-lg-4">
                        <div
                          style={{
                            maxWidth: "90%",
                          }}
                        >
                          <strong
                            style={{
                              fontSize: "1rem",
                              marginBottom: "1rem",
                            }}
                          >
                            {item?.title}
                          </strong>

                          <div>
                            <PrismicRichText field={item?.contact_details} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="mt-4 py-4 row flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              rowGap: ".5rem",
            }}
          >
            <div className="text-center text-md-start col-12 col-md-auto">
              Copyright © {new Date().getFullYear()} Victory Rope & Twine. All
              rights reserved.
            </div>

            <div className="col-12 col-md-4">
              <VisitCounter />
            </div>

            <div className="col-12 col-md-2">
              <FooterSocial social_links={social_links} />
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
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
    </>
  );
};

const FooterSocial = ({ social_links }) => {
  const default_social_links = [
    {
      icon: <FaFacebook />,
      url: social_links?.find((link) => link?.url?.includes("facebook"))?.url,
    },
    {
      icon: <FaInstagram />,
      url: social_links?.find((link) => link?.url?.includes("instagram"))?.url,
    },
    {
      icon: <FaLinkedinIn />,
      url: social_links?.find((link) => link?.url?.includes("linkedin"))?.url,
    },
    {
      icon: <FaYoutube />,
      url: social_links?.find((link) => link?.url?.includes("youtube"))?.url,
    },
  ];

  return (
    <>
      <div className="social-links">
        {default_social_links.map(
          (item, index) =>
            item.url && (
              <a
                href={item.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
        )}
      </div>

      <style jsx>{`
        .social-links {
          display: flex;
          justify-content: end;
          gap: 1rem;
          font-size: 1.3rem;
        }

        @media (max-width: 768px) {
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

const VisitCounter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const hit = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://counter-x-api.vercel.app/api/hit/victoryropeandtwine.com/home/1000/2`
      );
      const data = await res.json();

      setCount(data?.result?.value);
      setIsLoading(false);
    };

    hit();
  }, [pathname]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      Visitor Count:{" "}
      <span
        className="ms-2"
        style={{
          lineHeight: "1",
        }}
      >
        {count}
      </span>
    </div>
  );
};

export default Footer;
                                                       