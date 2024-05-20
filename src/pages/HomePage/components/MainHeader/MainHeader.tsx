import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import { CarouselBanner } from "../CarouselBanner/CarouselBanner";

export const MainHeader = () => {
  return (
    <div className="main-header">
      <Container className="main-header__container">
        <Row>
          <Col xs={2} className="main-header__col">
            <CategoriesList />
          </Col>
          <Col className="main-header__col main-header__col_right">
            <CarouselBanner />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
