import { Button, Card, Col, Form, FormProps, Input, Row } from "antd";
import "../assets/css/checkout.css";
import { useCreateOrderMutation } from "../redux/features/order/order.api";

import { useAppDispatch, useAppSelector } from "../redux/hook";
import { emptyCart } from "../redux/features/products/productSlice";
import { TUser } from "../types";
type FieldType = {
  customer_city: string;
  customer_phone: number;
  customer_address: string;
};
const CheckoutPage: React.FC = () => {
  const checkoutData = useAppSelector((state) => state.cart.checkoutSummary);
  const cartItems = useAppSelector((state) => state.cart.books);
  const user = useAppSelector((state) => state.auth.user) as TUser;
  const dispatch = useAppDispatch();

  const [createOrder] = useCreateOrderMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const products = cartItems.map((item) => ({
      product: item._id,
      quantity: item.qty || 1,
      price: Number(item.price),
      stock: Number(item.quantity),
    }));
    const obj = {
      products: products,
      user: user.userId,
      totalPrice: Number(checkoutData.total),

      objectTwo: {
        customer_email: user.userEmail,
        customer_name: user.name,
        customer_address: values.customer_address,
        customer_phone: values.customer_phone,
        customer_city: values.customer_city,
      },
    };

    try {
      const res = await createOrder(obj);
      console.log(res);
      if (res.data.statusCode == 201) {
        dispatch(emptyCart());
        window.location.href = res?.data?.data;
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="checkout-page">
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div className="checkout-container">
            <h4 className="title">Shipping Address</h4>
            <Form
              className="form-body-checkout"
              name="makeOrder"
              onFinish={onFinish}
              onSubmitCapture={(e) => e.preventDefault()}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                name="customer_address"
                rules={[
                  { required: true, message: "Please enter your address!" },
                ]}
              >
                <Input placeholder="Address" autoComplete="new-address" />
              </Form.Item>
              <Form.Item<FieldType>
                name="customer_phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input placeholder="Phone Number" autoComplete="new-address" />
              </Form.Item>
              <Form.Item<FieldType>
                name="customer_city"
                rules={[{ required: true, message: "Please enter your city!" }]}
              >
                <Input placeholder="City" autoComplete="new-address" />
              </Form.Item>
              <Form.Item label={null}>
                <Button
                  className="login-submit make-order"
                  htmlType="submit"
                  style={{ width: "40%", padding: "20px" }}
                >
                  Place Order
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
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
                <h3 className="title bottom-border">Checkout Summary</h3>
                <div className="subTotal bottom-border">
                  <span>Subtotal</span>
                  <span>${checkoutData?.subTotal}</span>
                </div>
                <div className="subTotal bottom-border">
                  <span>Vat</span>
                  <span>${checkoutData?.vat}</span>
                </div>
                <div className="subTotal ">
                  <span className="total">Total</span>
                  <span className="total">${checkoutData?.total}</span>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
