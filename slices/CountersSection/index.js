import DefaultSection from "@/components/counter/CountersSection";

const CountersSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CountersSection;
