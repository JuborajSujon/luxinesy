import { AiOutlineHome } from "react-icons/ai";
import { PiBagSimpleBold } from "react-icons/pi";
import { FiKey } from "react-icons/fi";

const HowItWork = () => {
  return (
    <div className="container mx-auto px-4 relative lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          How It Works
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="lg:px-10 text-center">
          <div className="bg-transparent text-green-500 ">
            <AiOutlineHome
              size={50}
              className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
            />
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Evaluate Property</h5>
            <p className="text-slate-400 mt-3">
              If the distribution of letters and 'words' is random, the reader
              will not be distracted from making.
            </p>
          </div>
        </div>
        <div className="lg:px-10 text-center">
          <div className="bg-transparent text-green-500 ">
            <PiBagSimpleBold
              size={50}
              className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
            />
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Meeting with Agent</h5>
            <p className="text-slate-400 mt-3">
              If the distribution of letters and 'words' is random, the reader
              will not be distracted from making.
            </p>
          </div>
        </div>
        <div className="lg:px-10 text-center">
          <div className="bg-transparent text-green-500 ">
            <FiKey
              size={50}
              className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
            />
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Close the Deal</h5>
            <p className="text-slate-400 mt-3">
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
