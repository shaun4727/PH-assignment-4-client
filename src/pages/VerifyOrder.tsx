import { useSearchParams } from "react-router-dom";

import { Badge, Card, Col, Row, Space } from "antd";
import "../assets/css/verifyOrder.css";
import {
  AreaChartOutlined,
  MenuFoldOutlined,
  PicRightOutlined,
} from "@ant-design/icons";
import { useVerifyOrderQuery } from "../redux/features/order/order.api";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const VerifyOrder: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { data } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });
  const orderData: OrderData = data?.data?.[0];

  return (
    <div className="order-verify-page">
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <Card
            hoverable
            className="order-card"
            title={
              <Space align="center">
                <MenuFoldOutlined
                  style={{
                    fontSize: "20px",
                    color: "#1890ff",
                  }}
                />

                <h3 className="header-title">Order Details</h3>
              </Space>
            }
          >
            <h5>
              Order ID:{" "}
              <span className="title-value">{orderData?.order_id} </span>
            </h5>
            <h5>
              Amount:{" "}
              <span className="title-value">
                {orderData?.currency} {orderData?.amount?.toFixed(2)}{" "}
              </span>
            </h5>
            <h5>
              Status:{" "}
              <span className="title-value">
                <Badge
                  count={orderData?.bank_status}
                  showZero
                  color="#52c41a"
                />{" "}
              </span>
            </h5>
            <h5>
              Date:{" "}
              <span className="title-value">
                {new Date(orderData?.date_time)?.toLocaleString()}{" "}
              </span>
            </h5>
          </Card>
        </Col>
        <Col className="gutter-row" span={12}>
          <Card
            hoverable
            className="order-card"
            title={
              <Space align="center">
                <PicRightOutlined
                  style={{ fontSize: "20px", color: "#1890ff" }}
                />

                <h3 className="header-title">Payment Information</h3>
              </Space>
            }
          >
            <h5>
              Method: <span className="title-value">{orderData?.method}</span>
            </h5>
            <h5>
              Transaction ID:{" "}
              <span className="title-value"> {orderData?.bank_trx_id}</span>
            </h5>
            <h5>
              Invoice No:{" "}
              <span className="title-value">{orderData?.invoice_no} </span>
            </h5>
            <h5>
              SP Code:{" "}
              <span className="title-value">{orderData?.sp_code} </span>
            </h5>
            <h5>
              SP Message:{" "}
              <span className="title-value">{orderData?.sp_message} </span>
            </h5>
          </Card>
        </Col>

        <Col className="gutter-row" span={12}>
          <Card
            hoverable
            className="order-card"
            title={
              <Space align="center">
                <AreaChartOutlined
                  style={{ fontSize: "20px", color: "#1890ff" }}
                />

                <h3 className="header-title">Customer Information</h3>
              </Space>
            }
          >
            <h5>
              Name: <span className="title-value">{orderData?.name} </span>
            </h5>
            <h5>
              Email: <span className="title-value">{orderData?.email} </span>
            </h5>
            <h5>
              Phone: <span className="title-value">{orderData?.phone_no} </span>
            </h5>
            <h5>
              Address:{" "}
              <span className="title-value">{orderData?.address} </span>
            </h5>
            <h5>
              City: <span className="title-value">{orderData?.city} </span>
            </h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VerifyOrder;
