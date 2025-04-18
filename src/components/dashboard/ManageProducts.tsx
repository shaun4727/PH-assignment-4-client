import {
  Button,
  Col,
  Drawer,
  Form,
  FormProps,
  Input,
  Row,
  Select,
  Space,
  Table,
  TableProps,
  Tag,
  Upload,
  UploadProps,
} from "antd";
import React, { useState } from "react";
import { toast } from "sonner";
import { useGetAllProductProductPageQuery } from "../../redux/features/all-product/allProductManagement.api";
import { TBook, TUploadImagAndBook } from "../../types";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import type { UploadRequestOption as RcCustomRequestOptions } from "rc-upload/lib/interface";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/products/product.api";
import { UploadFile } from "antd/es/upload";

let dataTable;
const { Option } = Select;

const MangeProducts: React.FC = () => {
  const [form] = Form.useForm<Partial<TUploadImagAndBook>>();
  const [fileList, setFileList] = useState<UploadFile[]>();
  const [editData, setEditData] = useState<{ id: string; mode: boolean }>({
    id: "",
    mode: false,
  });

  const { data, isFetching } = useGetAllProductProductPageQuery([
    { name: "dashboard", value: "dashboard" },
  ]);

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleChange: UploadProps["onChange"] = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };

  dataTable = data?.data || [];
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const createNewProduct = () => {
    form.resetFields();
    setFileList([]);
    editData.id = "";
    showDrawer();
  };
  const onClose = () => {
    setOpen(false);
    setEditData((preValue) => {
      return {
        ...preValue,
        mode: false,
      };
    });
  };

  const editFormData = (data: Partial<TBook>) => {
    setEditData({ id: data._id || "", mode: true });
    form.setFieldsValue(data);
    setFileList([]);
    showDrawer();
  };
  const deleteBook = async (data: Partial<TBook>) => {
    try {
      let toastId;
      const res = await deleteProduct(data._id).unwrap();
      if (res.statusCode == 200) {
        toastId = toast.success(res.message);
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const columns: TableProps<Partial<TBook>>["columns"] = [
    {
      title: "Book",
      dataIndex: "book",
      key: "1",
      fixed: 'left',
      render: (_, { title, author }) => (
        <div>
          <h4 style={{ margin: 0, padding: 0 }}>{title}</h4>by{" "}
          <span style={{ fontWeight: 600, color: "#188f67" }}>{author}</span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "2",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "3",
      render: (_, { category }) => (
        <>
          {
            <Tag color={"#cb795f"} key={category}>
              {category}
            </Tag>
          }
        </>
      ),
    },
    {
      title: "Quantity",
      key: "4",
      dataIndex: "quantity",
    },
    {
      title: "Instock",
      key: "5",
      dataIndex: "inStock",
      render: (_, { inStock }) => <>{inStock ? "YES" : "NO"}</>,
    },
    {
      title: "Action",
      key: "6",
      render: (_, rowData) => (
        <Space size="middle">
          <Button
            color="default"
            variant="dashed"
            onClick={() => deleteBook(rowData)}
          >
            Delete
          </Button>
          <Button
            color="primary"
            variant="dashed"
            onClick={() => editFormData(rowData)}
          >
            Update
          </Button>
        </Space>
      ),
    },
  ];
  const onFinish: FormProps<Partial<TUploadImagAndBook>>["onFinish"] = async (
    values
  ) => {
    const text = editData.mode == true ? "Updating..." : "Creating...";
    const toastId = toast.loading(text, { id: 5 });
    try {
      // let fileName;

      // if (typeof values.image != "string") {
      //   fileName = values?.image?.file;
      //   delete values["image"];
      // } else {
      //   fileName = values.image;
      // }

      const formData = new FormData();

      fileList?.forEach((file) => {
        if (file.originFileObj instanceof Blob) {
          formData.append("file", file.originFileObj);
        }
      });

      const formValues = {
        ...values,
        price: Number(values.price),
        quantity: Number(values.quantity),
        inStock: true,
      };
      formData.append("data", JSON.stringify(formValues));
      formData.append("id", editData.id);

      if (editData.mode == true) {
        const res = await updateProduct(formData).unwrap();
        console.log("res", res);
        if (res.statusCode == 200) {
          toast.success(res.message, { id: toastId });
        } else {
          toast.error(res.message, { id: toastId });
        }
      } else {
        const res = await createProduct(formData).unwrap();

        if (res.statusCode == 201) {
          toast.success(res.message, { id: toastId });
        } else {
          toast.error(res.message, { id: toastId });
        }
      }
      onClose();
    } catch (err) {
      toast.error("Failed Operation", { id: toastId });
      console.log(err);
    }
  };

  const onFinishFailed: FormProps<Partial<TBook>>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const fileUpload = async (options: RcCustomRequestOptions) => {
    const { onSuccess } = options;
    if (fileList && fileList?.length > 1) {
      fileList.splice(0, 1);
    }
    try {
      if (onSuccess) {
        onSuccess("ok");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const props = {
    name: "file",
    customRequest: fileUpload,
    onChange: handleChange,
  };
  return (
    <>
      <Button
        className="buy-now"
        onClick={createNewProduct}
        icon={<PlusOutlined />}
        style={{ marginBottom: "15px" }}
      >
        Create New
      </Button>
      <Table<Partial<TBook>>
        className="product-table"
        columns={columns}
        loading={isFetching}
        dataSource={dataTable as readonly TBook[]}
        rowKey="_id"
        scroll={{ x: 'max-content' }}
      />

      <Drawer
        title={`${editData.mode ? "Update" : "Create"} new product`}
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item<TBook>
                name="title"
                label="Title"
                rules={[
                  { required: true, message: "Please enter product name" },
                ]}
              >
                <Input placeholder="Please enter product name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<TBook>
                name="author"
                label="Author"
                rules={[
                  { required: true, message: "Please enter author name" },
                ]}
              >
                <Input placeholder="Please enter author name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item<TBook>
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please enter price" }]}
              >
                <Input placeholder="Please enter price" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<TBook>
                name="category"
                label="Category"
                rules={[
                  { required: true, message: "Please choose the category" },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="Fiction">Fiction</Option>
                  <Option value="Science">Science</Option>
                  <Option value="Technology">Technology</Option>
                  <Option value="Education">Education</Option>
                  <Option value="Adventure">Adventure</Option>
                  <Option value="Mystery">Mystery</Option>
                  <Option value="Self-Help">Self-Help</Option>
                  <Option value="Fantasy">Fantasy</Option>
                  <Option value="History">History</Option>
                  <Option value="Biography">Biography</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item<TBook>
                name="quantity"
                label="Quantity"
                rules={[{ required: true, message: "Please enter quantity" }]}
              >
                <Input placeholder="Please enter quantity" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<TBook> name="image" label="Image">
                <Upload {...props} fileList={fileList}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item<TBook>
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
              <Form.Item label={null}>
                {!editData.mode && (
                  <Button className="login-submit" htmlType="submit">
                    Create
                  </Button>
                )}
                {editData.mode && (
                  <Button className="login-submit" htmlType="submit">
                    Update
                  </Button>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default MangeProducts;
