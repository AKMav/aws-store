import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const Profile = () => {
  return (
    <Container className="profile-page">
      <Row className="profile-page__row">
        <Col>
          <h1 className="profile-page__title">Profile page</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
