import { AiFillHeart } from "react-icons/ai";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaBath, FaBed } from "react-icons/fa6";
const SingleEstate = () => {
  return (
    <div className="">
      <div className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
        <div className="relative">
          <img src="https://i.ibb.co/B42nqn6/slider1.jpg" alt="" />

          <div className="absolute top-4 end-4">
            <p className="p-2 btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-700 dark:text-slate-300 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
              <AiFillHeart size={20} />
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="pb-4">
            <h3 className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">
              710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA
            </h3>
          </div>
          <div className="pb-4 flex items-center justify-between">
            <p className="text-black dark:text-white font-semibold">luxury</p>
            <p className="text-green-600 p-2 border border-green-600 rounded-md dark:text-white font-semibold">
              For Sale
            </p>
          </div>

          <ul className="py-4 border-y border-slate-100 dark:border-gray-800 flex items-center flex-wrap list-none">
            <li className="flex items-center me-4">
              <FaCompressArrowsAlt className="lg:text-xl text-sm sm:text-lg me-2 text-green-600" />
              <span>8000sqf</span>
            </li>

            <li className="flex items-center me-4">
              <FaBed className="lg:text-3xl text-xl sm:text-2xl me-2 text-green-600" />
              <span>4 Beds</span>
            </li>

            <li className="flex items-center ">
              <FaBath className="lg:text-xl text-sm sm:text-base me-2 text-green-600" />
              <span className="leading-9">4 Baths</span>
            </li>
          </ul>

          <ul className="pt-6 flex justify-between items-center list-none">
            <li>
              <span className="text-slate-400">Price</span>
              <p className="text-lg font-medium">$5000</p>
            </li>

            <li>
              <span className="text-slate-400">Location</span>
              <ul className="text-lg font-medium text-amber-400 list-none">
                <li className="inline text-black dark:text-white">Address</li>
              </ul>
            </li>
          </ul>

          <div className="pt-6">
            <button className="btn text-base bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full">
              View Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEstate;
