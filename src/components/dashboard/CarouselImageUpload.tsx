import {
  Button,
  Col,
  Form,
  FormProps,
  Row,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import React, { useState } from "react";
import "../../assets/css/UpdatePassword.css";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload";
import type { UploadRequestOption as RcCustomRequestOptions } from "rc-upload/lib/interface";
import { useUploadCarouselImagesMutation } from "../../redux/features/carousel/carousel.api";
import { toast } from "sonner";

// import { useUpdatePsswordMutation } from "../../redux/features/auth/authApi";
// import { logout } from "../../redux/features/auth/authSlice";
// import { useAppDispatch } from "../../redux/hook";

type imageChild = {
  file: Record<string, unknown>;
  fileList: RcFile[];
};
type UploadImage = {
  images: imageChild;
};

const CarouselImageCom: React.FC = () => {
  const [form] = Form.useForm<Partial<UploadImage>>();
  //   const dispatch = useAppDispatch();

  const [uploadCarouselImages] = useUploadCarouselImagesMutation();
  const [fileList, setFileList] = useState<UploadFile[]>();

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
  const onFinish: FormProps<Partial<UploadImage>>["onFinish"] = async () => {
    try {
      // const fileLists: RcFile[] = values.images?.fileList || [];
      const formData = new FormData();
      const toastId = toast.loading("...uploading images");
      // // Append multiple files
      fileList?.forEach((file) => {
        if (file.originFileObj) {
          formData.append("file", file.originFileObj);
        }
      });

      const res = await uploadCarouselImages(formData);
      if (res.data.statusCode == 200) {
        setFileList([]);
        toast.success(res.data.message, { id: toastId });
      } else {
        toast.error(res.data.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed: FormProps<Partial<UploadImage>>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const fileUpload = async (options: RcCustomRequestOptions) => {
    const { onSuccess } = options;

    try {
      if (onSuccess) {
        onSuccess("ok");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const props = {
    customRequest: fileUpload,
    onChange: handleChange,
    multiple: true,
  };

  return (
    <>
      <Form
        className="root-form-upload"
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item<UploadImage>
              name="images"
              label="Upload Images"
              rules={[{ required: true, message: "Please upload images" }]}
            >
              <Upload {...props} fileList={fileList}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label={null}>
              <Button className="login-submit" htmlType="submit">
                Upload Images
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CarouselImageCom;
