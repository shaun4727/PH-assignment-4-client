import React from "react";
import { Carousel } from "antd";
import slider1 from "../../assets/images/slider-1.png";
import slider2 from "../../assets/images/slider-2.png";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

const CarouselCom: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src={slider1} style={contentStyle} />
      </div>
      <div>
        <img src={slider2} style={contentStyle} />
      </div>
    </Carousel>
  );
};

export default CarouselCom;
