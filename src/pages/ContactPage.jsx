import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import ContactDetails from "../components/ContactDetails/ContactDetails";

import contactImg from "../assets/contact.svg";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Luxinesy | Contact</title>
      </Helmet>
      {/* <GoogleMapContact /> */}
      <section>
        <div className="bg">
          <img className="w-full" src={contactImg} alt="" />
          <div>
            <form>
              <div className="">
                <div className="">
                  <label htmlFor="name" className="font-medium">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                    placeholder="Name"
                  />
                </div>

                <div className="">
                  <label htmlFor="email" className="font-medium">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                    placeholder="Email"
                  />
                </div>
                <div className="">
                  <label htmlFor="subject" className="font-medium">
                    Your Question:
                  </label>
                  <input
                    name="subject"
                    id="subject"
                    className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                    placeholder="Subject :"
                  />
                </div>

                <div className="">
                  <label htmlFor="comments" className="font-medium">
                    Your Comment:
                  </label>
                  <textarea
                    name="comments"
                    id="comments"
                    rows="4"
                    className="mt-2 w-full border-2 border-slate-100 p-1 rounded-md dark:bg-transparent dark:border-black/40 dark:text-slate-900"
                    placeholder="Message :"></textarea>
                </div>
              </div>

              <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactDetails />
    </>
  );
};

export default ContactPage;
