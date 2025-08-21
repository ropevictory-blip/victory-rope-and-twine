import DefaultSection from "@/components/contact/ContactSection";

const ContactSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ContactSection;
