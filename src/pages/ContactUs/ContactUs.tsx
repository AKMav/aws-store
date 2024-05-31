import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { ContactsInfoCard, MessageForm } from "./components";
import "./style.scss";

const ContactUs = () => {
  const onSuccessFormSend = () => {
    toast.success("Form successful sended");
  };

  const onErrorFormValidation = () => {
    toast.error("Form is invalid");
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
    </>
  );
};

export default ContactUs;
