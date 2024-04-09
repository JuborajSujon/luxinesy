const Navbar = () => {
  const user = true;
  const navList = (
    <div>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Update Profile</a>
      </li>
    </div>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-green-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
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
        <a className="btn btn-ghost text-4xl italic font-bold  min-h-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-900 hover:from-emerald-500 hover:to-yellow-700">
          LUXINESY
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar hover:bg-green-500 min-h-10 h-10 w-10">
            <div className="w-8 rounded-full">
              <img
                className=""
                src={
                  user?.photoURL ||
                  "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button className="btn btn-sm  btn-ghost">
                {user?.displayName || "user name not found"}
              </button>
            </li>
            <li>
              <button className="btn btn-ghost hover:bg-green-500 hover:text-white min-h-10 h-10">
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div>
          {user ? (
            <button className="btn btn-ghost hover:bg-green-500 hover:text-white min-h-10 h-10">
              Logout
            </button>
          ) : (
            <a to="/login">
              <button className="btn btn-ghost hover:bg-green-500 hover:text-white min-h-10 h-10">
                Login
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
