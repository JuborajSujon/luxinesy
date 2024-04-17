import { FaComments, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const LeaveAComment = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="p-6 rounded-md  mt-16 bg-white dark:bg-slate-900 mx-4 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700">
      <h5 className="text-xl dark:text-slate-400 text-slate-900 font-semibold ">
        Leave A Comment:
      </h5>

      <form className="mt-8">
        <div className="grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6 mb-5">
            <div className="text-start">
              <label
                htmlFor="name"
                className="font-semibold dark:text-slate-400 text-slate-900">
                Your Name:
              </label>
              <div className="relative mt-2">
                <FaUser className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-4 text-green-600" />
                <input
                  type="text"
                  id="name"
                  className="ps-10 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-slate-400/40 dark:text-slate-400 py-2 "
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mb-5">
            <div className="text-start">
              <label
                htmlFor="email"
                className="font-semibold dark:text-slate-400 text-slate-900">
                Your Email:
              </label>
              <div className="form-icon relative mt-2">
                <MdEmail className="w-5 h-5 absolute top-1/2 -translate-y-1/2 start-4 text-green-600" />
                <input
                  type="email"
                  id="email"
                  className="ps-10 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-slate-400/40 dark:text-slate-400 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="mb-5">
            <div className="text-start">
              <label
                htmlFor="comments"
                className="font-semibold dark:text-slate-400 text-slate-900">
                Your Comment:
              </label>
              <div className="form-icon relative mt-2">
                <FaComments className="w-5 h-5 absolute top-1 start-4 text-green-600" />
                <textarea
                  id="comments"
                  className="ps-11 h-28 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-slate-400/40 dark:text-slate-400"
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
  );
};

export default LeaveAComment;
