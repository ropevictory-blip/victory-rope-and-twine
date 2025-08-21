import { HiOfficeBuilding, HiMail } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import GoogleTranslateSwitcher from "@/components/GoogleTranslateSwitcher";

const TopBar = ({ data }) => {
  const { office_locations, email, social_links } = data;

  const social_icons = [
    {
      icon: <FaFacebook />,
      type: "facebook",
      color: "#1877F2",
    },
    {
      icon: <FaInstagram />,
      type: "instagram",
      color: "#E4405F",
    },
    {
      icon: <FaLinkedinIn />,
      type: "linkedin",
      color: "#0A66C2",
    },
    {
      icon: <FaYoutube />,
      type: "youtube",
      color: "#FF0000",
    },
  ];

  return (
    <div className="top-bar">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="dlab-topbar-left w-auto d-flex flex-column flex-lg-row align-items-lg-center gap-lg-3">
            <div className="text">
              <i>
                <HiOfficeBuilding />
              </i>
              <strong>Presence in:</strong> {office_locations}
            </div>
            <div className="text">
              <i>
                <HiMail />
              </i>
              <a
                href={`mailto:${email}`}
                target="_blank"
                style={{
                  color: "#444444",
                }}
              >
                {email}
              </a>
            </div>
          </div>
          <div className="dlab-topbar-right w-auto d-flex align-items-center gap-3">
            <GoogleTranslateSwitcher />
            {social_icons.map((item, index) => (
              <a
                key={index}
                href={
                  social_links?.find((link) => link?.url?.includes(item.type))
                    ?.url
                }
                target="_blank"
                style={{ color: item.color, fontSize: "1.2rem" }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
