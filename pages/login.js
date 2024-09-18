import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../context/UserAuthContext";
import { USER_LOGIN } from "../utils/mutations";
const Login = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { setUser, setToken, setUserData } = useUser();

  const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN, {
    onError: (err) => {
      console.log(err);
      setMessage(err.message);
      toast.error(err.message);
    },
  });

  const onFinish = (values) => {
    setMessage("");
    userLogin({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
    if (loading) return <p>Loading...</p>;
    if (error) {
      toast.error(error.message);
      return <p>Error...</p>;
    }

    if (data) {
      setUser(true);
      setToken(data.userLogin.token);
      setUserData(data.userLogin.user);
      localStorage.setItem("token", data.userLogin.token);
      localStorage.setItem("User Type", data.userLogin.user.type);
      localStorage.setItem("UserData", JSON.stringify(data.userLogin.user));
      toast.success("Login Successfull");
      router.push("/");
    }
  };
  return (
    <div className="min-h-[80vh]">
      <div className="mx-auto flex flex-col items-center  sm:max-w-[80%] max-w-[95%]  w-full py-16">
        <h1 className="text-black font-medium text-4xl py-2 text-center mb-6">
          Login here
        </h1>
        <div className="bg-[#333537] w-full max-w-lg sm:px-20 px-5 py-10 rounded-xl">
          <p>
            {message ? (
              <p className="text-red-500 text-center">{message}</p>
            ) : null}
          </p>
          <Form
            name="Login"
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            form={form}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Your Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Your Email"
                className="w-full h-10 px-4 border-[#727579] placeholder:text-[#727579] rounded-lg bg-[#333537]"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                placeholder="Your Password"
                className="w-full h-10 px-4 border-[#727579] placeholder:text-[#727579] rounded-lg bg-[#333537]"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-primary w-full h-14 rounded-lg border-0 text-black text-lg font-medium mt-4"
              >
                Login
              </Button>
            </Form.Item>
          </Form>

          {/* <p className="text-sm text-gray-50 font-light text-center">
            Dont have an account?
            <Link href="/register">
              <span className="text-primary"> Register </span>
            </Link>
          </p> */}
          <div className="flex justify-between">
            <p className="text-sm text-gray-50 font-light text-center">
              <Link href="/loginwithotp">Login With OTP</Link>
              {/* <span className="text-primary"> Click Here </span> */}
            </p>
            <p className="text-sm text-gray-50 font-light text-center">
              <Link href="/forgot">Forgot Password</Link>
              {/* <span className="text-primary"> Click Here </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
