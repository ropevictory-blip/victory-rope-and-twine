"use client";
import { useEffect } from "react";

const BlockContent = ({ children }) => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection
    const disableSelection = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable inspect element (F12 and Ctrl+Shift+I)
    const disableInspect = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey &&
          e.shiftKey &&
          (e.keyCode === 73 || e.keyCode === "I".charCodeAt(0))) // Ctrl+Shift+I
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", disableSelection);
    document.addEventListener("keydown", disableInspect);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", disableSelection);
      document.removeEventListener("keydown", disableInspect);
    };
  }, []);

  return <>{children}</>;
};

export const TranslateFullSite = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages: "en,ar,nl",
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    // Check if the script has already been added
    if (
      !document.querySelector(
        'script[src*="translate.google.com/translate_a/element.js"]'
      )
    ) {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }

    // Clean up event listeners on unmount
    return () => {
      window.googleTranslateElementInit = null;
      // remove the script from the body
      const script = document.querySelector(
        'script[src*="translate.google.com/translate_a/element.js"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default BlockContent;
