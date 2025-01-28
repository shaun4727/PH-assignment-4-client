import React from "react";
import { Card, Col, Row } from "antd";

const OrderHistory: React.FC = () => {
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={10}>
          <div className="checkout-section ">
            <Card
              hoverable
              style={{
                width: 340,
                padding: "0px 20px 16px 20px",
                margin: "0px",
              }}
            >
              <div className="checkout-summary">
                <h3 className="title ">Customer Info</h3>
                <div className="order-info bottom-border">
                  <span className="order-title low-opacity">Order</span>
                  <div className="order-date">
                    <span className="low-opacity">Order Date</span>
                  </div>
                </div>
                <div className="order-info bottom-border">
                  <span className="order-title ">Order</span>
                  <div className="order-date">
                    <span className="">Order Date</span>
                  </div>
                </div>
                <div className="order-info bottom-border">
                  <span className="order-title ">Order</span>
                  <div className="order-date">
                    <span className="">Order Date</span>
                  </div>
                </div>
                <div className="order-info bottom-border">
                  <span className="order-title ">Order</span>
                  <div className="order-date">
                    <span className="">Order Date</span>
                  </div>
                </div>
                <div className="order-info bottom-border">
                  <span className="order-title ">Order</span>
                  <div className="order-date">
                    <span className="">Order Date</span>
                  </div>
                </div>
                <div className="order-info bottom-border">
                  <span className="order-title ">Order</span>
                  <div className="order-date">
                    <span className="">Order Date</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={14}>
          <Card
            hoverable
            style={{
              width: 340,
              padding: "0px 20px 16px 20px",
              margin: "0px",
            }}
          >
            <div className="checkout-summary order-history-status">
              <h3 className="title bottom-border">Order Info</h3>
              <p>
                <span className="low-opacity bold">Order No.: </span>
                123456
              </p>
              <ul>
                <li className="order-status">Processing</li>
              </ul>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderHistory;
