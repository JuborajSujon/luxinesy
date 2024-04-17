import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ThemeController from "../../components/ThemeController/ThemeController";

const Root = () => {
  return (
    <div className="font-spartan">
      <div className="h-[60px]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-76px)] overflow-x-hidden">
        <Outlet />
      </div>
      <ThemeController />
      <Footer />
    </div>
  );
};

export default Root;
