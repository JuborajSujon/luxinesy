const Progress = () => {
  return (
    <section className="relative py-24 bg-[url('https://i.ibb.co/5xQrj2j/Resort-Maldives-2.webp')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
          <div className="lg:col-start-2 lg:col-span-10">
            <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-6">
              <div
                data-aos="fade-right"
                data-aos-duration="700"
                className=" text-center">
                <h1 className="text-white lg:text-gray-200xl text-4xl font-semibold mb-2">
                  <div
                    className="radial-progress text-green-500"
                    style={{
                      "--value": "50",
                      "--size": "7rem",
                      "--thickness": "0.5rem",
                    }}
                    role="progressbar">
                    50%
                  </div>
                </h1>
                <h5 className="counter-head text-white text-2xl font-medium">
                  Properties Sell
                </h5>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="700"
                className=" text-center">
                <h1 className="text-white lg:text-gray-200xl text-4xl font-semibold mb-2">
                  <div
                    className="radial-progress text-green-500"
                    style={{
                      "--value": "70",
                      "--size": "7rem",
                      "--thickness": "0.5rem",
                    }}
                    role="progressbar">
                    70%
                  </div>
                </h1>
                <h5 className="counter-head text-white text-2xl font-medium">
                  Year's Target Achivement
                </h5>
              </div>

              <div
                data-aos="fade-left"
                data-aos-duration="700"
                className=" text-center">
                <h1 className="text-white lg:text-gray-200xl text-4xl font-semibold mb-2">
                  <div
                    className="radial-progress text-green-500"
                    style={{
                      "--value": "90",
                      "--size": "7rem",
                      "--thickness": "0.5rem",
                    }}
                    role="progressbar">
                    90%
                  </div>
                </h1>
                <h5 className="counter-head text-white text-2xl font-medium">
                  Customer Satisfaction
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
