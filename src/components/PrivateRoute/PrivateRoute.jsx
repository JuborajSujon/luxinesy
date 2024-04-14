import PropTypes from "prop-types";
import useAuth from "../../customHook/useAuth";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
