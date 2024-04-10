import PropTypes from "prop-types";

const SectionTitle = ({ title, desctiption }) => {
  return (
    <div className="grid grid-cols-1 pb-8 text-center">
      <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
        {title}
      </h3>

      <p className="text-slate-400 max-w-xl mx-auto">{desctiption}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  desctiption: PropTypes.string,
};

export default SectionTitle;
