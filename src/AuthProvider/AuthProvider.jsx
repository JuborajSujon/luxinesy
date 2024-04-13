import PropTypes from "prop-types";
const AuthProvider = ({ children }) => {
  return <div>{children}</div>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
