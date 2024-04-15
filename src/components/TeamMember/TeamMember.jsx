import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const TeamMember = () => {
  return (
    <div className="container mx-auto px-4 relative">
      <SectionTitle
        title="Team Meet The Agent Team"
        desctiption="Meet our dedicated team members who bring a wealth of expertise and passion to our organization. With diverse backgrounds and skills, our team is committed to delivering exceptional results and exceeding client expectations. "
      />

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
        <div className="lg:col-span-3 md:col-span-6">
          <div className="group text-center">
            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
              <img
                src="https://i.ibb.co/59MTKTx/Team-1.jpg"
                className=""
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

              <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out space-x-1">
                <li className="inline">
                  <Link
                    to="https://facebook.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaFacebookF size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaInstagram size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.linkedin.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaLinkedinIn size={20} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="content mt-3">
              <Link
                to=""
                className="text-xl dark:text-slate-300 font-medium hover:text-green-600 transition-all duration-500 ease-in-out">
                Jack John
              </Link>
              <p className="text-slate-400">CEO</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6">
          <div className="group text-center">
            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
              <img
                src="https://i.ibb.co/FYQzzYF/Team-2.jpg"
                className=""
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

              <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out space-x-1">
                <li className="inline">
                  <Link
                    to="https://facebook.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaFacebookF size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaInstagram size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.linkedin.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaLinkedinIn size={20} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="content mt-3">
              <Link
                to=""
                className="text-xl dark:text-slate-300 font-medium hover:text-green-600 transition-all duration-500 ease-in-out">
                Krista John
              </Link>
              <p className="text-slate-400">COO</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6">
          <div className="group text-center">
            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
              <img
                src="https://i.ibb.co/25vsfH8/Team-3.jpg"
                className=""
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

              <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out space-x-1">
                <li className="inline">
                  <Link
                    to="https://facebook.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaFacebookF size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaInstagram size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.linkedin.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaLinkedinIn size={20} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="content mt-3">
              <Link
                to=""
                className="text-xl dark:text-slate-300 font-medium hover:text-green-600 transition-all duration-500 ease-in-out">
                Roger Jackson
              </Link>
              <p className="text-slate-400">OM Marketing</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6">
          <div className="group text-center">
            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
              <img
                src="https://i.ibb.co/19P7TWs/Team-4.jpg"
                className=""
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

              <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out space-x-1">
                <li className="inline">
                  <Link
                    to="https://facebook.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaFacebookF size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaInstagram size={20} />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.linkedin.com/"
                    target="_blank"
                    className="btn btn-sm px-1 rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white">
                    <FaLinkedinIn size={20} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="content mt-3">
              <Link
                to=""
                className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out dark:text-slate-200">
                Johnny English
              </Link>
              <p className="text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
