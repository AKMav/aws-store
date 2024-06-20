import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const ProceedCheckout = () => {
  return (
    <Container className="proceed-checkout-page">
      <Row className="proceed-checkout-page__row">
        <Col>
          <h1 className="proceed-checkout-page__title">
            Proceed Checkout Page
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ProceedCheckout;
