import React from "react";
import CarouselCom from "../components/home/carousel";
import "../assets/css/home.css";
import TabCom from "../components/home/tabCom";
import ReviewCom from "../components/home/review";
import Gallery from "../components/home/gallery";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <CarouselCom />
      <TabCom />
      <ReviewCom />
      <Gallery />
    </div>
  );
};

export default Home;
