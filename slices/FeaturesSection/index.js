import DefaultSection from "@/components/feature/FeaturesSection";
import FeaturesGridSection from "@/components/feature/FeaturesGridSection";

const FeaturesSection = ({ slice }) => {
  switch (slice.variation) {
    case "grid":
      return <FeaturesGridSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default FeaturesSection;
