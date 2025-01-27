import "../assets/css/AllProduct/all-product.css";
import "../assets/css/tabCard.css";
import { Col, Row, Input, Card, Button, Pagination } from "antd";
const { Search } = Input;
import type { GetProps } from "antd";
import cardImg from "../assets/images/tab-card/book.png";
import { NavLink } from "react-router-dom";

function AllProducts() {
  type SearchProps = GetProps<typeof Input.Search>;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <>
      <div className="all-product-page">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>
            <div className="product-header">
              <h2 className="all-product-title">All Products</h2>
              <Search
                className="search-field"
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              className="card-item"
              hoverable
              cover={
                <img alt="example" src={cardImg} style={{ height: 140 }} />
              }
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
              cover={
                <img alt="example" src={cardImg} style={{ height: 140 }} />
              }
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
              cover={
                <img alt="example" src={cardImg} style={{ height: 140 }} />
              }
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
              cover={
                <img alt="example" src={cardImg} style={{ height: 140 }} />
              }
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
              cover={
                <img alt="example" src={cardImg} style={{ height: 140 }} />
              }
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
              cover={
                <img alt="example" src={cardImg} style={{ height: 140 }} />
              }
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
          <Col className="gutter-row" span={24}>
            <div className="pagination-column">
              <Pagination
                total={85}
                showTotal={(total) => `Total ${total} items`}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AllProducts;
