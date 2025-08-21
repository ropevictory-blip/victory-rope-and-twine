import DefaultSection from "@/components/cta/CtaSection";

const CtaSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CtaSection;
