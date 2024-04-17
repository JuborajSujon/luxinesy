import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../customHook/useAuth";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { userSignOut, user, setUser, reload } = useAuth();

  // handle user info show or hide on navbar
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    userSignOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {}, [user, reload]);

  const navList = (
    <>
      <li className="hover:bg-green-500 hover:text-white rounded-lg ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:bg-green-500 hover:text-white rounded-lg">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          <li className="hover:bg-green-500 hover:text-white rounded-lg">
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li className="hover:bg-green-500 hover:text-white rounded-lg">
            <NavLink to="/profile">Update Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar max-w-[1540px] fixed  z-10 bg-white dark:bg-slate-900  px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-h-9 h-9 px-2  md:hidden hover:bg-green-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="2 2 20 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navList}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-bold  min-h-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-900 hover:from-emerald-500 hover:to-yellow-700 -ml-2 ">
          LUXINESY
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-lg font-semibold px-1 space-x-2">
          {navList}
        </ul>
      </div>
      <div className="navbar-end  space-x-2">
        {user ? (
          <div className="relative">
            <div className="flex items-center  gap-1 sm:gap-2">
              <div className="text-base sm:text-xl font-semibold hidden lg:block">
                {user?.displayName}
              </div>
              <label
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:bg-green-500 min-h-8 h-10 w-10  sm:min-h-12 sm:h-12 sm:w-12">
                <div className="w-12 rounded-full">
                  <img
                    className=""
                    src={
                      user?.photoURL || "https://i.ibb.co/Jn1jJHN/avater.png"
                    }
                  />
                </div>
              </label>

              <button
                onClick={handleLogout}
                className="btn btn-ghost border border-green-500 hover:bg-green-500 hover:text-white text-base sm:text-xl font-semibold min-h-8 h-8 px-2 sm:px-4 sm:min-h-10 sm:h-10">
                Logout
              </button>
            </div>
            {isHovered && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-0 -ml-32 z-[1] py-3 px-4 shadow bg-base-100 rounded-md w-64 absolute">
                <li className="text-base font-medium">
                  Name : {user?.displayName || "user name not found"}
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn btn-ghost border border-green-500 hover:bg-green-500 hover:text-white text-base sm:text-xl font-semibold min-h-8 h-8 px-2 sm:px-4 sm:min-h-10 sm:h-10">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
