import UpdateProfileImage from "../../assets/Startup_Flatline.svg";
import HaveQuestion from "../HaveQuestion/HaveQuestion";
import LeaveAComment from "../LeaveAComment/LeaveAComment";
const ProfileUpdateDetails = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 relative">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-3">
        <div className="lg:col-span-7 md:col-span-6">
          <img className="w-full" src={UpdateProfileImage} alt="" />
          <HaveQuestion />
        </div>

        <div className="lg:col-span-5 md:col-span-6 px-4">
          <div className="lg:me-5 space-y-12">
            <div className="bg-white border-2 rounded-md shadow-md p-6 space-y-3">
              <h3 className="mb-6 text-2xl leading-normal font-medium dark:text-slate-900">
                My Profile
              </h3>
              <div className="">
                <img
                  className="w-full rounded-md"
                  src="https://i.ibb.co/t341xj7/slider3.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-lg font-medium dark:text-slate-900">
                  Name:{" "}
                  <span className="font-normal dark:text-slate-900">
                    Sajid Hossain
                  </span>
                </h3>
                <h3 className="text-lg font-medium dark:text-slate-900">
                  Email:{" "}
                  <span className="font-normal dark:text-slate-900">
                    9bJpQ@example.com
                  </span>
                </h3>
              </div>
            </div>
            <div className="bg-white border-2 rounded-md shadow-md p-6">
              <h3 className="mb-6 text-2xl leading-normal font-medium dark:text-slate-900">
                Update Profile
              </h3>

              <form>
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6 mb-5 flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className="font-medium dark:text-slate-900">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                      placeholder="Name"
                    />
                  </div>

                  <div className="lg:col-span-6 mb-5 flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="font-medium dark:text-slate-900">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5 flex flex-col gap-1">
                    <label
                      htmlFor="subject"
                      className="font-medium dark:text-slate-900">
                      Your Photo URL:
                    </label>
                    <input
                      name="subject"
                      id="subject"
                      className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                      placeholder="Subject :"
                    />
                  </div>
                </div>
                <button className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md dark:border-none">
                  Send Message
                </button>
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
