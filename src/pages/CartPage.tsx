import { Button, Card, Col, Input, Row } from "antd";
import productImg from "../assets/images/tab-card/book.png";
import "../assets/css/cart.css";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { TBook } from "../types";
import { setCheckoutSummary } from "../redux/features/checkout/checkoutSlice";
import {
  incrementProduct,
  decrementProduct,
  deleteCartItem,
} from "../redux/features/products/productSlice";
import { useState } from "react";

const CartView: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.books);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  const increment = (item: TBook) => {
    if ((item.qty as number) == item.quantity) {
      setError("Quantity reached to its Stock Limit");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }
    dispatch(incrementProduct(item._id));
  };
  const decrement = (id: string) => {
    dispatch(decrementProduct(id));
  };
  // deleteCartItem
  const deleteBook = (id: string) => {
    dispatch(deleteCartItem(id));
  };
  const getTotal = (item: TBook) => {
    return (Number(item?.qty) * Number(item?.price))?.toFixed(2);
  };
  const subTotal = () => {
    const subTotalValue = cartItems
      ?.reduce((acc, cur) => acc + Number(getTotal(cur)), 0)
      ?.toFixed(2);

    return subTotalValue;
  };
  const getVat = () => {
    const vat = (Number(subTotal()) * 0.15).toFixed(2);

    return vat;
  };
  const getFullTotal = () => {
    const fullTotal = (Number(getVat()) + Number(subTotal())).toFixed(2);

    return fullTotal;
  };
  const setCheckoutData = () => {
    dispatch(
      setCheckoutSummary({
        subTotal: subTotal(),
        vat: getVat(),
        total: getFullTotal(),
      })
    );
  };
  return (
    <div className="cart-page">
      {cartItems?.map((item, index) => (
        <Row gutter={[16, 16]} key={index}>
          <Col className="gutter-row" span={24}>
            <div
              className="cart-body"
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   gap: "10px",
              //   height: "100%",
              //   justifyContent: "center",
              // }}
            >
              <div className="cart-container">
                <span className="icon" onClick={() => deleteBook(item._id)}>
                  <DeleteOutlined style={{ color: "#9f0000" }} />
                </span>
                <img src={productImg} className="cart-img" />
                <div className="product-details">
                  <h2 className="book-name">{item?.title}</h2>
                  <p>
                    by <span className="writer-name">{item?.author}</span>
                  </p>
                </div>
              </div>
              <div className="cart-quantity for-larger-device">
                {" "}
                <Button
                  className="increase-decrease"
                  icon={<MinusOutlined />}
                  disabled={item.qty == 1}
                  onClick={() => decrement(item?._id)}
                />
                <Input
                  value={item.qty}
                  readOnly
                  style={{
                    width: "50px",
                    textAlign: "center",
                  }}
                />
                <Button
                  className="increase-decrease"
                  icon={<PlusOutlined />}
                  onClick={() => increment(item)}
                />
              </div>
              <div className="price-container for-larger-device">
                <h2 className="price">${getTotal(item)}</h2>
              </div>
              <div className="for-smaller-device">
                <div className="cart-quantity">
                  {" "}
                  <Button
                    className="increase-decrease"
                    icon={<MinusOutlined />}
                    disabled={item.qty == 1}
                    onClick={() => decrement(item?._id)}
                  />
                  <Input
                    value={item.qty}
                    readOnly
                    style={{
                      width: "50px",
                      textAlign: "center",
                      height: "32px",
                    }}
                  />
                  <Button
                    className="increase-decrease"
                    icon={<PlusOutlined />}
                    onClick={() => increment(item)}
                  />
                </div>
                <div className="price-container">
                  <h2 className="price">${getTotal(item)}</h2>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
      <Row>
        <Col span={24}>
          <h4 style={{ color: "red" }}>{error}</h4>
        </Col>
        <Col className="gutter-row" span={24}>
          <div className="checkout-section">
            <Card
              hoverable
              style={{ width: 340, padding: "4px 20px 16px 20px" }}
            >
              <div className="checkout-summary">
                <h3 className="title bottom-border">Checkout Summary</h3>
                <div className="subTotal bottom-border">
                  <span>Subtotal</span>
                  <span>${subTotal()}</span>
                </div>
                <div className="subTotal bottom-border">
                  <span>Vat</span>
                  <span>${getVat()}</span>
                </div>
                <div className="subTotal ">
                  <span className="total">Total</span>
                  <span className="total">${getFullTotal()}</span>
                </div>
                <Button
                  className="buy-now checkout-btn"
                  onClick={setCheckoutData}
                >
                  <NavLink to="/product/view-detail/checkout">
                    Proceed to Checkout
                  </NavLink>
                </Button>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartView;
