import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useAuth from "../../customHook/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "animate.css";
import ParticleBg from "../ParticleBg/ParticleBg";

const Login = () => {
  const [password, setPassword] = useState("");
  const { signInUser, googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //  ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Login Handler
  const onSubmit = (data) => {
    const { email, password } = data;
    // Login Handler
    signInUser(email, password)
      .then((result) => {
        toast.success("Login Successful", { autoClose: 2000 });
        const user = result.user;

        if (user) {
          navigate(location?.state || "/");
        }
      })
      .catch(() => {
        toast.error("Login Failed", { autoClose: 2000 });
      });
    reset();
  };

  // Handle social login
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful", { autoClose: 2000 });
        if (user) {
          navigate(location?.state || "/");
        }
      })
      .catch(() => {
        toast.error("Login Failed", { autoClose: 2000 });
      });
  };

  return (
    <section>
      <Helmet>
        <title>Luxninesy | Login</title>
      </Helmet>
      <section className="max-w-[1540px] mx-auto py-16 sm:pt-20 sm:pb-36 flex items-center relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2">
          <ParticleBg />
        </div>
        <div className="container mx-auto relative z-3 animate__animated animate__zoomIn">
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
                Login
              </h5>
              <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-3 flex flex-col">
                    <label
                      className="font-medium text-slate-500 dark:text-slate-900"
                      htmlFor="LoginEmail">
                      Email Address:
                    </label>
                    <input
                      {...register("email", { required: true })}
                      id="LoginEmail"
                      type="email"
                      className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                      placeholder="name@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500">Please enter a valid email</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label
                      className="font-medium text-slate-500 dark:text-slate-900"
                      htmlFor="LoginPassword">
                      Password:
                    </label>
                    <div className="relative">
                      <input
                        {...register("password", { required: true })}
                        id="LoginPassword"
                        type={password ? "" : "password"}
                        className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3 pe-10"
                        placeholder="Enter Your Password"
                      />

                      {errors.password && (
                        <p className="text-red-500">
                          Please enter a valid password
                        </p>
                      )}
                      <div className="absolute top-1/2 -translate-y-1/2 right-3 mt-1">
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
                      className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full border-none">
                      Login / Sign in
                    </button>
                  </div>
                </div>
              </form>
              <div className="divider">OR</div>
              <div className="mb-4 space-y-2">
                <button
                  onClick={() => handleSocialLogin(googleLogin)}
                  className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full border-none">
                  <FaGoogle size={20} />
                  Login with Google
                </button>
                <button
                  onClick={() => handleSocialLogin(githubLogin)}
                  className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md w-full border-none">
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
                  className="text-slate-500 dark:text-slate-900 font-bold">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
