import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      className="w-full p-10 bg-[#0F172A] text-white relative">
      {/* Newsletter */}
      <div className="bg-white w-[80%] mx-auto p-6 border  rounded-md absolute -top-20 left-1/2 -translate-x-1/2 sm:flex flex-col items-center lg:flex-row lg:justify-between gap-3 lg:gap-6 hidden dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 dark:border-slate-500">
        <div className="text-center md:text-left">
          <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-slate-900 dark:text-slate-300">
            Subscribe to Newsletter!
          </h3>
          <p className="text-slate-400 dark:text-slate-300">
            Subscribe to get latest updates and information.
          </p>
        </div>

        <div className="w-[60%] mx-auto">
          <form className="relative text-center space-y-2 sm:space-y-0">
            <input
              type="email"
              className=" ps-5 bg-white shadow-md border-2 text-slate-900  w-full p-3 rounded-full"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn text-base sm:absolute bg-green-600 px-8 text-white rounded-full sm:-ml-[134px] sm:top-1/2 sm:transform sm:-translate-y-1/2 hover:bg-transparent hover:text-green-600 hover:border-green-600 border-no">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* footer Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 justify-between rounded-b-sm sm:pt-28">
        <aside className="lg:col-span-2 lg:pr-4">
          <div className="flex flex-col gap-6">
            <img
              className="w-16 "
              src="https://i.ibb.co/0BGGzjz/Logo-Final-1.png"
              alt="logo"
            />
            <p className="font-bold text-4xl">LUXINESY</p>
          </div>

          <p className="py-4">
            A great plateform to buy, sell and rent your properties without any
            agent or commisions.
          </p>
        </aside>
        <nav className="space-y-2">
          <h6 className=" text-whitet text-lg font-bold ">Company</h6>
          <div className="flex flex-col text-base">
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">About us</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Services</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Pricing</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Blog</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Login</span>
            </a>
          </div>
        </nav>
        <nav className="space-y-2">
          <h6 className=" text-whitet text-lg font-bold ">Usefull Links</h6>
          <div className="flex flex-col text-base">
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Terms of Services</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Terms of Services</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Listing</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Contact</span>
            </a>
            <a className="font-semibold">
              <span className="text-lg mr-2 text-green-500">&gt;</span>
              <span className="link link-hover">Privacy Policy</span>
            </a>
          </div>
        </nav>
        <div className="space-y-2">
          <h6 className=" text-whitet text-lg font-bold ">Contact Details</h6>
          <div className="flex gap-2">
            <FaLocationDot className="text-green-500 font-bold" size={20} />
            <div className="text-base">
              <p>
                C/54 Northwest <br /> Freeway, <br />
                Suite 558,
                <br /> Houston, USA 485
              </p>
              <div className="text-green-500 cursor-pointer">
                View on Google map
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <MdEmail className="text-green-500" size={20} />
            <p>contact@example.com</p>
          </div>
          <div className="flex gap-2">
            <BsFillTelephoneFill className="text-green-500" size={20} />
            <p>+5534 444 444</p>
          </div>
        </div>
      </div>

      {/* social link */}
      <div className="divider divider-neutral"></div>
      <div className="flex flex-col justify-center items-center gap-3 md:justify-between md:flex-row">
        <div className="md:text-start text-center">
          <p className="mb-0 text-gray-300 flex items-center gap-1">
            © {new Date().getFullYear()} Luxinesy. Design with{" "}
            <AiFillHeart className="mdi mdi-heart text-red-600" /> by{" "}
            <Link
              to="https://github.com/JuborajSujon"
              target="_blank"
              className="text-reset">
              Juboraj Sujon
            </Link>
            .
          </p>
        </div>

        <ul className="flex justify-end items-center gap-3 ">
          <li className="inline cursor-pointer">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="text-blue-500">
              <FaFacebookF size={20} />
            </Link>
          </li>
          <li className="inline cursor-pointer">
            <Link
              to="https://twitter.com/"
              target="_blank"
              className="text-white">
              <BsTwitterX size={20} />
            </Link>
          </li>
          <li className="inline cursor-pointer">
            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              className="text-blue-600">
              <BsLinkedin size={20} />
            </Link>
          </li>
          <li className="inline cursor-pointer">
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              className="text-red-500">
              <BsYoutube size={28} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
