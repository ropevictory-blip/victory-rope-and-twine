import DefaultSection from "@/components/testimonial/TestimonialSection";

const TestimonialsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default TestimonialsSection;
