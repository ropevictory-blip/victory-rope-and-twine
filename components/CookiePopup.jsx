"use client";

import { useEffect, useState } from "react";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookieConsent");

    if (!cookieChoice) {
      setShowPopup(true);
    }

    setIsLoading(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowPopup(false);
  };

  const handleClose = () => {
    // Just hide the popup without storing preference
    setShowPopup(false);
    history.back();
  };

  // Don't render anything while loading or if choice already made
  if (isLoading || !showPopup) {
    return null;
  }

  return (
    <>
      <div className="cookie-overlay">
        <div className="cookie-popup">
          <button
            className="close-button"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>

          <div className="cookie-content">
            <h2 className="cookie-title">🍪 Privacy Settings</h2>

            <p className="cookie-description">
              We use cookies and similar technologies to enhance your
              experience, analyze site usage, and deliver personalized content
              and advertisements. By clicking "Accept," you consent to our use
              of cookies as described in our Cookie Policy.
            </p>

            <div className="cookie-buttons">
              <button className="decline-button" onClick={handleClose}>
                Decline
              </button>
              <button className="accept-button" onClick={handleAccept}>
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cookie-overlay {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 10000;
          pointer-events: none;
        }

        .cookie-popup {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          width: 520px;
          position: relative;
          animation: slideUp 0.3s ease-out;
          pointer-events: auto;
          border: 1px solid #e9ecef;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .close-button {
          position: absolute;
          top: 12px;
          right: 16px;
          background: none;
          border: none;
          font-size: 18px;
          color: #666;
          cursor: pointer;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .close-button:hover {
          background-color: #f5f5f5;
          color: #333;
        }

        .cookie-content {
          padding: 24px 20px 20px;
        }

        .cookie-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .cookie-description {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .cookie-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .accept-button {
          background: #2c3e50;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1;
          min-width: 80px;
        }

        .accept-button:hover {
          background: #1a252f;
          transform: translateY(-1px);
        }

        .decline-button {
          background: #f8f9fa;
          color: #666;
          border: 1px solid #e9ecef;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1;
          min-width: 80px;
        }

        .decline-button:hover {
          background: #e9ecef;
          color: #333;
          transform: translateY(-1px);
        }

        @media (max-width: 480px) {
          .cookie-overlay {
            right: 10px;
            bottom: 10px;
          }

          .cookie-popup {
            width: 100%;
          }

          .cookie-content {
            padding: 20px 16px 16px;
          }

          .cookie-title {
            font-size: 16px;
          }

          .cookie-description {
            font-size: 12px;
          }

          .cookie-buttons {
            flex-direction: column;
            gap: 6px;
          }

          .accept-button,
          .decline-button {
            width: 100%;
            padding: 8px 16px;
          }
        }
      `}</style>
    </>
  );
};

export default CookiePopup;
