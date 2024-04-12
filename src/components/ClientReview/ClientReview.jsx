import { AiFillStar } from "react-icons/ai";
import SectionTitle from "../SectionTitle/SectionTitle";

// Import Swiper React components
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const ClientReview = () => {
  return (
    <div className="container mx-auto relative lg:mt-24 mt-16">
      <SectionTitle
        title="What Our Client Say ?"
        desctiption="These testimonials offer a glimpse into the real-world impact of our work, highlighting the quality of our services and the trust our clients place in us. Whether you're considering partnering with us or simply interested in learning more about our reputation and track record"
      />

      <div className="flex justify-center relative mt-8">
        <div className=" w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },

              1540: {
                width: 1540,
                slidesPerView: 3,
              },
            }}>
            <SwiperSlide>
              <div className="text-center mx-3 relative">
                <p className="text-lg text-slate-400 italic">
                  {'"'} Hously made the processes so easy. Hously instantly
                  increased the amount of interest and ultimately saved us over
                  $10,000.{'"'}
                </p>

                <div className="text-center mt-5">
                  <ul className="text-xl font-medium text-amber-400 list-none mb-2 flex justify-center items-center">
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                  </ul>

                  <img
                    src="https://i.ibb.co/59MTKTx/Team-1.jpg"
                    className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto "
                    alt=""
                  />
                  <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center mx-3 relative">
                <p className="text-lg text-slate-400 italic">
                  {'"'}I highly recommend Hously as the new way to sell your
                  home "by owner". My home sold in 24 hours for the asking
                  price. Best $400 you could spend to sell your home.
                  {'"'}
                </p>

                <div className="text-center mt-5">
                  <ul className="text-xl font-medium text-amber-400 list-none mb-2 flex justify-center items-center">
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                  </ul>

                  <img
                    src="https://i.ibb.co/FYQzzYF/Team-2.jpg"
                    className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto "
                    alt=""
                  />
                  <h6 className="mt-2 fw-semibold">Jenifer Smith</h6>
                  <span className="text-slate-400 text-sm">Sr. Manager</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center mx-3 relative">
                <p className="text-lg text-slate-400 italic">
                  {'"'}My favorite part about selling my home myself was that we
                  got to meet and get to know the people personally. This made
                  it so much more enjoyable!{'"'}
                </p>

                <div className="text-center mt-5">
                  <ul className="text-xl font-medium text-amber-400 list-none mb-2 flex justify-center items-center">
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                  </ul>

                  <img
                    src="https://i.ibb.co/25vsfH8/Team-3.jpg"
                    className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto "
                    alt=""
                  />
                  <h6 className="mt-2 fw-semibold">John Smith</h6>
                  <span className="text-slate-400 text-sm">CEO</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center mx-3 relative">
                <p className="text-lg text-slate-400 italic">
                  {'"'}Great experience all around! Easy to use and efficient.
                  {'"'}
                </p>

                <div className="text-center mt-5">
                  <ul className="text-xl font-medium text-amber-400 list-none mb-2 flex justify-center items-center">
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                  </ul>

                  <img
                    src="https://i.ibb.co/19P7TWs/Team-4.jpg"
                    className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto "
                    alt=""
                  />
                  <h6 className="mt-2 fw-semibold">Andy Smith</h6>
                  <span className="text-slate-400 text-sm">Director</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center mx-3 relative">
                <p className="text-lg text-slate-400 italic">
                  {'"'}Hously made selling my home easy and stress free. They
                  went above and beyond what is expected.{'"'}
                </p>

                <div className="text-center mt-5">
                  <ul className="text-xl font-medium text-amber-400 list-none mb-2 flex justify-center items-center">
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                  </ul>

                  <img
                    src="https://i.ibb.co/2ydDd9F/Team-5.jpg"
                    className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 fw-semibold">Jacob Smith</h6>
                  <span className="text-slate-400 text-sm">
                    General Manager
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center mx-3 relative">
                <p className="text-lg text-slate-400 italic">
                  {'"'}Hously is fair priced, quick to respond, and easy to use.
                  I highly recommend their services!{'"'}
                </p>

                <div className="text-center mt-5">
                  <ul className="text-xl font-medium text-amber-400 list-none mb-2 flex justify-center items-center">
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                    <li className="inline">
                      <AiFillStar />
                    </li>
                  </ul>

                  <img
                    src="https://i.ibb.co/YNPrfYK/Team-6.jpg"
                    className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto "
                    alt=""
                  />
                  <h6 className="mt-2 fw-semibold">Sara Smith</h6>
                  <span className="text-slate-400 text-sm">Officer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
