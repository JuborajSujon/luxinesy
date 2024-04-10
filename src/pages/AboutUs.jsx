import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { PiBagSimpleBold } from "react-icons/pi";
import { FiKey } from "react-icons/fi";
import Progress from "../components/Progress/Progress";

const AboutUs = () => {
  const youtubeLink = "https://youtu.be/cUAScafhLRs?si=wmZSulxe4whQyoC1";
  return (
    <div className="max-w-[1540px] mx-auto">
      <section className="relative w-full py-20 md:py-28 lg:py-36 bg-[url('https://i.ibb.co/VqzMTDv/slider2.jpg')] bg-no-repeat bg-center bg-cover rounded-none">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              About Us
            </h3>
          </div>
        </div>
      </section>

      {/* Efficiency Transpaency Control */}

      <section className="relative lg:py-24 py-16">
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
                <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
                  Efficiency. Transparency. <br /> Control.
                </h4>
                <p className="text-slate-400 max-w-xl">
                  To achieve business transparency, control, and efficiency,
                  it's essential to prioritize clear communication, documented
                  processes, and access controls. Transparent communication
                  fosters trust with stakeholders, while documented procedures
                  ensure consistency and reduce errors. Implementing access
                  controls safeguards sensitive information and promotes data
                  security. By establishing performance metrics, leveraging
                  technology solutions, and fostering a culture of continuous
                  improvement, businesses can optimize operations, enhance
                  productivity, and achieve their objectives effectively and
                  efficiently.
                </p>

                <div className="mt-4">
                  <a
                    href="#"
                    className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">
                    Learn More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative lg:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              How It Works
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="lg:px-10 text-center">
              <div className="bg-transparent text-green-500 ">
                <AiOutlineHome
                  size={50}
                  className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
                />
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Evaluate Property</h5>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="lg:px-10 text-center">
              <div className="bg-transparent text-green-500 ">
                <PiBagSimpleBold
                  size={50}
                  className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
                />
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Meeting with Agent</h5>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="lg:px-10 text-center">
              <div className="bg-transparent text-green-500 ">
                <FiKey
                  size={50}
                  className="h-12 w-12 md:h-16 md:w-16  mx-auto bg-transparent"
                />
              </div>

              <div className="mt-6">
                <h5 className="text-xl font-medium">Close the Deal</h5>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress */}

      <Progress />
    </div>
  );
};

export default AboutUs;
