import React, { ChangeEvent, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./style.scss";

enum Langs {
  en = "English",
  ru = "Russian",
}

export const Header = () => {
  const [lang, setLang] = useState(Langs.en);

  const changeLang = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Langs;
    setLang(value);
  };

  return (
    <header className="app-header">
      <div className="top-header">
        <Container className="top-header__container">
          <Row>
            <Col className="top-header__col">
              <h2 className="top-header__text">
                {lang}
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
          <Row>Header</Row>
        </Container>
      </div>
    </header>
  );
};
