import { NavLink } from "react-router-dom";
import "./style.scss";

export const NavList = () => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/contacts", title: "Contacts" },
    { path: "/about", title: "About" },
    { path: "/login", title: "Sign up" },
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
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
