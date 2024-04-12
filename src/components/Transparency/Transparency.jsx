import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const Transparency = () => {
  const youtubeLink = "https://youtu.be/cUAScafhLRs?si=wmZSulxe4whQyoC1";
  return (
    <div className="container mx-auto px-4 relative">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="md:col-span-5">
          <div className="relative">
            <img
              src="https://i.ibb.co/XxtLDFF/effeciency.png"
              className="rounded-xl shadow-md"
              alt=""
            />
            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
              <Link
                to={youtubeLink}
                className="lightbox h-20 w-20 rounded-full shadow-md inline-flex items-center justify-center bg-white border-4 border-green-500  text-red-600">
                <FaYoutube
                  size={50}
                  className="inline-flex items-center justify-center text-2xl"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="lg:ms-4">
            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold dark:text-slate-200">
              Efficiency. Transparency. <br /> Control.
            </h4>
            <p className="text-slate-400 dark:text-slate-300 max-w-xl">
              To achieve business transparency, control, and efficiency, it's
              essential to prioritize clear communication, documented processes,
              and access controls. Transparent communication fosters trust with
              stakeholders, while documented procedures ensure consistency and
              reduce errors. Implementing access controls safeguards sensitive
              information and promotes data security. By establishing
              performance metrics, leveraging technology solutions, and
              fostering a culture of continuous improvement, businesses can
              optimize operations, enhance productivity, and achieve their
              objectives effectively and efficiently.
            </p>

            <div className="mt-4">
              <a
                href="#"
                className="btn text-base bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
