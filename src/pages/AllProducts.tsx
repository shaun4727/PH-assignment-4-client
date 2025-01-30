import "../assets/css/AllProduct/all-product.css";
import "../assets/css/tabCard.css";
import {
  Col,
  Row,
  Input,
  Card,
  Button,
  Pagination,
  Affix,
  Slider,
  Form,
} from "antd";
const { Search } = Input;
import type { GetProps } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useGetAllProductProductPageQuery } from "../redux/features/all-product/allProductManagement.api";
import { TQueryParam, FilterQuery } from "../types";

function AllProducts() {
  type SearchProps = GetProps<typeof Input.Search>;
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([50, 400]);
  const [filterValue, setFilterValue] = useState<FilterQuery>({
    author: "",
    category: "",
    price: { $gte: priceRange[0], $lte: priceRange[1] },
  });
  const { data } = useGetAllProductProductPageQuery(params);

  const onSearch: SearchProps["onSearch"] = (value) => {
    const newParam = { name: "search", value };
    setParams((prevParams) => {
      const updatedParams = prevParams.some(
        (param) => param.name == newParam.name
      )
        ? prevParams.map((param) =>
            param.name == newParam.name ? newParam : param
          )
        : [...prevParams, newParam];

      return updatedParams;
    });
  };

  // const [inputValue, setInputValue] = useState(100);

  const onChangeRange = (newValue: number[]) => {
    setFilterValue((prevFilter) => ({
      ...prevFilter,
      price: {
        $gte: newValue[0],
        $lte: newValue[1],
      },
    }));
    setPriceRange(newValue);
    return newValue;
  };
  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue((prevFilter) => ({
      ...prevFilter,
      author: event.target.value,
    }));
  };
  const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue((prevFilter) => ({
      ...prevFilter,
      category: event.target.value,
    }));
  };
  const onPageChange = (page: number) => {
    const newParam = { name: "page", value: page };
    setParams((prevParams) => {
      const updatedParams = prevParams.some(
        (param) => param.name == newParam.name
      )
        ? prevParams.map((param) =>
            param.name == newParam.name ? newParam : param
          )
        : [...prevParams, newParam];

      return updatedParams;
    });
  };

  const onFilterQuery = () => {
    const newParam = {
      name: "filter",
      value: encodeURIComponent(JSON.stringify(filterValue)),
    };
    setParams((prevParams) => {
      const updatedParams = prevParams.some(
        (param) => param.name == newParam.name
      )
        ? prevParams.map((param) =>
            param.name == newParam.name ? newParam : param
          )
        : [...prevParams, newParam];

      return updatedParams;
    });
  };

  const [form] = Form.useForm();

  return (
    <>
      <div className="all-product-page">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            <Affix offsetTop={20}>
              <div className="filter-container">
                <Form form={form} layout="vertical">
                  <Form.Item label="Price">
                    <Row>
                      <Col span={12} className="gutter-row">
                        <Slider
                          range
                          min={20}
                          max={1000}
                          defaultValue={priceRange}
                          onChange={onChangeRange}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item label="Writer">
                    <Input
                      placeholder="Enter writer name"
                      onChange={onChangeWriter}
                    />
                  </Form.Item>
                  <Form.Item label="Category">
                    <Input
                      placeholder="Enter category name"
                      onChange={onChangeCategory}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="buy-now filter-btn"
                      onClick={onFilterQuery}
                    >
                      Filter
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Affix>
          </Col>
          <Col span={18}>
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
              {data?.data?.map((item, index) => (
                <Col className="gutter-row" span={8} key={index}>
                  <Card
                    className="card-item"
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src={item.image}
                        style={{ height: 140 }}
                      />
                    }
                  >
                    <h3>{item?.title}</h3>
                    <p>
                      by <span className="writer-name">{item?.author}</span>
                    </p>
                    <div className="price-category">
                      <h1 className="price">${item?.price}</h1>
                      <span className="category">{item?.category}</span>
                    </div>
                    <p className="description">{item?.description}</p>
                    <div className="buy-section">
                      <Button className="buy-now">
                        <NavLink to={`/product/view-detail`} state={item}>
                          View Detail
                        </NavLink>
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}

              <Col className="gutter-row" span={24}>
                <div className="pagination-column">
                  <Pagination
                    defaultCurrent={1}
                    total={data?.count}
                    onChange={onPageChange}
                    showSizeChanger={false}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AllProducts;
