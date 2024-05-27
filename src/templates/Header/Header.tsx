import { Container, Row, Col } from "react-bootstrap";
import { NavList, BuyerCartButton, WishlistButton } from "./components";
import "./style.scss";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="top-header">
        <Container className="top-header__container">
          <Row>
            <Col className="top-header__col">
              <h2 className="top-header__text">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="top-header__link"
                >
                  ShopNow
                </a>
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-body">
        <Container className="header-body__container">
          <Row>
            <Col className="header-body__col">
              <h1 className="header-body__title">Exclusive</h1>
              <nav className="header-body__nav">
                <NavList />
              </nav>
              <div className="header-body__actions-block">
                <WishlistButton />
                <BuyerCartButton />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};
