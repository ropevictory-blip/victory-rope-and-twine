import DefaultSection from "@/components/team/TeamSection";

const TeamSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default TeamSection;
