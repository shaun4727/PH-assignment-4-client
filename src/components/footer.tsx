import React from "react";
import { Layout } from "antd";
import "../assets/css/footer.css";
import logo from "../assets/images/logo.png";

const { Content } = Layout;
import { Col, Row } from "antd";

const Footer: React.FC = () => {
  return (
    <Layout className="footer-layout" style={{ marginTop: "65px" }}>
      <Content>
        <div
          className="footer-container"
          style={{
            padding: 24,
            minHeight: 300,
          }}
        >
          <Row gutter={16}>
            <Col span={8} className="gutter-row ">
              <div className="footer-row">
                <h1>REGISTER NOW</h1>
                <img src={logo} alt="" />
              </div>
            </Col>
            <Col span={8} className="gutter-row ">
              <div className="footer-row">
                <h2 className="footer-title">LEARN</h2>
                <p>www.bookshop.org</p>
                <p>About Us</p>
              </div>
            </Col>
            <Col span={8} className="gutter-row ">
              <div className="footer-row">
                <h2 className="footer-title">CONNECT</h2>
                <p>Contact Us</p>
                <p>123456789</p>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Footer;
