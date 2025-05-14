/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavPage = ({ page, handleNavPageClick }) => {
  const { path, name } = page;
  return (
    <>
      <li onClick={handleNavPageClick}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `btn text-sm bg-transparent border-none shadow-none hover:bg-transparent min-h-8 h-8 lg:min-h-12 lg:h-12 ${
              isActive
                ? "text-primary font-bold hover:text-primary/80 transition-all delay-150"
                : "text-base-content font-normal hover:text-primary dark:text-white/80 dark:hover:text-primary transition-all delay-150"
            }`
          }
        >
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default NavPage;
