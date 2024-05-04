import { Container } from "react-bootstrap";
import { ContactsInfoCard } from "./components";
import "./style.scss";

const ContactUs = () => {
  return (
    <Container className="contact-us-page">
      <ContactsInfoCard />
    </Container>
  );
};

export default ContactUs;
