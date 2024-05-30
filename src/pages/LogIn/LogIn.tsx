import { Container } from "react-bootstrap";
import { LoginForm } from "./components/LoginForm/LoginForm";
import "./style.scss";

const LogIn = () => {
  return (
    <Container className="log-in-page">
      <div className="log-in-page__wrapper">
        <LoginForm />
      </div>
    </Container>
  );
};

export default LogIn;
