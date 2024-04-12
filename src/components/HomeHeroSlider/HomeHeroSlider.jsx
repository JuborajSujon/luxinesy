import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
const HomeHeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect={"fade"}
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}>
      <SwiperSlide>
        <div className="relative h-[70vh] w-full bg-[url('https://i.ibb.co/B42nqn6/slider1.jpg')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6">
                  Easy way to find your <br /> dream property
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="btn text-lg border-green-600 bg-green-600 hover:bg-green-700 text-white rounded-md">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[70vh] w-full bg-[url('https://i.ibb.co/VqzMTDv/slider2.jpg')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6">
                  We will help you find <br /> your Wonderful home
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="btn text-lg border-green-600 bg-green-600 hover:bg-green-700 text-white rounded-md">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[70vh] w-full bg-[url('https://i.ibb.co/t341xj7/slider3.jpg')] bg-no-repeat bg-cover flex items-center bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl mb-6">
                  Special offers or deals
                  <br /> Select properties
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="btn text-lg border-green-600 bg-green-600 hover:bg-green-700 text-white rounded-md">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeHeroSlider;
