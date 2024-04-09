import { CiLocationOn } from "react-icons/ci";
import { BsEnvelope, BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="max-w-[1540px] mx-auto p-10 bg-[#0F172A] text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 justify-between rounded">
      <aside className="lg:col-span-2 lg:pr-4">
        <div className="flex flex-col gap-6">
          <img
            className="w-16 "
            src="https://i.ibb.co/0BGGzjz/Logo-Final-1.png"
            alt="logo"
          />
          <p className="font-bold text-4xl">LUXINESY</p>
        </div>

        <p className="py-4">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>
      </aside>
      <nav className="space-y-2">
        <h6 className=" text-whitet text-lg font-bold ">Company</h6>
        <div className="flex flex-col text-base">
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">About us</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Services</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Pricing</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Blog</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Login</span>
          </a>
        </div>
      </nav>
      <nav className="space-y-2">
        <h6 className=" text-whitet text-lg font-bold ">Usefull Links</h6>
        <div className="flex flex-col text-base">
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Terms of Services</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Terms of Services</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Listing</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Contact</span>
          </a>
          <a className="font-semibold">
            <span className="text-lg mr-2 text-green-500">&gt;</span>
            <span className="link link-hover">Privacy Policy</span>
          </a>
        </div>
      </nav>
      <div className="space-y-2">
        <h6 className=" text-whitet text-lg font-bold ">Contact Details</h6>
        <div className="flex gap-2">
          <CiLocationOn className="text-green-500" size={20} />
          <div className="text-base">
            <p>
              C/54 Northwest <br /> Freeway, <br />
              Suite 558,
              <br /> Houston, USA 485
            </p>
            <div className="text-green-500 cursor-pointer">
              View on Google map
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <BsEnvelope className="text-green-500" size={20} />
          <p>contact@example.com</p>
        </div>
        <div className="flex gap-2">
          <BsFillTelephoneFill className="text-green-500" size={20} />
          <p>+5534 444 444</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
