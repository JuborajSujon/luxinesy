import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className="relative bg-green-600/5">
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
            <div className="text-center">
              <Link to={"/"}>
                <img
                  src="https://i.ibb.co/0BGGzjz/Logo-Final-1.png"
                  className="mx-auto w-20"
                  alt=""
                />
              </Link>
            </div>
            <div className=" text-center my-auto">
              <img
                src="https://i.ibb.co/SxMVZWM/error.png"
                className="mx-auto"
                alt=""
              />
              <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold">
                Page Not Found?
              </h1>
              <p className="text-slate-400">
                Whoops, this is embarassing. <br />
                Looks like the page you were looking for wasn't found.
              </p>

              <div className="mt-4">
                <Link
                  to={"/"}
                  className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">
                  Back to Home
                </Link>
              </div>
            </div>
            <div className="text-center">
              <p className="mb-0 text-slate-400">
                {new Date().getFullYear()}@ Luxinesy. Design with
                <i className="mdi mdi-heart text-red-600"></i> by{" "}
                <Link
                  to={"https://github.com/JuborajSujon"}
                  target="_blank"
                  className="text-reset underline">
                  JuborajSujon
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-1/4 -left-2 z-3">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk">
            <FaMoon className="uil uil-moon text-[20px] text-yellow-500 mt-1" />
            <FaSun className="uil uil-moon text-[20px] text-yellow-500 mt-1" />

            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] start-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>
    </section>
  );
};

export default ErrorPage;
