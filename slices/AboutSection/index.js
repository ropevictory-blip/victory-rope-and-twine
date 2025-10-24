import DefaultSection from "@/components/about/AboutSection";
import AboutWithTwoImage from "@/components/about/AboutWithTwoImage";

const AboutSection = ({ slice }) => {
  switch (slice.variation) {
    case "aboutWithTwoImage":
      return <AboutWithTwoImage slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default AboutSection;
