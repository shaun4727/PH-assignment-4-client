import { Button, Col, Row } from "antd";
import "../assets/css/productDetail.css";
import { useLocation } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import cardImg from "../assets/images/tab-card/book.png";
import { useAppDispatch } from "../redux/hook";
import { setCart } from "../redux/features/products/productSlice";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const { image, title, author, price, category, quantity, description } =
    location.state || {};

  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(setCart({ ...location.state, qty: 1 }));
  };
  return (
    <div className="home-page">
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div className="img-container">
            <img src={image} className="product-img" />
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div className="product-details">
            <h2 className="book-name">{title}</h2>
            <p>
              by <span className="writer-name">{author}</span>
            </p>

            <div className="price-category">
              <h2 className="price">BDT {price}</h2>
              <span className="category">{category}</span>
              <p>
                Stock: <span className="stock-qty">{quantity}</span>
              </p>
              <Button className="buy-now" onClick={addToCart}>
                <ShoppingCartOutlined />
                Add To Cart
              </Button>
            </div>

            <p className="product-description">{description}</p>
          </div>
        </Col>
      </Row>
      {/* <Row>
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
              <h1 className="price">BDT 199</h1>
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
      </Row> */}
    </div>
  );
};

export default ProductDetail;
