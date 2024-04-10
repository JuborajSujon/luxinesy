import PropTypes from "prop-types";

const SectionHeader = ({ bgURL, title }) => {
  return (
    <section
      className={`relative w-full py-20 md:py-28 lg:py-36 bg-[url('${bgURL}')] bg-no-repeat bg-center bg-cover rounded-none`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 text-center mt-10">
          <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
            {title}
          </h3>
        </div>
      </div>
    </section>
  );
};

SectionHeader.propTypes = {
  bgURL: PropTypes.string,
  title: PropTypes.string,
};
export default SectionHeader;
