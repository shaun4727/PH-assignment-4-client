import { Button, Card, Form, FormProps, Input } from "antd";
import React, { useState } from "react";
import "../assets/css/loginPage.css";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../redux/features/auth/authApi";

import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/auth/authSlice";
import { TUser } from "../types";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hook";
import { toast } from "sonner";

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
};
const SignUpPage: React.FC = () => {
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      let toastId: string | number = 0;
      toastId = toast.loading("...Loading", { id: toastId });
      if (values.password != values.confirmPassword) {
        setPasswordConfirm("Password and Confirm Password does not match!");
        return;
      }
      setPasswordConfirm("");
      const userInfo = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: "user",
      };
      const res = await register(userInfo);

      if (res.data.statusCode == 201) {
        toastId = toast.success(res.data.message, { id: toastId });
        const userData = {
          email: values.email,
          password: values.password,
        };
        const response = await login(userData).unwrap();
        const user = verifyToken(response.data.token) as TUser;
        dispatch(setUser({ user: user, token: response.data.token }));
        navigate(`/dashboard`);
      } else {
        toast.error(res.data.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-page">
      <Card className="login-card">
        <h1>Sign up Page</h1>
        <Form
          className="login-form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your name!" },
              { min: 2, message: "Name must be at least 2 characters long!" },
            ]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter your confirm password" />
          </Form.Item>
          <Form.Item label={null}>
            <Button className="login-submit" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <h5 style={{ color: "red", textAlign: "center" }}>{passwordConfirm}</h5>
        <h4>
          Already have an account? Please click{" "}
          <NavLink to={`/login`}>Login</NavLink>
        </h4>
      </Card>
    </div>
  );
};

export default SignUpPage;
