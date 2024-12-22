/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavPage = ({ page }) => {
  const { path, name } = page;
  return (
    <>
      <li>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `btn text-base bg-transparent border-none shadow-none hover:bg-transparent min-h-8 h-8 lg:min-h-12 lg:h-12 ${
              isActive
                ? "text-primary font-bold hover:text-primary/80"
                : "text-base-content font-medium hover:text-primary"
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
