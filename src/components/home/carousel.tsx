import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useGetCarouselImagesQuery } from "../../redux/features/home/homeManagement.api";
import { setCarousel } from "../../redux/features/home/homeSlice";
import { useAppDispatch } from "../../redux/hook";
import { toast } from "sonner";

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
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetCarouselImagesQuery(undefined);
  let toastId: string | number = 0;
  if (!toastId) {
    if (isLoading) {
      toastId = toast.loading("...Carousel Loading", { id: toastId });
    }
    if (isSuccess) {
      toast.success("Carousel fetched", { id: toastId });
    }
  }
  useEffect(() => {
    dispatch(setCarousel(data));
  }, [data, dispatch]);
  // dispatch(setCarousel(data));

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
