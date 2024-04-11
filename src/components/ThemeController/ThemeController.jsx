import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeController = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const currentTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("class", currentTheme);
  }, [theme]);
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="fixed top-1/4  z-50">
      <span className="relative inline-block rotate-90">
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={toggleTheme}
            type="checkbox"
            value={theme}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <FaMoon
            size={12}
            className="col-start-1 row-start-1 stroke-base-100 fill-yellow-500"
          />
          <FaSun
            size={12}
            className="col-start-2 row-start-1 stroke-base-100 fill-yellow-500"
          />
        </label>
      </span>
    </div>
  );
};

export default ThemeController;
