import DefaultSection from "@/components/press-release/PressReleaseSection";

const PressRelease = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default PressRelease;
