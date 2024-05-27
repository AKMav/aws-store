import { Col, Container, Row } from "react-bootstrap";
import { BackHomeButton } from "@/components/shared";
import "./style.scss";

const LogIn = () => {
  return (
    <Container className="log-in-page">
      <Row className="log-in-page__row">
        <Col>
          <h1 className="log-in-page__title">Log in page</h1>
        </Col>
      </Row>
      <Row className="log-in-page__row">
        <Col>
          <BackHomeButton />
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
