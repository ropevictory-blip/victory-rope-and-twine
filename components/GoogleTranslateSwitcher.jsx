"use client";

import { useEffect } from "react";

const GoogleTranslateSwitcher = () => {
  const languageMap = {
    English: "English",
    Arabic: "Arabic",
    Dutch: "Dutch",
  };

  const triggerHtmlEvent = (element, eventName) => {
    const event = new Event(eventName, { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
  };

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const lang = e.currentTarget.getAttribute("data-lang");
      const select = document.querySelector("#google_translate_element select");
      if (!select || !lang) return;

      Array.from(select.options).forEach((option) => {
        if (option.text.includes(languageMap[lang])) {
          select.value = option.value;
          triggerHtmlEvent(select, "change");
        }
      });
    };

    const links = document.querySelectorAll(".translation-links div");
    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar,nl",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    return () => {
      const script = document.getElementById("google-translate-script");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <span style={{ fontSize: "12px" }}>Select Language:</span>
      <div
        className="translation-links"
        style={{ display: "flex", gap: "10px", cursor: "pointer" }}
      >
        <div data-lang="English">
          <img
            src="https://catalog.wlimg.com/flags/en-24x16.png"
            alt="English"
          />
        </div>
        <div data-lang="Arabic">
          <img
            src="https://catalog.wlimg.com/flags/ar-24x16.png"
            alt="Arabic"
          />
        </div>
        <div data-lang="Dutch">
          <img src="https://catalog.wlimg.com/flags/nl-24x16.png" alt="Dutch" />
        </div>
      </div>

      <div
        id="google_translate_element"
        style={{ width: "0", height: "0", overflow: "hidden" }}
      ></div>
    </div>
  );
};

export default GoogleTranslateSwitcher;
