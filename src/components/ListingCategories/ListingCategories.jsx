import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

const ListingCategories = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <SectionTitle
        title="Listing Categories"
        desctiption="Experience luxury living at its finest with our exquisite selection of luxury estates, including penthouses, beachfront properties, resorts, private islands, villas, and mansions, showcasing unparalleled craftsmanship and exclusive amenities."
      />
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 mx-4 md:gap-[30px] gap-3">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 flex flex-col justify-between">
          <img
            className="grow"
            src="https://i.ibb.co/BPY7BXN/penthouse.jpg"
            alt=""
          />
          <div className="p-4">
            <Link
              to="https://i.ibb.co/BPY7BXN/penthouse.jpg"
              target="_blank"
              className="text-xl font-medium hover:text-green-600">
              Penthouse
            </Link>
            <p className="text-slate-400 text-sm mt-1">560 Listings</p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 flex flex-col justify-between">
          <img
            className="grow"
            src="https://i.ibb.co/KKs3v4q/beachfront.webp"
            alt=""
          />
          <div className="p-4">
            <Link
              to="https://i.ibb.co/KKs3v4q/beachfront.webp"
              target="_blank"
              className="text-xl font-medium hover:text-green-600">
              Beachfront
            </Link>
            <p className="text-slate-400 text-sm mt-1">124 Listings</p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 flex flex-col justify-between">
          <img
            className="grow"
            src="https://i.ibb.co/5hSH8b0/resorts.webp"
            alt=""
          />
          <div className="p-4">
            <Link
              to="https://i.ibb.co/5hSH8b0/resorts.webp"
              target="_blank"
              className="text-xl font-medium hover:text-green-600">
              Resorts
            </Link>
            <p className="text-slate-400 text-sm mt-1">265 Listings</p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 flex flex-col justify-between">
          <img
            className="grow"
            src="https://i.ibb.co/MGntx96/private-Island.jpg"
            alt=""
          />
          <div className="p-4">
            <Link
              to="https://i.ibb.co/MGntx96/private-Island.jpg"
              target="_blank"
              className="text-xl font-medium hover:text-green-600">
              Private islands
            </Link>
            <p className="text-slate-400 text-sm mt-1">230 Listings</p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 flex flex-col justify-between">
          <img
            className="grow"
            src="https://i.ibb.co/sP93N4m/villas.webp"
            alt=""
          />
          <div className="p-4">
            <Link
              to="https://i.ibb.co/sP93N4m/villas.webp"
              target="_blank"
              className="text-xl font-medium hover:text-green-600">
              Villas
            </Link>
            <p className="text-slate-400 text-sm mt-1">450 Listings</p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 flex flex-col justify-between">
          <img
            className="grow"
            src="https://i.ibb.co/zZTDLdL/mansion.webp"
            alt=""
          />
          <div className="p-4">
            <Link
              to="https://i.ibb.co/zZTDLdL/mansion.webp"
              target="_blank"
              className="text-xl font-medium hover:text-green-600">
              Mansions
            </Link>
            <p className="text-slate-400 text-sm mt-1">12 Listings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategories;
