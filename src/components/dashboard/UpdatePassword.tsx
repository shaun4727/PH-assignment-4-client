import { Button, Col, Form, FormProps, Input, Row } from "antd";
import React from "react";
import "../../assets/css/UpdatePassword.css";
import { UpdatePassword } from "../../types";
import { useUpdatePsswordMutation } from "../../redux/features/auth/authApi";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hook";
import { toast } from "sonner";

const UpdatePasswordCom: React.FC = () => {
  const [form] = Form.useForm<Partial<UpdatePassword>>();
  const dispatch = useAppDispatch();

  const [updatePssword] = useUpdatePsswordMutation();

  const onFinish: FormProps<Partial<UpdatePassword>>["onFinish"] = async (
    values
  ) => {
    try {
      let toastId: string | number = 0;
      toastId = toast.loading("...loading", { id: toastId });
      const obj = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      const res = await updatePssword(obj);
      if (res.data.statusCode == 200) {
        toastId = toast.success(res.data.message, { id: toastId });
        form.resetFields();
        dispatch(logout());
      } else {
        toast.error(res.data.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed: FormProps<Partial<UpdatePassword>>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        className="root-form"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item<UpdatePassword>
              name="oldPassword"
              label="Old Password"
              rules={[{ required: true, message: "Please enter old password" }]}
            >
              <Input.Password placeholder="Please enter product name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item<UpdatePassword>
              name="newPassword"
              label="New Password"
              rules={[{ required: true, message: "Please enter new password" }]}
            >
              <Input.Password placeholder="Please enter new password" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label={null}>
              <Button className="login-submit" htmlType="submit">
                Change Password
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default UpdatePasswordCom;
