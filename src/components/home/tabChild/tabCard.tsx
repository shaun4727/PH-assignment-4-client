import React from "react";
import { Card, Button } from "antd";
import cardImg from "../../../assets/images/tab-card/book.png";
import "../../../assets/css/tabCard.css";
import { NavLink } from "react-router-dom";

const TabCard: React.FC = () => (
  <div className="cardContainer ">
    <Card
      className="card-item"
      hoverable
      cover={<img alt="example" src={cardImg} style={{ height: 140 }} />}
    >
      <h3>Book Name</h3>
      <div className="price-category">
        <h1 className="price">$199</h1>
        <span className="category">Category</span>
      </div>
      <p className="description">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their
      </p>
      <div className="buy-section">
        <Button className="buy-now">
          <NavLink to={`/product/view-detail`}>View Detail</NavLink>
        </Button>
      </div>
    </Card>
    <Card
      className="card-item"
      hoverable
      cover={<img alt="example" src={cardImg} style={{ height: 140 }} />}
    >
      <h3>Book Name</h3>
      <div className="price-category">
        <h1 className="price">$199</h1>
        <span>Category</span>
      </div>
      <p className="description">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their
      </p>
      <div className="buy-section">
        <Button className="buy-now">
          <NavLink to={`/product/view-detail`}>View Detail</NavLink>
        </Button>
      </div>
    </Card>
    <Card
      className="card-item"
      hoverable
      cover={<img alt="example" src={cardImg} style={{ height: 140 }} />}
    >
      <h3>Book Name</h3>
      <div className="price-category">
        <h1 className="price">$199</h1>
        <span>Category</span>
      </div>
      <p className="description">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their
      </p>
      <div className="buy-section">
        <Button className="buy-now">
          <NavLink to={`/product/view-detail`}>View Detail</NavLink>
        </Button>
      </div>
    </Card>
    <Card
      className="card-item"
      hoverable
      cover={<img alt="example" src={cardImg} style={{ height: 140 }} />}
    >
      <h3>Book Name</h3>
      <div className="price-category">
        <h1 className="price">$199</h1>
        <span>Category</span>
      </div>
      <p className="description">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their
      </p>
      <div className="buy-section">
        <Button className="buy-now">
          <NavLink to={`/product/view-detail`}>View Detail</NavLink>
        </Button>
      </div>
    </Card>
    <Card
      className="card-item"
      hoverable
      cover={<img alt="example" src={cardImg} style={{ height: 140 }} />}
    >
      <h3>Book Name</h3>
      <div className="price-category">
        <h1 className="price">$199</h1>
        <span>Category</span>
      </div>
      <p className="description">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their
      </p>
      <div className="buy-section">
        <Button className="buy-now">
          <NavLink to={`/product/view-detail`}>View Detail</NavLink>
        </Button>
      </div>
    </Card>
    <Card
      className="card-item"
      hoverable
      cover={<img alt="example" src={cardImg} style={{ height: 140 }} />}
    >
      <h3>Book Name</h3>
      <div className="price-category">
        <h1 className="price">$199</h1>
        <span>Category</span>
      </div>
      <p className="description">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their
      </p>
      <div className="buy-section">
        <Button className="buy-now">
          <NavLink to={`/product/view-detail`}>View Detail</NavLink>
        </Button>
      </div>
    </Card>
  </div>
);

export default TabCard;
