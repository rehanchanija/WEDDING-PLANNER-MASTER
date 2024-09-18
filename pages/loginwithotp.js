import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../context/UserAuthContext";
import { LOGIN_WITH_OTP } from "../utils/mutations";
const LoginWithOtp = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { setUser, setToken, setUserData } = useUser();

  const [LoginWithOtp, { data, loading, error }] = useMutation(LOGIN_WITH_OTP, {
    onError: (err) => {
      console.log(err);
      setMessage(err.message);
      toast.error("User not Registered, Please Register First");
      router.push("/register");
    },
    onCompleted: (data) => {
      toast.success("OTP send to your mobile number");
    },
  });

  console.log(data);
  const onFinish = (values) => {
    setMessage("");
    LoginWithOtp({
      variables: {
        mobile: values.mobile,
      },
    });
    if (data?.loginWithOtp !== null) {
      router.push(`/verifyotp?mobile=${values.mobile}`);
    }
    // setTimeout(() => {
    //   router.push(`/verifyotp?mobile=${values.mobile}`);
    // }, 2000);
  };
  return (
    <div className="min-h-[80vh]">
      <div className="mx-auto flex flex-col items-center  sm:max-w-[80%] max-w-[95%]  w-full py-16">
        <h1 className="text-white font-medium text-4xl py-2 text-center mb-6">
          Login With OTP
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
              label="Your Mobile Number"
              name="mobile"
              rules={[
                { required: true, message: "Please input your mobile number!" },
                {
                  pattern: new RegExp(/^[0-9]{10}$/),
                  message: "Please enter valid mobile number",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Your Mobile Number"
                className="w-full h-10 px-4 border-[#727579] placeholder:text-[#727579] rounded-lg bg-[#333537]"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-primary w-full h-14 rounded-lg border-0 text-white text-lg font-medium mt-4"
              >
                Send OTP
              </Button>
            </Form.Item>
          </Form>

          <p className="text-sm text-gray-50 font-light text-center">
            Dont have an account?
            <Link href="/register">
              <span className="text-primary"> Register </span>
            </Link>
          </p>
          <p className="text-sm text-gray-50 font-light text-center">
            Forgot Password?
            <Link href="/forgot">
              <span className="text-primary"> Click Here </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginWithOtp;
