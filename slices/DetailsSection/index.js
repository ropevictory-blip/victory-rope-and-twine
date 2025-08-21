import DefaultSection from "@/components/details/DetailsSection";

const DetailsSection = ({ slice, context }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} blog={context?.blog} />;
  }
};

export default DetailsSection;
