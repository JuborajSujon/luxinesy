import PropTypes from "prop-types";
import { AiFillHeart } from "react-icons/ai";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaBath, FaBed } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SingleEstate = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    price,
    status,
    location,
    image,
    area,
    bedrooms,
    bathrooms,
  } = estate;
  return (
    <div className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden  m-3 flex flex-col">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src={image[0]}
          alt={estate_title}
        />

        <div className="absolute top-4 end-4">
          <p className="p-2 btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-700 dark:text-slate-300 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
            <AiFillHeart size={20} />
          </p>
        </div>
      </div>

      <div className="p-6 flex-grow  flex flex-col justify-between">
        <div className="pb-4">
          <h3 className="text-xl hover:text-green-600 font-medium dark:text-slate-200 dark:hover:text-green-600">
            {estate_title}
          </h3>
        </div>
        <div className="pb-4 flex items-center justify-between">
          <p className="text-slate-900 dark:text-slate-300  font-semibold">
            {segment_name}
          </p>
          <p className="text-green-600 p-2 border border-green-600 dark:text-slate-300 rounded-md font-semibold">
            For {status}
          </p>
        </div>

        <ul className="py-4 border-y border-slate-100 dark:border-gray-800 flex items-center flex-wrap list-none">
          <li className="flex items-center me-4">
            <FaCompressArrowsAlt className="lg:text-xl text-sm sm:text-lg me-2 text-green-600" />
            <span className="dark:text-slate-300">{area}</span>
          </li>

          <li className="flex items-center me-4">
            <FaBed className="lg:text-3xl text-xl sm:text-2xl me-2 text-green-600" />
            <span className="dark:text-slate-300">{bedrooms} Beds</span>
          </li>

          <li className="flex items-center ">
            <FaBath className="lg:text-xl text-sm sm:text-base me-2 text-green-600" />
            <span className="dark:text-slate-300">{bathrooms} Baths</span>
          </li>
        </ul>

        <ul className="pt-6 flex justify-between items-center list-none">
          <li>
            <span className="text-slate-400 dark:text-slate-300">Price</span>
            <p className="text-lg dark:text-slate-300 font-medium">{price}</p>
          </li>

          <li>
            <span className="text-slate-400">Location</span>
            <ul className="text-lg font-medium text-amber-400 list-none">
              <li className="inline text-slate-900 dark:text-slate-300 ">
                {location.split(",").map((local, index) => (
                  <span
                    className="text-slate-900 dark:text-slate-300 block"
                    key={index}>
                    {local}
                  </span>
                ))}
              </li>
            </ul>
          </li>
        </ul>

        <div className="pt-6">
          <Link
            to={`/blogdetails/${id}`}
            className="btn text-base bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full">
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleEstate.propTypes = {
  estate: PropTypes.object,
};

export default SingleEstate;
