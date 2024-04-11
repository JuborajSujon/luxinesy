import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ThemeController from "../../components/ThemeController/ThemeController";

const Root = () => {
  return (
    <div className="font-spartan">
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-76px)]">
        <Outlet />
      </div>
      <ThemeController />
      <Footer />
    </div>
  );
};

export default Root;
