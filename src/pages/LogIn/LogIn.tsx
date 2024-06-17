import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useSuccessfulAuth } from "@/hooks";
import "./style.scss";

const LogIn = () => {
  const { saveFetchedUser } = useSuccessfulAuth();

  useEffect(() => {
    toast.warn("Username - emilys, Password - emilyspass", {
      autoClose: false,
    });
  }, []);

  return (
    <Container className="log-in-page">
      <div className="log-in-page__wrapper">
        <LoginForm onSaveUser={saveFetchedUser} />
      </div>
    </Container>
  );
};

export default LogIn;
