import DefaultSection from "@/components/hero/HeroSection";
import SecondaryHeroSection from "@/components/hero/SecondaryHeroSection";

const HeroSection = ({ slice }) => {
  switch (slice.variation) {
    case "secondary":
      return <SecondaryHeroSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default HeroSection;
