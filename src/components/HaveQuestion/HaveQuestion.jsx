import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HaveQuestion = () => {
  return (
    <div className="container mx-auto px-4 relative lg:mt-24 mt-16">
      <div className="grid grid-cols-1 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
          Have Question ? Get in touch!
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>

        <div className="mt-6">
          <Link
            to="/contact"
            className="btn w-32 mx-auto bg-green-600 hover:bg-green-700 text-white rounded-md flex justify-center items-center">
            <BsFillTelephoneFill size={15} />
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestion;
