import Progress from "../components/Progress/Progress";
import HowItWork from "../components/HowItWork/HowItWork";
import Transparency from "../components/Transparency/Transparency";
import Container from "../components/Container/Container";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TeamMember from "../components/TeamMember/TeamMember";

const AboutUs = () => {
  return (
    <Container>
      <SectionHeader
        bgURL="https://i.ibb.co/VqzMTDv/slider2.jpg"
        title="About Us"
      />

      <section className="relative lg:py-24 py-16">
        {/* Efficiency Transpaency Control */}
        <Transparency />
        {/* How It Work */}
        <HowItWork />
      </section>

      {/* Progress */}
      <Progress />

      <section className="relative lg:py-24 py-16">
        {/* Team Member */}
        <TeamMember />
      </section>
    </Container>
  );
};

export default AboutUs;
