import { Container } from "react-bootstrap";
import { FormToasts, useToasts } from "@/components/FormToasts";
import { ContactsInfoCard, MessageForm } from "./components";
import "./style.scss";

const ContactUs = () => {
  const { showToast, setShowToast, toastVariant, setToastVariant } =
    useToasts();

  const onSuccessFormSend = () => {
    setToastVariant("success");
    setShowToast(true);
  };

  const onErrorFormValidation = () => {
    setToastVariant("danger");
    setShowToast(true);
  };

  return (
    <>
      <Container className="contact-us-page">
        <ContactsInfoCard />
        <MessageForm
          onSend={onSuccessFormSend}
          onError={onErrorFormValidation}
        />
      </Container>

      <FormToasts
        setShowToast={setShowToast}
        showToast={showToast}
        toastVariant={toastVariant}
      />
    </>
  );
};

export default ContactUs;
