import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto font-spartan">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
