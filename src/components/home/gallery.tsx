import React from "react";

import "../../assets/css/gallery.css";
import { useAppSelector } from "../../redux/hook";

import { Col, Row, Image } from "antd";

const Gallery: React.FC = () => {
  const data = useAppSelector((state) => state.home.carousel);

  return (
    <Row gutter={[16, 16]} className="gallery-row">
      <Col span={24}>
        <h2 className="gallery-title">GALLERY</h2>
      </Col>
      {data?.map((item, index) => (
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={8}
          className="gutter-row"
          key={index}
        >
          <Image.PreviewGroup>
            <Image
              width={"100%"}
              height={250}
              src={item.image}
              className="gallery-image"
            />
          </Image.PreviewGroup>
        </Col>
      ))}
    </Row>
  );
};

export default Gallery;
