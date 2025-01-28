import React from "react";
import { Carousel } from "antd";
import { useGetCarouselImagesQuery } from "../../redux/features/home/homeManagement.api";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  width: "100%",
};

const CarouselCom: React.FC = () => {
  // const onChange = (currentSlide: number) => {
  //   console.log();
  // };
  const { data } = useGetCarouselImagesQuery(undefined);

  // afterChange={onChange}
  return (
    <Carousel autoplay={true} arrows={true}>
      {data?.map((item, index) => (
        <div key={index}>
          <img src={item?.image} style={contentStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCom;
