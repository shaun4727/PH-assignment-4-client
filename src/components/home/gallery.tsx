import React from "react";
import { Layout } from "antd";
import "../../assets/css/gallery.css";
import { useAppSelector } from "../../redux/hook";

const { Content } = Layout;
import { Col, Row, Image } from "antd";

const Gallery: React.FC = () => {
  const data = useAppSelector((state) => state.home.carousel);

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
            {data?.map((item, index) => (
              <Col span={8} order={4} className="gutter-row" key={index}>
                <Image.PreviewGroup>
                  <Image
                    width={350}
                    src={item.image}
                    className="gallery-image"
                  />
                </Image.PreviewGroup>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Gallery;
