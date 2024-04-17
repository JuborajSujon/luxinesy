import { MdLocationPin, MdEmail, MdLocalPhone } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div className=" lg:mt-16 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-center px-6">
          <div className="overflow-hidden">
            <MdLocalPhone className="h-16 w-16 fill-green-600 mx-auto" />
          </div>

          <div className="content mt-7">
            <h5 className="title h5 text-xl dark:text-slate-200 font-medium">
              Phone
            </h5>
            <p className="text-slate-400 mt-3">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>

            <div className="mt-5">
              <a
                href="tel:+152534-468-854"
                className="btn btn-link text-base text-green-600 ">
                +152 534-468-854
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-center px-6">
          <div className="relative overflow-hidden">
            <MdEmail className="h-16 w-16 fill-green-600 mx-auto" />
          </div>

          <div className="content mt-7">
            <h5 className="title h5 text-xl dark:text-slate-200 font-medium">
              Email
            </h5>
            <p className="text-slate-400 mt-3">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>

            <div className="mt-5">
              <a
                href="mailto:contact@example.com"
                className="btn btn-link text-base text-green-600 ">
                contact@example.com
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="text-center px-6">
          <div className=" overflow-hidden">
            <MdLocationPin className="h-16 w-16 fill-green-600 mx-auto" />
          </div>

          <div className="content mt-7">
            <h5 className="title h5 text-xl dark:text-slate-200 font-medium">
              Location
            </h5>
            <p className="text-slate-400 mt-3">
              C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485
            </p>

            <div className="mt-5">
              <a className="btn btn-link text-base text-green-600 ">
                View on Google map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
