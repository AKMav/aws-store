import "./style.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import GooglePlayImage from "@/assets/images/google-play.png";
import AppStoreImage from "@/assets/images/app-store.png";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

export const Footer = () => {
  return (
    <div className="app-footer">
      <div className="top-footer">
        <Container>
          <Row>
            <Col>
              <div>
                <h2>Exclusive</h2>
                <h3 className="top-footer__block-header">Subscribe</h3>
                <p>Get 10% off your first order</p>
              </div>
              <Form.Control
                id="footer-mail-input"
                data-bs-theme="dark"
                type="email"
                placeholder="Enter your email"
              />
            </Col>
            <Col>
              <div>
                <h4 className="top-footer__block-header">Support</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </Col>
            <Col>
              <div>
                <h4 className="top-footer__block-header">Account</h4>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
              </div>
            </Col>
            <Col>
              <div>
                <h4 className="top-footer__block-header">Quick Link</h4>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
            </Col>
            <Col>
              <div>
                <h4 className="top-footer__block-header">Download App</h4>
                <p className="top-footer__subtitle">
                  Save $3 with App New User Only
                </p>
                <div className="top-footer__store-buttons">
                  <button
                    className="store-button"
                    type="button"
                    onClick={() => console.log("google play link click")}
                  >
                    <img
                      src={GooglePlayImage}
                      alt="google play link"
                      draggable="false"
                    />
                  </button>
                  <button
                    className="store-button"
                    type="button"
                    onClick={() => console.log("app store link click")}
                  >
                    <img
                      src={AppStoreImage}
                      alt="app store link"
                      draggable="false"
                    />
                  </button>
                </div>
                <div className="socials-links">
                  <button type="button" className="socials-links__btn">
                    <img
                      src={FacebookIcon}
                      alt="social link"
                      draggable="false"
                    />
                  </button>
                  <button type="button" className="socials-links__btn">
                    <img src={InstIcon} alt="social link" draggable="false" />
                  </button>
                  <button type="button" className="socials-links__btn">
                    <img
                      src={LinkedinIcon}
                      alt="social link"
                      draggable="false"
                    />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-footer">
        <Container className="app-footer__container">
          <Row>
            <Col>
              <p className="bottom-footer__text">
                Copyright 2024. All right reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
