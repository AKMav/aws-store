import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useLogin } from "@/hooks";
import "./style.scss";

const LogIn = () => {
  const { onSuccessfulLogin } = useLogin();

  useEffect(() => {
    toast.warn("Username - emilys, Password - emilyspass", {
      autoClose: false,
    });
  }, []);

  return (
    <Container className="log-in-page">
      <div className="log-in-page__wrapper">
        <LoginForm onSaveUser={onSuccessfulLogin} />
      </div>
    </Container>
  );
};

export default LogIn;
