"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { FaAngleDown } from "react-icons/fa6";

const Header = ({ data }) => {
  const { logo, slices1 } = data;

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.getElementById("header");

      if (!header) return;

      if (window.scrollY > 250) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    });
  }, []);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      const currentScrollTop = window.scrollY;

      if (window.scrollY > 200) {
        // Determine the scroll direction
        const scrollUp = currentScrollTop < lastScrollTop;

        setScrollUp(scrollUp);
      }

      lastScrollTop = currentScrollTop;
    });
  }, []);

  return (
    <header id="header" className="site-header mo-left header">
      {scrollUp && <TopBar data={data} />}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="container clearfix">
            {/* website logo */}
            <div className="logo-header">
              <Link href="/">
                <PrismicNextImage field={logo} />
              </Link>
            </div>
            {/* nav toggle button */}
            <button
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>

            {/* main nav */}
            <div
              className={`header-nav navbar-collapse collapse justify-content-end ${
                showMobileNav ? "show" : ""
              }`}
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
                <Link href="/">
                  <PrismicNextImage field={logo} />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                {slices1?.map((item, index) => (
                  <NavItem
                    key={index}
                    data={item}
                    setShowMobileNav={setShowMobileNav}
                  />
                ))}
              </ul>
            </div>

            {showMobileNav && (
              <>
                <div
                  className="close-button-nav"
                  onClick={() => setShowMobileNav(!showMobileNav)}
                >
                  <i>
                    <IoMdClose />
                  </i>
                </div>
                <div
                  className="navBg"
                  onClick={() => setShowMobileNav(!showMobileNav)}
                ></div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({
  data: {
    primary: { nav_link, nav_links },
  },
  setShowMobileNav,
}) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`${pathname == nav_link?.url ? "active" : ""}
      ${isOpen ? "open" : ""}
      `}
    >
      <PrismicNextLink
        onClick={() => setShowMobileNav(false)}
        field={nav_link}
      />

      {nav_links?.length > 0 && (
        <>
          <i
            style={{
              fontSize: "1rem",
              marginLeft: "-8px",
              marginRight: "5px",
              color: "#000",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaAngleDown
              style={{
                rotate: isOpen ? "180deg" : "0deg",
              }}
            />
          </i>
          <ul className="sub-menu tab-content">
            {nav_links.map((item, index) => (
              <li key={index}>
                <PrismicNextLink field={item?.nav_link} />
              </li>
            ))}
          </ul>
        </>
      )}

      <style jsx>{`
        @media (max-width: 991px) {
          i {
            position: absolute;
            top: 10px;
            right: 25px;
          }
        }
      `}</style>
    </li>
  );
};

export default Header;
