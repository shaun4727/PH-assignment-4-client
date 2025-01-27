import { Button, Card, Col, Row } from "antd";
import productImg from "../assets/images/tab-card/book.png";
import "../assets/css/productDetail.css";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import cardImg from "../assets/images/tab-card/book.png";

const ProductDetail: React.FC = () => {
  return (
    <div className="home-page">
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div className="img-container">
            <img src={productImg} className="product-img" />
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div className="product-details">
            <h2 className="book-name">Product Name</h2>
            <p>
              by <span className="writer-name">Mr. Amazing writer</span>
            </p>

            <div className="price-category">
              <h2 className="price">$199</h2>
              <span className="category">Category</span>
              <p>
                Stock: <span className="stock-qty">79</span>
              </p>
              <Button className="buy-now">
                <NavLink to="/product/view-detail/view-cart">
                  <ShoppingCartOutlined />
                  Add To Cart
                </NavLink>
              </Button>
            </div>

            <p className="product-description">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web
              sites still in their
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h1 className="similar-title">Similar Books</h1>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
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
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
            </p>
            <div className="buy-section">
              <Button className="buy-now">
                <NavLink to={`/product/view-detail`}>View Detail</NavLink>
              </Button>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
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
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
            </p>
            <div className="buy-section">
              <Button className="buy-now">
                <NavLink to={`/product/view-detail`}>View Detail</NavLink>
              </Button>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
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
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
            </p>
            <div className="buy-section">
              <Button className="buy-now">
                <NavLink to={`/product/view-detail`}>View Detail</NavLink>
              </Button>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
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
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
            </p>
            <div className="buy-section">
              <Button className="buy-now">
                <NavLink to={`/product/view-detail`}>View Detail</NavLink>
              </Button>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
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
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
            </p>
            <div className="buy-section">
              <Button className="buy-now">
                <NavLink to={`/product/view-detail`}>View Detail</NavLink>
              </Button>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
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
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
            </p>
            <div className="buy-section">
              <Button className="buy-now">
                <NavLink to={`/product/view-detail`}>View Detail</NavLink>
              </Button>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
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
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
            </p>
            <div className="buy-section">
              <Button className="buy-now">
                <NavLink to={`/product/view-detail`}>View Detail</NavLink>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
