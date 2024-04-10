import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-[1540px] mx-auto sm:pb-20">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
