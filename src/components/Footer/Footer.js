import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.png";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import logo from "../../assets/img/Logo_JCcode.png";
import Form from "../Form/Form";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="align-items-center footer-redes">
          <Col className="d-flex flex-column align-items-center">
            <div
              style={{ paddingTop: 20 }}
              className="social-icon d-flex gap-3"
            >
              <a
                href="https://www.linkedin.com/in/juan-caceres-orellana/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Juancaceres963" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/jc.code/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p style={{ color: "#fff", padding: 20 }} className="m-0">
              Connect with me.
            </p>
          </Col>
        </Row>
        <Col>
          <Form id="contact"/>
        </Col>
        <Col>
          <img className="logo-footer" src={logo} />
        </Col>
      </Container>
      <p className="copy">Copyright 2025. All Rights Reserved</p>
    </footer>
  );
};
