import React, { useEffect, useState } from "react";
import { Card, Col, Image, Row, Select } from "antd";
import "../../assets/css/dashboard/orderHistory.css";
import { useAppSelector } from "../../redux/hook";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "../../redux/features/order/order.api";
import moment from "moment";
import { TOrderSchemaWithId } from "../../types";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "sonner";

const OrderHistory: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  const [edit, setEdit] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<string>("");
  const { data, isLoading, isSuccess } = useGetOrdersQuery(undefined);

  let orderToastId: string | number = 3;
  if (orderToastId == 3) {
    if (isLoading) {
      orderToastId = toast.loading("...Order data retrieving", {
        id: orderToastId,
      });
    }
    if (isSuccess) {
      toast.success("Order data fetched", { id: orderToastId });
    }
  }

  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();
  const [orderDetails, setOrderDetails] = useState<Partial<TOrderSchemaWithId>>(
    {}
  );
  useEffect(() => {
    const order = data?.data?.find((order) => order._id == orderDetails._id);
    if (order) {
      setOrderDetails(order);
    }
  }, [data, orderDetails]);
  const toggleEdit = () => {
    setEdit((prevEdit) => !prevEdit); // Toggle between true and false
  };
  const setOrderDetailsInfo = (order: TOrderSchemaWithId) => {
    setOrderDetails(order);
  };
  const deleteOrderFunc = async (id: string): Promise<void> => {
    try {
      let toastId;
      const res = await deleteOrder(id).unwrap();
      if (res.statusCode == 200) {
        toastId = toast.success(res.message);
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeStatus = (status: string) => {
    setOrderStatus(status);
  };
  const submitOrder = async (id: string) => {
    toggleEdit();
    let toastId;
    try {
      const res = await updateOrder({ orderStatus, id }).unwrap();
      if (res.statusCode == 200) {
        toastId = toast.success("Order updated!");
      } else {
        toast.success(res.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
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
                  data.data.map((order, index) => (
                    <div
                      className={`order-info-row bottom-border ${
                        order._id == orderDetails._id ? "active-row" : ""
                      }`}
                      key={index}
                      onClick={() => setOrderDetailsInfo(order)}
                    >
                      <div className={`order-info `}>
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
                        <p>
                          Ordered by{" "}
                          <span className="ordered-by">
                            {typeof order.user != "string"
                              ? order.user.name
                              : ""}
                          </span>
                        </p>
                      </div>
                      <span
                        className="icon"
                        onClick={() => deleteOrderFunc(order._id)}
                      >
                        <DeleteOutlined style={{ color: "#9f0000" }} />
                      </span>
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
                      {!edit && (
                        <span className="value status">
                          {orderDetails.status}
                        </span>
                      )}
                      {edit && (
                        <Select
                          showSearch
                          onChange={changeStatus}
                          style={{ width: 150 }}
                          placeholder="Search to Select"
                          options={[
                            {
                              value: "Pending",
                              label: "Pending",
                            },
                            {
                              value: "Paid",
                              label: "Paid",
                            },
                            {
                              value: "Shipped",
                              label: "Shipped",
                            },
                            {
                              value: "Completed",
                              label: "Completed",
                            },
                            {
                              value: "Cancelled",
                              label: "Cancelled",
                            },
                          ]}
                        />
                      )}
                    </h3>
                    <h3>
                      <span className="heading">Total:</span>
                      <span className="value">
                        BDT {orderDetails.totalPrice}
                      </span>
                    </h3>
                    {!edit && (
                      <h3 className="edit-btn" onClick={() => toggleEdit()}>
                        <EditOutlined />
                      </h3>
                    )}
                    {edit && (
                      <h3
                        className="edit-btn"
                        onClick={() => submitOrder(orderDetails._id as string)}
                      >
                        <CheckOutlined />
                      </h3>
                    )}
                  </div>
                  {orderDetails.products?.map((order, index) => (
                    <div className="order-product-detail" key={index}>
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
                                  BDT {order.price * order.quantity}
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
