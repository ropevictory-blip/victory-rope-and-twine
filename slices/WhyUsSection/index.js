import DefaultSection from "@/components/why-us/WhyUsSection";

const WhyUsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default WhyUsSection;
