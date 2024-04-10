import Progress from "../components/Progress/Progress";
import HowItWork from "../components/HowItWork/HowItWork";
import Transparency from "../components/Transparency/Transparency";
import Container from "../components/Container/Container";

const AboutUs = () => {
  return (
    <Container>
      <section className="relative w-full py-20 md:py-28 lg:py-36 bg-[url('https://i.ibb.co/VqzMTDv/slider2.jpg')] bg-no-repeat bg-center bg-cover rounded-none">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              About Us
            </h3>
          </div>
        </div>
      </section>

      <section className="relative lg:py-24 py-16">
        {/* Efficiency Transpaency Control */}
        <Transparency />
        {/* How It Work */}
        <HowItWork />
      </section>

      {/* Progress */}
      <Progress />
    </Container>
  );
};

export default AboutUs;
