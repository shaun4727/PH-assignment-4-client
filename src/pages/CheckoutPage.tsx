import { Affix, Card, Col, Flex, Form, Input, Row, Select } from "antd";
import "../assets/css/checkout.css";
import TextArea from "antd/es/input/TextArea";

const CheckoutPage: React.FC = () => {
  return (
    <div className="checkout-page">
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div className="checkout-container">
            <h4 className="title">Shipping Address</h4>
            <Form
              className="form-body-checkout"
              name="login"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item>
                <Flex justify="space-between" align="center" gap="10px">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Input placeholder="Username" />
                  </Form.Item>
                </Flex>
              </Form.Item>
              <Form.Item>
                <Flex justify="space-between" align="center" gap="10px">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Select
                      defaultValue="lucy"
                      style={{ width: "100%" }}
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Select
                      defaultValue="lucy"
                      style={{ width: "100%" }}
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Form.Item>
                </Flex>
                <Form.Item>
                  <TextArea
                    rows={4}
                    placeholder="maxLength is 6"
                    style={{ marginTop: "15px" }}
                  />
                </Form.Item>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <Affix offsetTop={10}>
            <div className="checkout-section ">
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
                </div>
              </Card>
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
