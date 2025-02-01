import React from "react";

import "../assets/css/footer.css";
import logo from "../assets/images/logo.png";

import { Col, Row } from "antd";
import { useFooterObserver } from "./layout/FooterObserverContext";

const FooterPage: React.FC = () => {
  const { footerRef } = useFooterObserver();
  return (
    <Row gutter={16} style={{ marginTop: "25px" }} ref={footerRef}>
      <Col xs={24} sm={24} md={12} lg={8} xl={8} className="gutter-row ">
        <div className="footer-row">
          <h1>REGISTER NOW</h1>
          <img src={logo} alt="" />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8} className="gutter-row ">
        <div className="footer-row">
          <h2 className="footer-title">LEARN</h2>
          <p>www.bookshop.org</p>
          <p>About Us</p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8} className="gutter-row ">
        <div className="footer-row">
          <h2 className="footer-title">CONNECT</h2>
          <p>Contact Us</p>
          <p>123456789</p>
        </div>
      </Col>
    </Row>
  );
};

export default FooterPage;
