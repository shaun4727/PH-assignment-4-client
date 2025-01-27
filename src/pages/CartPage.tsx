import { Button, Card, Col, Input, Row } from "antd";
import productImg from "../assets/images/tab-card/book.png";
import "../assets/css/cart.css";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const CartView: React.FC = () => {
  return (
    <div className="cart-page">
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div className="cart-container">
            <input type="checkbox" />
            <img src={productImg} className="cart-img" />
            <div className="product-details">
              <h2 className="book-name">Product Name</h2>
              <p>
                by <span className="writer-name">Mr. Amazing writer</span>
              </p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Button
              className="increase-decrease"
              icon={<MinusOutlined />}
              // Disable button if quantity is 1
            />
            <Input
              value={1}
              readOnly
              style={{
                width: "50px",
                textAlign: "center",
              }}
            />
            <Button className="increase-decrease" icon={<PlusOutlined />} />
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className="price-container">
            <h2 className="price">$199</h2>
          </div>
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
                  <span>$199</span>
                </div>
                <div className="subTotal bottom-border">
                  <span>Vat</span>
                  <span>$199</span>
                </div>
                <div className="subTotal ">
                  <span className="total">Total</span>
                  <span className="total">$199</span>
                </div>
                <Button className="buy-now checkout-btn">
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
