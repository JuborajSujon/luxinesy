import { useEffect } from "react";
import UpdateProfileImage from "../../assets/Startup_Flatline.svg";
import useAuth from "../../customHook/useAuth";
import HaveQuestion from "../HaveQuestion/HaveQuestion";
import LeaveAComment from "../LeaveAComment/LeaveAComment";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const ProfileUpdateDetails = () => {
  const { user, updateUserProfile, reload, setReload } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {}, [user, reload]);

  const onSubmit = (data) => {
    const { fullName, photoURL } = data;
    updateUserProfile(fullName, photoURL)
      .then(() => {
        setReload(!reload);
        toast.success("Profile Updated Successfully", {
          autoClose: 1000,
        });
      })
      .catch(() => {
        toast.error("Profile Update Failed", {
          autoClose: 1000,
        });
      });
  };
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
      <div className="grid md:grid-cols-12 grid-cols-1 justify-between gap-3 px-4">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:col-span-7 md:col-span-6 ">
          <img className="w-full" src={UpdateProfileImage} alt="" />
          <HaveQuestion />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="lg:col-span-5 md:col-span-6 ">
          <div className=" space-y-12">
            <div className="bg-white border-2 rounded-md shadow-md p-6 space-y-3">
              <h3 className="mb-6 text-2xl leading-normal font-medium dark:text-slate-900">
                My Profile
              </h3>
              <div className="">
                <img
                  className="w-full rounded-md"
                  src={user?.photoURL || "https://i.ibb.co/Jn1jJHN/avater.png"}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-lg font-medium dark:text-slate-900">
                  Name:{" "}
                  <span className="font-normal dark:text-slate-900">
                    {user?.displayName}
                  </span>
                </h3>
                <h3 className="text-lg font-medium dark:text-slate-900">
                  Email:{" "}
                  <span className="font-normal dark:text-slate-900">
                    {user?.email || "user email not found"}
                  </span>
                </h3>
              </div>
            </div>
            <div className="bg-white border-2 rounded-md shadow-md p-6">
              <h3 className="mb-6 text-2xl leading-normal font-medium dark:text-slate-900">
                Update Profile
              </h3>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1">
                  <label
                    htmlFor="name"
                    className="font-medium dark:text-slate-900">
                    Your Name:
                  </label>
                  <input
                    {...register("fullName", { required: true })}
                    type="text"
                    className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                    placeholder="Name"
                  />
                  {errors.fullName && (
                    <span className="text-red-500">
                      Please enter a valid name
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5 flex flex-col gap-1">
                    <label
                      htmlFor="subject"
                      className="font-medium dark:text-slate-900">
                      Your Photo URL:
                    </label>
                    <input
                      {...register("photoURL", { required: true })}
                      type="text"
                      id="subject"
                      className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                      placeholder=" Photo URL"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        Please enter a valid email
                      </span>
                    )}
                  </div>
                </div>
                <input
                  type="submit"
                  value="Update Profile"
                  className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md dark:border-none"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mb-20">
        <LeaveAComment />
      </div>
    </div>
  );
};

export default ProfileUpdateDetails;
