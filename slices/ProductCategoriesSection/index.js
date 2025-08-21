import DefaultSection from "@/components/product/ProductCategoriesSection";
import CategoriesGridSection from "@/components/product/CategoriesGridSection";

const ProductsCategoriesSection = ({ slice }) => {
  switch (slice.variation) {
    case "grid":
      return <CategoriesGridSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ProductsCategoriesSection;
