import { AiOutlineHome } from "react-icons/ai";
import { PiBagSimpleBold } from "react-icons/pi";
import { FiKey } from "react-icons/fi";
import SectionTitle from "../SectionTitle/SectionTitle";

const HowItWork = () => {
  return (
    <div className="container mx-auto px-4 relative lg:mt-24 mt-16">
      <SectionTitle
        title="How It Works"
        desctiption="A great plateform to buy, sell and rent your properties without any agent or commisions."
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:px-10 text-center">
          <div className="bg-transparent text-green-500 ">
            <AiOutlineHome
              size={50}
              className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
            />
          </div>

          <div className="mt-6">
            <h5 className="text-xl dark:text-slate-200 font-medium">
              Evaluate Property
            </h5>
            <p className="text-slate-400 dark:text-slate-300 mt-3">
              If the distribution of letters and 'words' is random, the reader
              will not be distracted from making.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="lg:px-10 text-center">
          <div className="bg-transparent text-green-500 ">
            <PiBagSimpleBold
              size={50}
              className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
            />
          </div>

          <div className="mt-6">
            <h5 className="text-xl dark:text-slate-200 font-medium">
              Meeting with Agent
            </h5>
            <p className="text-slate-400 dark:text-slate-300 mt-3">
              If the distribution of letters and 'words' is random, the reader
              will not be distracted from making.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="lg:px-10 text-center">
          <div className="bg-transparent text-green-500 ">
            <FiKey
              size={50}
              className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
            />
          </div>

          <div className="mt-6">
            <h5 className="text-xl dark:text-slate-200 font-medium">
              Close the Deal
            </h5>
            <p className="text-slate-400 dark:text-slate-300 mt-3">
              If the distribution of letters and 'words' is random, the reader
              will not be distracted from making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
