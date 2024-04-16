import PropTypes from "prop-types";
const ContainerBox = ({ children }) => {
  return <div className="max-w-[1540px] mx-auto pt-2 sm:pb-20">{children}</div>;
};

ContainerBox.propTypes = {
  children: PropTypes.node,
};

export default ContainerBox;
