import { Col, Container, Row } from "react-bootstrap";
import { BackHomeButton } from "@/components/UIKit";
import "./style.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <Container className="not-found__container">
        <Row className="not-found__row">
          <Col>
            <h1 className="not-found__title">404 Not Found</h1>
            <h3 className="not-found__subtitle">
              Your visited page not found. You may go home page.
            </h3>
          </Col>
        </Row>
        <Row className="not-found__row">
          <Col>
            <BackHomeButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
