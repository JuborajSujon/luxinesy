import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = false;
  const navList = (
    <>
      <li className="hover:bg-green-500 hover:text-white rounded-lg ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:bg-green-500 hover:text-white rounded-lg">
        <NavLink to="/profile">Update Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-[1540px] mx-auto px-4">
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
        <a className="btn btn-ghost text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-bold  min-h-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-900 hover:from-emerald-500 hover:to-yellow-700 -ml-2">
          LUXINESY
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-lg font-semibold px-1 space-x-2">
          {navList}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar hover:bg-green-500 min-h-12 h-12 w-12 mt-2">
            <div className="w-12 rounded-full">
              <img
                className=""
                src={
                  user?.photoURL || "https://avatar.iran.liara.run/public/15"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
            <li>
              <button className="btn btn-sm text-lg btn-ghost">
                {user?.displayName || "user name not found"}
              </button>
            </li>
            <div className="mt-2 md:hidden">
              {user ? (
                <button className="btn btn-ghost hover:bg-green-500 hover:text-white text-xl font-semibold min-h-8 h-8 w-full">
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-ghost hover:bg-green-500 hover:text-white text-xl font-semibold min-h-8 h-8 w-full">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </ul>
        </div>

        <div className="hidden md:block">
          {user ? (
            <button className="btn btn-ghost hover:bg-green-500 hover:text-white text-xl font-semibold min-h-10 h-10">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-ghost hover:bg-green-500 hover:text-white text-xl font-semibold min-h-10 h-10">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
