import React, { useState } from "react";
import { Card, Col, Image, Row } from "antd";
import "../../assets/css/dashboard/orderHistory.css";
import { useAppSelector } from "../../redux/hook";
import { useGetOrdersQuery } from "../../redux/features/order/order.api";
import moment from "moment";
import { TOrderSchemaWithId } from "../../types";

const OrderHistory: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data } = useGetOrdersQuery(undefined);
  const [orderDetails, setOrderDetails] = useState<Partial<TOrderSchemaWithId>>(
    {}
  );

  const setOrderDetailsInfo = (order: TOrderSchemaWithId) => {
    setOrderDetails(order);
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="checkout-section ">
            <Card
              hoverable
              className="checkout-card"
              style={{
                padding: "0px 20px 16px 20px",
                margin: "0px",
              }}
            >
              <div className="checkout-summary">
                <h3 className="title ">Order List</h3>
                <div className="user-info">
                  <h5>
                    Name: <span className="name">{user?.name}</span>
                  </h5>
                </div>
                {data?.data &&
                  data.data.map((order) => (
                    <div
                      className={`order-info bottom-border ${
                        order._id == orderDetails._id ? "active-row" : ""
                      }`}
                      onClick={() => setOrderDetailsInfo(order)}
                    >
                      <span className="order-title low-opacity">
                        {"ID: "}
                        {order?._id}
                      </span>
                      <div className="order-date">
                        <span className="low-opacity">
                          Date:{" "}
                          <span className="date-value">
                            {moment(order.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          {orderDetails._id && (
            <Card hoverable>
              <div className="checkout-summary order-history-status">
                <h3 className="title bottom-border">Order Info</h3>
                <div className="order-detail">
                  <div className="top-level-order-detail">
                    <h3>
                      <span className="heading">Status:</span>{" "}
                      <span className="value status">
                        {orderDetails.status}
                      </span>
                    </h3>
                    <h3>
                      <span className="heading">Total:</span>
                      <span className="value">${orderDetails.totalPrice}</span>
                    </h3>
                  </div>
                  {orderDetails.products?.map((order) => (
                    <div className="order-product-detail">
                      <h3>
                        {typeof order.product != "string"
                          ? order.product.title
                          : ""}
                      </h3>
                      <Row>
                        <Col span={12}>
                          {" "}
                          <Image
                            height={"100px"}
                            src={
                              typeof order.product != "string"
                                ? order.product.image
                                : ""
                            }
                            className="product-img"
                          />
                        </Col>
                        <Col span={12}>
                          {" "}
                          <div className="details">
                            <div className="qty-price">
                              <h5>
                                <span className="heading">Quantity: </span>
                                <span className="value">{order.quantity}</span>
                              </h5>
                              <h5>
                                <span className="heading">Price: </span>
                                <span className="value">
                                  ${order.price * order.quantity}
                                </span>
                              </h5>
                            </div>
                            <span className="category">
                              {typeof order.product != "string"
                                ? order.product.category
                                : ""}
                            </span>
                            <h5>
                              <span className="heading">Author: </span>

                              <span className="value">
                                {typeof order.product != "string"
                                  ? order.product.author
                                  : ""}
                              </span>
                            </h5>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};

export default OrderHistory;
