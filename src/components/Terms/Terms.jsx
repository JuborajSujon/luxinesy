import { BsArrowRight } from "react-icons/bs";
const Terms = () => {
  return (
    <div className="max-w-[1540px] mx-auto">
      <section>
        <section className="relative table w-full py-32 lg:py-36 bg-[url('https://i.ibb.co/t341xj7/slider3.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
              <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                Terms & Services
              </h3>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="relative lg:py-24 py-16">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">Introduction :</h5>
                <p className="text-slate-400">
                  These terms and conditions govern your use of our luxury real
                  estate services and website. By accessing or using our
                  services, you agree to comply with these terms and conditions
                  in full.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  User Agreements :
                </h5>
                <p className="text-slate-400">
                  <b className="text-green-500 text-lg">Services:</b> We offer
                  luxury real estate services including property listings,
                  consultations, property management, and other related
                  services.Our website serves as a platform for showcasing
                  luxury properties and facilitating transactions between
                  buyers, sellers, and agents. We reserve the right to modify or
                  discontinue any part of our services without prior notice.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-green-500 text-lg">Property Listings:</b>{" "}
                  Property listings on our website are provided for
                  informational purposes only and do not constitute an offer or
                  contract. We make reasonable efforts to ensure the accuracy of
                  property information, but we do not guarantee the
                  completeness, accuracy, or reliability of any property
                  listing. Buyers are encouraged to conduct their own due
                  diligence before making any purchase decisions.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-green-500 text-lg">Privacy:</b> We are
                  committed to protecting your privacy and handling your
                  personal information securely. Please refer to our privacy
                  policy for more information on how we collect, use, and
                  disclose your personal data.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-green-500 text-lg">Governing Law:</b> These
                  terms and conditions shall be governed by and construed in
                  accordance with the laws of [JIDB/2345], without regard to its
                  conflict of law provisions. Any disputes arising out of or in
                  connection with these terms and conditions shall be resolved
                  through arbitration in [JIDB/2A/345].
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-green-500 text-lg">Changes to Terms:</b> We
                  reserve the right to update or modify these terms and
                  conditions at any time without prior notice. Your continued
                  use of our services or website after any such changes
                  constitutes acceptance of the modified terms.
                </p>
                <p className="text-slate-400 mt-3">
                  <b className="text-green-500 text-lg">Contact Information:</b>{" "}
                  If you have any questions or concerns about these terms and
                  conditions, please contact us
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  Restrictions :
                </h5>
                <p className="text-slate-400">
                  You are specifically restricted from all of the following :
                </p>
                <ul className="list-none text-slate-400 mt-3">
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-green-600 align-middle me-2"
                    />
                    Unauthorized use of our website, including hacking or
                    attempting to gain unauthorized access to our systems, is
                    prohibited.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-green-600 align-middle me-2"
                    />
                    Users may not use our services for illegal or fraudulent
                    activities.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-green-600 align-middle me-2"
                    />
                    Reproducing, distributing, or modifying any content from our
                    website without prior written consent is prohibited.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-green-600 align-middle me-2"
                    />
                    Users may not harass, intimidate, or harm other users or
                    third parties through our platform.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-green-600 align-middle me-2"
                    />
                    Posting false, misleading, or defamatory information about
                    properties or individuals is prohibited.
                  </li>
                  <li className="flex mt-2">
                    <BsArrowRight
                      size={20}
                      className="text-green-600 align-middle me-2"
                    />
                    Users may not engage in any activity that disrupts or
                    interferes with the proper functioning of our website or
                    services.
                  </li>
                </ul>

                <h5 className="text-xl font-medium mt-8">
                  Users Question & Answer :
                </h5>

                <div className="space-y-2 mt-3">
                  <div className="collapse collapse-arrow border shadow-sm rounded-md">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-green-500">
                      How does it work ?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Luxury real estate operates similarly to the broader
                        real estate market but with a focus on high-end
                        properties that offer exceptional quality, exclusivity,
                        and amenities.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow border shadow-sm rounded-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-green-500">
                      Do I need a designer to use Luxinesy ?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Luxinesy is a fictional name, and I assume you're
                        referring to a platform or service related to luxury
                        real estate. Whether you need a designer to use such a
                        platform depends on its features and your specific needs
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow border shadow-sm rounded-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-green-500">
                      What happens when I receive an order ?
                    </div>
                    <div className="collapse-content">
                      <p>
                        When I receive an order in a business context,
                        regardless of the industry, several standard processes
                        typically occur. Here's a general overview of what
                        happens:Order Confirmation, Processing, Inventory
                        Management, Delivery, Payment Processing, Order
                        Fulfillment Confirmation, Customer Support, Feedback
                        Collection etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                    Accept
                  </a>
                  <a className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md ms-2">
                    Decline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
