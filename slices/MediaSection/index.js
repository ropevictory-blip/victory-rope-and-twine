import DefaultSection from "@/components/gallery/MediaSection";

const MediaSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default MediaSection;
