import { ChangeEvent, useMemo, useState } from "react";
import { Form, Container, Row, Col, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavList } from "../NavList/NavList";
import { RootState } from "@/store";
import CartLogo from "@/assets/icons/cart.svg";
import WishlistLogo from "@/assets/icons/wishlist.svg";
import "./style.scss";

enum Langs {
  en = "English",
  ru = "Russian",
}

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lang, setLang] = useState(Langs.en);

  const changeLang = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Langs;
    setLang(value);
  };

  const openCart = () => console.log("Open cart");
  const openWishlist = () => console.log("Open wishlist");

  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);
  const cartListCount = useMemo(() => buyerCartList.length, [buyerCartList]);

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
              <Form.Select
                size="sm"
                className="language-select"
                data-bs-theme="dark"
                onChange={changeLang}
              >
                <option value={Langs.en}>{Langs.en}</option>
                <option value={Langs.ru}>{Langs.ru}</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-body">
        <Container className="header-body__container">
          <Row>
            <Col className="header-body__col">
              <h1 className="header-body__title">Awesome store</h1>
              <nav className="header-body__nav">
                <NavList />
              </nav>
              <div className="header-body__actions-block">
                <button
                  type="button"
                  className="action-button"
                  onClick={openWishlist}
                >
                  <img
                    src={WishlistLogo}
                    alt="Wishlist button"
                    draggable="false"
                    className="action-button__image"
                  />
                </button>

                <button
                  type="button"
                  className="action-button"
                  onClick={openCart}
                >
                  <img
                    src={CartLogo}
                    alt="Buyer cart"
                    draggable="false"
                    className="action-button__image"
                  />
                  {!!cartListCount && (
                    <Badge pill bg="danger" className="action-button__label">
                      {cartListCount}
                    </Badge>
                  )}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};
