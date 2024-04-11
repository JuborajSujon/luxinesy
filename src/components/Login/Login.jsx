import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const [password, setPassword] = useState("");
  return (
    <section className="max-w-[1540px] mx-auto py-16 sm:pt-20 sm:pb-36 flex items-center relative overflow-hidden">
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
            <h5 className="my-4 text-xl font-semibold">Login</h5>
            <form className="text-start">
              <div className="grid grid-cols-1">
                <div className="mb-3 flex flex-col">
                  <label className="font-medium" htmlFor="LoginEmail">
                    Email Address:
                  </label>
                  <input
                    id="LoginEmail"
                    type="email"
                    className="border border-slate-300 p-2 rounded-md mt-3"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-4 flex flex-col">
                  <label className="font-medium" htmlFor="LoginPassword">
                    Password:
                  </label>
                  <div className="relative">
                    <input
                      id="LoginPassword"
                      type={password ? "" : "password"}
                      className="border border-slate-300 p-2 rounded-md mt-3 w-full"
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

                <div className="flex justify-between mb-4">
                  <div className="flex items-center mb-0">
                    <input
                      className="rounded checkbox border-gray-200  text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2"
                      type="checkbox"
                      value=""
                    />
                    <label className="text-slate-400" htmlFor="RememberMe">
                      Remember me
                    </label>
                  </div>
                  <p className="text-slate-400 mb-0">
                    <a className="text-slate-400 link">Forgot password ?</a>
                  </p>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                    Login / Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="mb-4 space-y-2">
              <button className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                <FaGoogle size={20} />
                Login with Google
              </button>
              <button className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                <BsGithub className="text-black" size={20} />
                Login with Github
              </button>
            </div>

            <div className="text-center">
              <span className="text-slate-400 me-2">
                Don't have an account ?
              </span>{" "}
              <Link
                to={"/register"}
                className="text-black dark:text-white font-bold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
