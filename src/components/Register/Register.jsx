import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import useAuth from "../../customHook/useAuth";
import { toast } from "react-toastify";
const Register = () => {
  const [password, setPassword] = useState("");
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

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

  // Register Handler for create user , update user profile
  const onSubmit = (data) => {
    const { email, password, fullName, photoURL } = data;

    if (password.length < 6) {
      toast.error("Password must be 6 characters or longer", {
        autoClose: 2000,
      });
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must contain at least one uppercase letter", {
        autoClose: 2000,
      });
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain at least one lowercase letter", {
        autoClose: 2000,
      });
      return;
    }
    // Register Handler for create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("User Created Successfully", {
          autoClose: 2000,
        });
        // update user profile
        updateUserProfile(fullName, photoURL)
          .then(() => {})
          .catch(() => {
            toast.error("User Profile Updated Failed", {
              autoClose: 2000,
            });
          });

        if (user) {
          navigate("/");
        }
      })
      .catch(() => {
        toast.error("User Created Failed", {
          autoClose: 2000,
        });
      });
    reset();
  };

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
            <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1">
                <div className="mb-3 flex flex-col">
                  <label
                    className="font-medium text-slate-500 dark:text-slate-900"
                    htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    {...register("fullName", { required: true })}
                    id="fullName"
                    type="text"
                    className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                    placeholder="Enter Your Full Name"
                  />
                  {errors.fullName && (
                    <span className="text-red-500">
                      Please enter a valid name
                    </span>
                  )}
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    className="font-medium text-slate-500 dark:text-slate-900"
                    htmlFor="photo">
                    Photo URL
                  </label>
                  <input
                    {...register("photoURL")}
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
                    {...register("email", { required: true })}
                    id="LoginEmail"
                    type="email"
                    className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      Please enter a valid email
                    </span>
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
                      className="w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900 py-2 mt-3"
                      placeholder="Enter Your Password"
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        Please enter a valid password
                      </span>
                    )}
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
                    {...register("acceptTerms")}
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
