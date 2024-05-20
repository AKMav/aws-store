import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const BackHomeButton = () => {
  return (
    <Button variant="danger" className="back-home-button">
      <NavLink to="/" className="back-home-button__home-link" draggable="false">
        Back to home page
      </NavLink>
    </Button>
  );
};
