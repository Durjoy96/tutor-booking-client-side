import { Link } from "react-router-dom";
import NavPage from "./NavPage";
import { Tooltip } from "react-tooltip";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const { user, signOutUser, setDarkMode } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarPages = [
    { path: "/", name: "Home" },
    { path: "/find-tutors", name: "Find tutors" },
    { path: "/add-tutorials", name: "Add Tutorials" },
    {
      path: "/my-tutorials",
      name: "My Tutorials",
    },
    {
      path: "/my-booked-tutors",
      name: "My booked tutors",
    },
  ];

  const handleNavPageClick = () => {
    setIsDropdownOpen(() => false); // Close the dropdown when a NavPage is clicked
  };

  const darkThemeHandler = () => {
    setDarkMode(true);
    document.querySelector("body").style.backgroundColor = "black";
  };
  const LightThemeHandler = () => {
    setDarkMode(false);
    document.querySelector("body").style.backgroundColor = "#f8f9fd";
  };
  return (
    <>
      <div className="main-container">
        <div className="navbar max-w-screen-xl mx-auto px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {isDropdownOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 dark:bg-[#4e4e4e] rounded-box z-[10] mt-3 w-52 p-2 shadow gap-2"
                >
                  {navbarPages.map((page, idx) => (
                    <NavPage
                      key={idx}
                      page={page}
                      handleNavPageClick={handleNavPageClick} // Pass the click handler
                    />
                  ))}
                </ul>
              )}
            </div>
            <Link
              to="/"
              className="text-2xl md:text-3xl text-primary font-bold"
            >
              Titly
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navbarPages.map((page, idx) => (
                <NavPage key={idx} page={page}></NavPage>
              ))}
            </ul>
          </div>
          <div className="navbar-end gap-6">
            {user ? (
              <div>
                <div className="dropdown dropdown-end dropdown-hover">
                  <div tabIndex={0} role="button" className=" m-1">
                    <img
                      className="w-10 h-10 rounded-full object-cover object-center cursor-pointer"
                      src={user?.photoURL}
                      alt="User"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 dark:bg-[#4e4e4e] rounded-box z-[10] w-32 p-2 shadow"
                  >
                    <p className="text-base-content font-semibold hover:bg-transparent px-2 pt-2 dark:text-white">
                      {user?.displayName}
                    </p>
                    <li>
                      <button onClick={signOutUser} className="text-red-500">
                        {" "}
                        <BiLogOut /> Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex gap-5">
                {" "}
                <Link to="/login" className="primary-btn">
                  Login
                </Link>
              </div>
            )}

            {/* Dark and light mode toggle */}

            <label className="swap swap-rotate">
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Dark Mode"
                onClick={darkThemeHandler}
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Light Mode"
                onClick={LightThemeHandler}
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" place="top" />
    </>
  );
};

export default Navbar;
