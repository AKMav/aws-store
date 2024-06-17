import { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import { Routes } from "@/routes";
import {
  NavList,
  BuyerCartButton,
  WishlistButton,
  UserButton,
} from "./components";
import "./style.scss";

export const Header = () => {
  const navigate = useNavigate();

  // user
  const user = useSelector((state: RootState) => state.profile.user);
  const openProfile = () => navigate(Routes.Profile);

  // buyer cart
  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);
  const cartListCount = useMemo(() => buyerCartList.length, [buyerCartList]);
  const openCart = () => {
    navigate(Routes.Cart);
  };

  // wishlist
  const wishlist = useSelector((state: RootState) => state.wishlist.list);
  const wishlistCount = useMemo(() => wishlist.length, [wishlist]);
  const openWishlist = () => {
    navigate(Routes.Wishlist);
  };

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
                <NavList isAuthorized={!!user} />
              </nav>
              <div className="header-body__actions-block">
                <WishlistButton
                  itemsCount={wishlistCount}
                  openWishlist={openWishlist}
                />
                <BuyerCartButton
                  itemsCount={cartListCount}
                  openCart={openCart}
                />
                {user && <UserButton openProfile={openProfile} />}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};
