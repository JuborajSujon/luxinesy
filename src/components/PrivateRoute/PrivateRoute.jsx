import PropTypes from "prop-types";
import useAuth from "../../customHook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import BlogDetailsPlaceholder from "./../BlogDetailsPlaceholder/BlogDetailsPlaceholder";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <BlogDetailsPlaceholder />;
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }

  return <div>{children}</div>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
