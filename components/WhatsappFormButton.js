"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BiLoaderAlt } from "react-icons/bi";

const WhatsappFormButton = ({ number, text, name, icon, message, formId }) => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Define the message handler
    const handleMessage = (event) => {
      // Ensure the event data has the type 'form-submitted'
      if (
        event.data?.type !== "form-submitted" ||
        event.data?.form?.slug !== formId
      ) {
        return;
      }

      const req = `Requirement: ${
        event.data?.submission_data["7bf9e07a-0118-4da4-a3ce-0678ed4d2469"]
      }`;

      // Redirect to whatsapp
      if (window.screen.width < 768) {
        window.open(
          `https://api.whatsapp.com/send?phone=${number}&text=${req || text}`
        );
      } else {
        window.open(
          `https://web.whatsapp.com/send?phone=${number}&text=${req || text}`
        );
      }

      // Close the form
      setShowForm(false);
    };

    // Add the event listener
    window.addEventListener("message", handleMessage);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      {showForm && (
        <>
          <div className="modal-form">
            <i onClick={() => setShowForm(!showForm)}>
              <IoMdClose />
            </i>

            <ModalFormHeader name={name} icon={icon} />

            <ModalFormBody message={message} />

            <ModalForm formId={formId} />
          </div>
          <div className="overlay-modal-form" />
        </>
      )}

      <div
        className="btn-whatsapp-pulse"
        onClick={() => setShowForm(!showForm)}
      >
        <i className="fab">
          <FaWhatsapp style={{ verticalAlign: "top" }} />
        </i>
      </div>

      <style jsx>{`
        .modal-form {
          position: fixed;
          bottom: 70px;
          right: 40px;
          width: 90%;
          max-width: 450px;
          overflow: hidden;
          transition: height 0.3s;
          z-index: 9999;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          background: white;
          background: url("https://images.prismic.io/vrtc/aGZNv3fc4bHWi_yT_Z1RUiJbqstJ98MkD_ZwzGeYF3NbkBXYmr_whatsappbackground.avif?auto=format,compress");
          background-size: cover;
          background-position: center;
        }

        .modal-form i {
          position: absolute;
          top: 0px;
          right: 8px;
          cursor: pointer;
          color: #fff;
          font-size: 22px;
          opacity: 0.8;
        }

        i:hover {
          opacity: 1;
        }

        .overlay-modal-form {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1000;
        }

        .btn-whatsapp-pulse {
          background: #25d366;
          color: white;
          position: fixed;
          z-index: 999;
          bottom: 70px;
          right: 10px;
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 0;
          height: 0;
          padding: 30px;
          text-decoration: none;
          border-radius: 50%;
          animation-name: pulse;
          animation-duration: 1.5s;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
          cursor: pointer;
        }
        .fab {
          line-height: 1;
        }

        @media (max-width: 591px) {
          .modal-form {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
          }

          .btn-whatsapp-pulse {
            bottom: 10px;
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          80% {
            box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
};

const ModalFormHeader = ({ name, icon }) => {
  return (
    <>
      <div className="modal-form-header">
        <div className="form-logo">
          <img src={icon} alt={name} />
          <span className="online-dot" />
        </div>
        <div>
          <h3>{name}</h3>
          <span>Online</span>
        </div>
      </div>

      <style jsx>{`
        .form-logo {
          position: relative;
          margin-right: 10px;
        }

        .online-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #25d366;
          border-radius: 50%;
          right: 0px;
          bottom: 0px;
          border: 1.5px solid #fff;
        }

        .modal-form-header {
          display: flex;
          padding: 16px;
          background: #0a5f54;
          align-items: center;
        }

        .modal-form-header img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
        }

        .modal-form-header h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1;
          color: #fff;
          font-weight: 500;
        }

        .modal-form-header span {
          font-size: 12px;
          color: #fff;
          display: block;
          line-height: 1;
          margin-top: 3px;
        }
      `}</style>
    </>
  );
};

const ModalFormBody = ({ message }) => {
  return (
    <>
      <div className="modal-body">
        <div className="chat-bubble">
          <div className="text">
            {message}
            <span className="time">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-body {
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .chat-bubble .text {
          padding: 20px;
          border-radius: 10px;
          background: #fff;
          color: #000;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 500;
          font-family: var(--font-poppins);
          max-width: 80%;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          margin-left: 20px;
        }

        .chat-bubble {
          position: relative;
        }

        .time {
          font-size: 12px;
          font-weight: 500px;
          color: #777;
          display: block;
          margin-top: 10px;
          width: 100%;
          text-align: right;
          margin-bottom: -10px;
        }
        .chat-bubble:before {
          content: "";
          position: absolute;
          width: 10px;
          height: 0;
          border: 10px solid;
          border-color: transparent #fff transparent transparent;
          left: 0;
          bottom: 10px;
        }

        @media (max-width: 591px) {
          .chat-bubble .text {
            font-size: 16px;
            max-width: 90%;
          }
        }
      `}</style>
    </>
  );
};

const ModalForm = ({ formId }) => {
  // check iframe is loaded or not
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const iframe = document.getElementById(formId);

    if (iframe) {
      iframe.onload = () => {
        setIsLoaded(true);
      };
    }
  }, []);

  return (
    <>
      <div className="chat-bar-form">
        {!isLoaded && (
          <div className="loader-container">
            <BiLoaderAlt className="loader" />
          </div>
        )}

        <iframe
          style={{ border: "none", width: "100%" }}
          id={formId}
          src={`https://opnform.com/forms/${formId}`}
        />

        {/* <span>
          Powered by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            title="Best digital marketing company in kolkata"
            href={`https://favfly.com?ref=${process.env.NEXT_PUBLIC_PRISMIC_ID}.${process.env.NEXT_PUBLIC_TLD}`}
          >
            FavFly
          </a>
        </span> */}
      </div>

      <style jsx>{`
        .loader-container {
          height: 150px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        iframe {
          height: 170px;
        }
        .chat-bar-form {
          background: #fff;
          padding: 10px 0;
          position: relative;
        }
        span {
          display: block;
          font-size: 14px;
          line-height: 1;
          color: #777;
          text-align: center;
          background: #fff;
          padding-bottom: 5px;
          margin-top: -8px;
        }

        a {
          color: #456da7;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default WhatsappFormButton;
