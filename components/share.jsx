"use client";

import { MdShare } from "react-icons/md";

const Share = () => {
  // Check if Web Share API is supported
  const checkShareSupport = () => {
    return typeof navigator !== "undefined" && navigator.share;
  };

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "Check out this page",
      url: window.location.href,
    };

    if (checkShareSupport()) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Error sharing:", error);
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    // Copy URL to clipboard as fallback
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch(() => {
        // If clipboard API fails, show the URL
        prompt("Copy this link:", window.location.href);
      });
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="share-button"
        title="Share this page"
        aria-label="Share this page"
      >
        <MdShare size={24} />
      </button>

      <style jsx>{`
        .share-button {
          position: fixed;
          bottom: 50px;
          left: 10px;
          z-index: 1000;
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50%;
          background-color: var(--color-primary);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .share-button:hover {
          background-color: var(--color-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .share-button:active {
          transform: translateY(0);
        }

        .share-button svg {
          transition: transform 0.2s ease;
        }

        .share-button:hover svg {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .share-button {
            width: 45px;
            height: 45px;
            bottom: 15px;
            left: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Share;
