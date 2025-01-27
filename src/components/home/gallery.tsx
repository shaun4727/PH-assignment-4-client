import React from "react";
import { Layout } from "antd";
import "../../assets/css/gallery.css";
import gallery1 from "../../assets/images/slider-1.png";

const { Content } = Layout;
import { Col, Row, Image } from "antd";

const Gallery: React.FC = () => {
  return (
    <Layout className="gallery-layout" style={{ marginTop: "65px" }}>
      <Content>
        <div
          className="gallery-container"
          style={{
            padding: 24,
            minHeight: 380,
            background: "#ebebeb",
            borderRadius: 25,
          }}
        >
          <h2 className="gallery-title">GALLERY</h2>
          <Row gutter={16}>
            <Col span={8} order={4} className="gutter-row">
              <Image.PreviewGroup>
                <Image width={350} src={gallery1} className="gallery-image" />
              </Image.PreviewGroup>
            </Col>
            <Col span={8} order={3} className="gutter-row">
              <Image.PreviewGroup>
                <Image width={350} src={gallery1} className="gallery-image" />
              </Image.PreviewGroup>
            </Col>
            <Col span={8} order={2} className="gutter-row">
              <Image.PreviewGroup>
                <Image width={350} src={gallery1} className="gallery-image" />
              </Image.PreviewGroup>
            </Col>
            <Col span={8} order={1}>
              <Image.PreviewGroup>
                <Image width={350} src={gallery1} className="gallery-image" />
              </Image.PreviewGroup>
            </Col>
            <Col span={8} order={1}>
              <Image.PreviewGroup>
                <Image width={350} src={gallery1} className="gallery-image" />
              </Image.PreviewGroup>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Gallery;
