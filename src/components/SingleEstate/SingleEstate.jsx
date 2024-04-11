const SingleEstate = () => {
  return (
    <div className="py-24">
      <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
        <div className="relative">
          <img src="assets/images/property/5.jpg" alt="" />

          <div className="absolute top-4 end-4">
            <a
              href="javascript:void(0)"
              className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
              <i className="mdi mdi-heart text-[20px]"></i>
            </a>
          </div>
        </div>

        <div className="p-6">
          <div className="pb-6">
            <a
              href="property-detail.html"
              className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">
              710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA
            </a>
          </div>

          <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
            <li className="flex items-center me-4">
              <i className="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
              <span>8000sqf</span>
            </li>

            <li className="flex items-center me-4">
              <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
              <span>4 Beds</span>
            </li>

            <li className="flex items-center">
              <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
              <span>4 Baths</span>
            </li>
          </ul>

          <ul className="pt-6 flex justify-between items-center list-none">
            <li>
              <span className="text-slate-400">Price</span>
              <p className="text-lg font-medium">$5000</p>
            </li>

            <li>
              <span className="text-slate-400">Rating</span>
              <ul className="text-lg font-medium text-amber-400 list-none">
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline text-black dark:text-white">5.0(30)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleEstate;
