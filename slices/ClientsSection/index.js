import DefaultSection from "@/components/client/ClientsSection";

const ClientsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ClientsSection;
