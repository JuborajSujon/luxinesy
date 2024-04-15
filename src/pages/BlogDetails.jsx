import { Link, useParams } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import {
  FaBed,
  FaBath,
  FaUser,
  FaCar,
  FaComments,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { newId } = useParams();
  const numId = parseInt(newId);
  const [estate, setEstate] = useState([]);

  useEffect(() => {
    const getEstateData = async () => {
      const res = await fetch(
        `https://juborajsujon.github.io/personal-project-api/ph9estate.json`
      );
      const data = await res.json();
      const newEstate = data.find((item) => item.id === numId);

      setEstate(newEstate);

      // ensure that the new page starts at the top when navigating
      window.scrollTo(0, 0);
    };
    getEstateData();
  }, [numId]);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    bedrooms,
    bathrooms,
    garage,
    year_built,
  } = estate;

  return (
    <Container>
      <Helmet>
        <title>
          Luxinesy | {estate_title ? estate_title : "estate title not found"}
        </title>
      </Helmet>
      <section className="relative md:pb-24 pb-16">
        <div className="container-fluid">
          <div className="md:flex mt-4  ">
            <div className="md:w-1/2 p-1">
              <div className="group relative overflow-hidden w-full h-full ">
                <img
                  className="w-full h-full object-cover"
                  src={image?.[0]}
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                  <Link
                    to={image?.[0]}
                    target="_blank"
                    className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                    <FiCamera size={17} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 grid">
              <div className="flex ">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={image?.[1]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link
                        to={image?.[1]}
                        target="_blank"
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <FiCamera size={17} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={image?.[2]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link
                        to={image?.[2]}
                        target="_blank"
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <FiCamera size={17} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex ">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={image?.[3]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link
                        to={image?.[3]}
                        target="_blank"
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <FiCamera size={17} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={image?.[4]}
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link
                        to={image?.[4]}
                        target="_blank"
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <FiCamera size={17} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:mt-24 md:mt-16 mt-8">
          <div className="md:flex">
            {/* Production Details left sidebar */}
            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
              <h4 className="text-2xl font-medium">{estate_title}</h4>

              <ul className="py-6 flex flex-wrap items-center list-none gap-2">
                <li className="flex items-center lg:me-6 ">
                  <FaCompressArrowsAlt className="lg:text-xl text-sm sm:text-lg me-2 text-green-600" />
                  <span className="lg:text-xl">{area}</span>
                </li>

                <li className="flex items-center lg:me-6 ">
                  <FaBed className="lg:text-3xl text-xl sm:text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{bedrooms} Beds</span>
                </li>

                <li className="flex items-center">
                  <FaBath className="lg:text-xl text-sm sm:text-base me-2 text-green-600" />
                  <span className="lg:text-xl">{bathrooms} Baths</span>
                </li>
                <li className="flex items-center">
                  <FaCar className="lg:text-xl text-sm sm:text-base me-2 text-green-600" />
                  <span className="lg:text-xl">
                    {garage ? garage : 0} Garage
                  </span>
                </li>
              </ul>

              <p className="text-slate-400">{description}</p>

              {/* Google map */}

              <div className="w-full leading-[0] border-0 mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.698629884416!2d90.40235011155244!3d23.793743778551782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7163736e453%3A0xb12cfac638de13ed!2sProgramming%20Hero!5e0!3m2!1sen!2sbd!4v1712767993048!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              {/* Leave a comment: */}

              <div className="p-6 rounded-md shadow-md mt-16 border-2 border-slate-200 mx-2 hidden md:block">
                <h5 className="text-xl font-semibold">Leave A Comment:</h5>

                <form className="mt-8">
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <div className="relative mt-2">
                          <FaUser className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-4 text-green-600" />
                          <input
                            type="text"
                            id="name"
                            className="border-2 border-slate-200 ps-11 w-full py-2 rounded-md dark:bg-slate-800"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <div className="form-icon relative mt-2">
                          <MdEmail className="w-5 h-5 absolute top-1/2 -translate-y-1/2 start-4 text-green-600" />
                          <input
                            type="email"
                            id="email"
                            className="border-2 border-slate-200 ps-11 w-full py-2 rounded-md dark:bg-slate-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-start">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <div className="form-icon relative mt-2">
                          <FaComments className="w-5 h-5 absolute top-2 start-4 text-green-600" />
                          <textarea
                            id="comments"
                            className="ps-11 h-28 w-full border-2 border-slate-200 rounded-md py-2 dark:bg-slate-800"
                            placeholder="Message :"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn text-base bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Producte details sidebar */}

            <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
              <div className="sticky top-20">
                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h5 className="text-2xl font-medium">Price:</h5>
                      <h5 className="text-xl text-violet-500 font-medium">
                        {segment_name}
                      </h5>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-medium"> {price}</span>

                      <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                        For {status}
                      </span>
                    </div>

                    <ul className="list-none mt-4">
                      <li className="flex justify-start items-center">
                        <span className="text-slate-400 w-1/2 text-sm">
                          Facilities
                        </span>
                        <div className="w-1/2 pl-8">
                          {facilities?.map((facility, index) => (
                            <span
                              className="text-slate-900 dark:text-slate-300 block font-medium text-sm"
                              key={index}>
                              {facility}
                            </span>
                          ))}
                        </div>
                      </li>

                      <li className="flex justify-start items-center mt-2">
                        <span className="text-slate-400 text-sm w-1/2">
                          Location
                        </span>
                        <span className="text-slate-900 dark:text-slate-300 block font-medium text-sm w-1/2 pl-8 ">
                          {location}
                        </span>
                      </li>

                      <li className="flex justify-start items-center mt-2">
                        <span className="text-slate-400 text-sm w-1/2">
                          Year of Construction
                        </span>
                        <span className="text-slate-900 dark:text-slate-300 block font-medium text-sm w-1/2 pl-8 ">
                          {year_built}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex">
                    <div className="p-1 w-1/2">
                      <Link
                        to="/contact"
                        className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                        Book Now
                      </Link>
                    </div>
                    <div className="p-1 w-1/2">
                      <Link
                        to="/contact"
                        className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                        Offer Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                    Have Question ? Get in touch!
                  </h3>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="btn text-base bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md">
                      <FiPhone /> Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Leave a comment section for small devices */}
        <div className="p-6 rounded-md shadow-md mt-16 border-2 border-slate-300 mx-2 md:hidden">
          <h5 className="text-xl font-semibold">Leave A Comment:</h5>

          <form className="mt-8">
            <div className="grid lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-6 mb-5">
                <div className="text-start">
                  <label htmlFor="name" className="font-semibold">
                    Your Name:
                  </label>
                  <div className="relative mt-2">
                    <FaUser className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-4 text-green-600" />
                    <input
                      type="text"
                      id="name"
                      className="border-2 border-slate-200 ps-11 w-full py-2 rounded-md dark:bg-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 mb-5">
                <div className="text-start">
                  <label htmlFor="email" className="font-semibold">
                    Your Email:
                  </label>
                  <div className="form-icon relative mt-2">
                    <MdEmail className="w-5 h-5 absolute top-1/2 -translate-y-1/2 start-4 text-green-600" />
                    <input
                      type="email"
                      id="email"
                      className="border-2 border-slate-200 ps-11 w-full py-2 rounded-md dark:bg-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="mb-5">
                <div className="text-start">
                  <label htmlFor="comments" className="font-semibold">
                    Your Comment:
                  </label>
                  <div className="form-icon relative mt-2">
                    <FaComments className="w-5 h-5 absolute top-0 start-4 text-green-600 mt-2" />
                    <textarea
                      id="comments"
                      className="ps-11 h-28 w-full dark:bg-slate-800 border-2 border-slate-200 rounded-md pt-2"
                      placeholder="Message :"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default BlogDetails;
