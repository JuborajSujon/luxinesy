import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from "../SectionTitle/SectionTitle";
const AnimatedNumber = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}>
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <SectionTitle
          title="Trusted by more than 10K users"
          desctiption="Join the thousands who rely on our expertise and service excellence. With a proven track record of satisfaction, our trusted platform ensures peace of mind and exceptional experiences for every user."
        />
      </div>
      <section className="relative mt-10 py-32 bg-[url('https://i.ibb.co/5xQrj2j/Resort-Maldives-2.webp')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
            <div className="lg:col-start-2 lg:col-span-10">
              <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-6">
                <div className=" text-center">
                  <h1 className="text-white lg:text-gray-200xl text-4xl font-semibold mb-2">
                    {counterOn && (
                      <CountUp start={0} end={1548} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h5 className="counter-head text-white text-2xl font-medium">
                    Properties Sell
                  </h5>
                </div>

                <div className=" text-center">
                  <h1 className="text-white lg:text-gray-200xl text-4xl font-semibold mb-2">
                    {counterOn && (
                      <CountUp start={0} end={25} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h5 className="counter-head text-white text-2xl font-medium">
                    Award Gained
                  </h5>
                </div>

                <div className=" text-center">
                  <h1 className="text-white lg:text-gray-200xl text-4xl font-semibold mb-2">
                    {counterOn && (
                      <CountUp start={0} end={9} duration={3} delay={0} />
                    )}
                    +
                  </h1>
                  <h5 className="counter-head text-white text-2xl font-medium">
                    Years Experience
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default AnimatedNumber;
