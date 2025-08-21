import DefaultSection from "@/components/product/ProductsSection";

const ProductsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ProductsSection;
