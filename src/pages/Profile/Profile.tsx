import { Container } from "react-bootstrap";
import { WelcomeTitle } from "./components";
import "./style.scss";

const Profile = () => {
  return (
    <Container className="profile-page">
      <WelcomeTitle userName="Mr. Akmal" />
    </Container>
  );
};

export default Profile;
