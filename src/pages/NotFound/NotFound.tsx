import { Col, Container, Row } from "react-bootstrap";
import { BackHomeButton } from "@/components/shared";
import "./style.scss";

const NotFound = () => {
  return (
    <Container className="not-found-page">
      <Row className="not-found-page__row">
        <Col>
          <h1 className="not-found-page__title">404 Not Found</h1>
          <h3 className="not-found-page__subtitle">
            Your visited page not found. You may go home page.
          </h3>
        </Col>
      </Row>
      <Row className="not-found-page__row">
        <Col>
          <BackHomeButton />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
