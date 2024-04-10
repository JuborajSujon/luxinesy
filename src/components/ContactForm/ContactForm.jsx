import ContactImg from "../../assets/contact.svg";
const ContactForm = () => {
  return (
    <div className="container mx-auto relative">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-3">
        <div className="lg:col-span-7 md:col-span-6">
          <img src={ContactImg} alt="" />
        </div>

        <div className="lg:col-span-5 md:col-span-6 px-4">
          <div className="lg:me-5">
            <div className="bg-white rounded-md shadow p-6">
              <h3 className="mb-6 text-2xl leading-normal font-medium">
                Get in touch !
              </h3>

              <form>
                <p className="mb-0" id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6 mb-5 flex flex-col gap-1">
                    <label htmlFor="name" className="font-medium">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      className="form-input mt-2 w-full border-2 border-slate-100 p-1 rounded-md"
                      placeholder="Name"
                    />
                  </div>

                  <div className="lg:col-span-6 mb-5 flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      className="form-input mt-2 w-full border-2 border-slate-100 p-1 rounded-md"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5 flex flex-col gap-1">
                    <label htmlFor="subject" className="font-medium">
                      Your Question:
                    </label>
                    <input
                      name="subject"
                      id="subject"
                      className="form-input mt-2 w-full border-2 border-slate-100 p-1 rounded-md"
                      placeholder="Subject :"
                    />
                  </div>

                  <div className="mb-5 flex flex-col gap-1">
                    <label htmlFor="comments" className="font-medium">
                      Your Comment:
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      className="form-input mt-2 textarea w-full border-2 border-slate-100 p-1 rounded-md"
                      placeholder="Message :"></textarea>
                  </div>
                </div>
                <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
