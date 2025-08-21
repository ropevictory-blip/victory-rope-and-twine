import DefaultSection from "@/components/gallery/SliderGallerySection";
import GridGallerySection from "@/components/gallery/GallerySection";

const GallerySection = ({ slice }) => {
  switch (slice.variation) {
    case "grid":
      return <GridGallerySection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default GallerySection;
