import DefaultSection from "@/components/why-us/WhyUsSection";
import WhyUsSectionGeneral from "@/components/why-us/WhyUsSectionGeneral";

const WhyUsSection = ({ slice }) => {
  switch (slice.variation) {
    case "general":
      return <WhyUsSectionGeneral slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default WhyUsSection;
