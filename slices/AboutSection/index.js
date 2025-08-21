import DefaultSection from "@/components/about/AboutSection";

const AboutSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default AboutSection;
