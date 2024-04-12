import { Link } from "react-router-dom";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Register = () => {
  const [password, setPassword] = useState("");
  return (
    <section className="py-16 sm:pt-20 sm:pb-36 max-w-[1540px] mx-auto flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>
      <div className="container mx-auto relative z-3">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white shadow-md rounded-md">
            <Link to="/">
              <img
                src="https://i.ibb.co/0BGGzjz/Logo-Final-1.png"
                className="mx-auto w-12"
                alt=""
              />
            </Link>
            <h5 className="my-4 text-xl text-slate-700 dark:text-slate-900 font-semibold">
              Register
            </h5>
            <form className="text-start">
              <div className="grid grid-cols-1">
                <div className="mb-3 flex flex-col">
                  <label
                    className="font-medium text-slate-500 dark:text-slate-900"
                    htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    className="font-medium text-slate-500 dark:text-slate-900"
                    htmlFor="photo">
                    Photo URL
                  </label>
                  <input
                    id="photo"
                    type="text"
                    className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                    placeholder="Enter Your Photo URL"
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    className="font-medium text-slate-500 dark:text-slate-900"
                    htmlFor="LoginEmail ">
                    Email Address:
                  </label>
                  <input
                    id="LoginEmail"
                    type="email"
                    className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-4 flex flex-col">
                  <label
                    className="font-medium text-slate-500 dark:text-slate-900"
                    htmlFor="LoginPassword">
                    Password:
                  </label>
                  <div className="relative">
                    <input
                      id="LoginPassword"
                      type={password ? "" : "password"}
                      className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                      placeholder="Enter Your Password"
                    />
                    <div className="absolute mt-2 top-1/2 -translate-y-1/2 right-2">
                      {password ? (
                        <BsEyeSlash
                          onClick={() => setPassword(!password)}
                          size={20}
                        />
                      ) : (
                        <BsEye
                          onClick={() => setPassword(!password)}
                          size={20}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    className="rounded checkbox border-gray-200  text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2"
                    type="checkbox"
                    value=""
                  />
                  <label className="text-slate-400" htmlFor="RememberMe">
                    I Accept
                  </label>
                  <Link
                    to={"/terms"}
                    className="text-green-500 link font-bold ml-2">
                    Terms and Conditions
                  </Link>
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                    Register / Sign up
                  </button>
                </div>
              </div>
              <div className="text-center">
                <span className="text-slate-400 me-2">
                  Already have an account ?
                </span>{" "}
                <Link
                  to={"/login"}
                  className="text-slate-500 dark:text-slate-900 font-bold">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
