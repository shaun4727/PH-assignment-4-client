import { Button, Card, Form, FormProps, Input } from "antd";
import React, { useEffect } from "react";
import "../assets/css/loginPage.css";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { NavLink, useNavigate } from "react-router-dom";
import { TUser } from "../types";
import { toast } from "sonner";

type FieldType = {
  email?: string;
  password?: string;
};
const LoginPage: React.FC = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      navigate(`/dashboard`);
    }
  }, [token, navigate]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    let toastId: string | number = "login";
    try {
      if (toastId == "login") {
        toastId = toast.loading("...Loading", { id: toastId });
      }
      const userInfo = {
        email: values.email,
        password: values.password,
      };
      const res = await login(userInfo).unwrap();

      toast.success(res.data.message, { id: toastId });
      const user = verifyToken(res.data.token) as TUser;
      dispatch(setUser({ user: user, token: res.data.token }));
      navigate(`/dashboard`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {

      toast.error(err?.data?.message, { id: toastId });
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
        <h1>Login Page</h1>
        <Form
          className="login-form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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

          <Form.Item label={null}>
            <Button className="login-submit" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <h4>
          Don't have account? Please{" "}
          <NavLink to={`/register`}>Register</NavLink>
        </h4>
      </Card>
    </div>
  );
};

export default LoginPage;
