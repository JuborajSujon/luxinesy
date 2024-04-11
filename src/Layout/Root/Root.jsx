import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ThemeController from "../../components/ThemeController/ThemeController";

const Root = () => {
  return (
    <div className="font-spartan">
      <div className="h-[cal(100vh-76px)]">
        <Navbar />
      </div>
      <Outlet />
      <ThemeController />
      <Footer />
    </div>
  );
};

export default Root;
