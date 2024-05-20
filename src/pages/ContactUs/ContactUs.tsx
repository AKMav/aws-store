import { Container, Toast, ToastContainer } from "react-bootstrap";
import { ContactsInfoCard, MessageForm } from "./components";
import "./style.scss";
import { useState } from "react";

import { ToastVariant } from "./types";

const ContactUs = () => {
  const onSuccessFormSend = () => {
    setToastVariant("success");
    setShowToast(true);
  };

  const onErrorFormValidation = () => {
    setToastVariant("danger");
    setShowToast(true);
  };

  const [toastVariant, setToastVariant] = useState<ToastVariant>("danger");
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Container className="contact-us-page">
        <ContactsInfoCard />
        <MessageForm
          onSend={onSuccessFormSend}
          onError={onErrorFormValidation}
        />
      </Container>

      <ToastContainer className="p-4" position="top-end">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          bg={toastVariant}
          delay={5000}
          autohide
        >
          <Toast.Header closeButton>
            <strong className="me-auto">
              {(toastVariant === "danger" && "Error") ||
                (toastVariant === "success" && "Success")}
            </strong>
          </Toast.Header>
          <Toast.Body className={"text-white"}>
            {(toastVariant === "danger" && "Fill all required fields") ||
              (toastVariant === "success" && "Form successful submitted")}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ContactUs;
