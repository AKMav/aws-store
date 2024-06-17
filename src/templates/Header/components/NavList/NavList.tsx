import { NavLink } from "react-router-dom";
import { Routes } from "@/routes";
import { useHandleClick } from "./hooks/useHandleClick";
import "./style.scss";

interface IProps {
  isAuthorized: boolean;
}

const navLinks = [
  { path: Routes.Home, title: "Home" },
  { path: Routes.Contact, title: "Contact" },
  { path: Routes.About, title: "About" },
  { path: Routes.Login, title: "Sign in" },
];

export const NavList = ({ isAuthorized }: IProps) => {
  const handleClick = useHandleClick(isAuthorized);

  return (
    <ul className="nav-list">
      {navLinks.map(({ path, title }) => (
        <li key={path} className="nav-list__item">
          <NavLink
            onClick={handleClick}
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
