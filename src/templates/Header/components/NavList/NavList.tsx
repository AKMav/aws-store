import { NavLink } from "react-router-dom";
import { Routes } from "@/routes";
import "./style.scss";

export const NavList = () => {
  const navLinks = [
    { path: Routes.Home, title: "Home" },
    { path: Routes.Contacts, title: "Contacts" },
    { path: Routes.About, title: "About" },
    { path: Routes.Login, title: "Sign up" },
  ];

  return (
    <ul className="nav-list">
      {navLinks.map(({ path, title }) => (
        <li key={path} className="nav-list__item">
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "nav-list__link nav-list__link_active"
                : "nav-list__link"
            }
            draggable="false"
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
