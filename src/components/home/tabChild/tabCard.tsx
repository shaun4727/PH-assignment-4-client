import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import "../../../assets/css/tabCard.css";
import { NavLink } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/features/home/homeManagement.api";
import { TBook } from "../../../types";

interface TabCardProps {
  activeTabKey?: string;
}
const TabCard: React.FC<TabCardProps> = ({ activeTabKey }) => {
  const [allBooks, setAllBooks] = useState<TBook[]>([]);
  const { data } = useGetAllProductsQuery(undefined);

  useEffect(() => {
    const books = data?.filter((item) => item.category == activeTabKey);
    setAllBooks(books || []);
  }, [activeTabKey, data]);

  return (
    <div className="cardContainer ">
      {allBooks?.map((item, index) => (
        <Card
          key={index}
          className="card-item"
          hoverable
          cover={<img alt="example" src={item.image} style={{ height: 140 }} />}
        >
          <h3>{item?.title}</h3>
          <p>
            by <span className="writer-name">{item?.author}</span>
          </p>
          <div className="price-category">
            <h1 className="price">${item?.price}</h1>
            <span className="category">{item?.category}</span>
          </div>
          <p className="description">{item?.description}</p>
          <div className="buy-section">
            <Button className="buy-now">
              <NavLink to={`/product/view-detail`} state={item}>
                View Detail
              </NavLink>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TabCard;
