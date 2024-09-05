import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../context/UserAuthContext";
import { RESEND_OTP, VERIFY_OTP } from "../utils/mutations";
const VerifyOtp = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { setUser, setToken, setUserData } = useUser();
  const [disabled, setDisabled] = useState(false);

  const { mobile } = router.query;
  console.log(mobile);

  const [verifyOtp, { data, loading, error }] = useMutation(VERIFY_OTP, {
    onError: (err) => {
      console.log(err);
      setMessage(err.message);
      toast.error(err.message);
    },
    onCompleted: (data) => {
      setUser(true);
      setToken(data.verifyOtp.token);
      setUserData(data.verifyOtp.user);
      localStorage.setItem("token", data.verifyOtp.token);
      localStorage.setItem("User Type", data.verifyOtp.user.type);
      localStorage.setItem("UserData", JSON.stringify(data.verifyOtp.user));
      toast.success("Login Successfully");
      router.push("/");
    },
  });

  const [resendOTP, { data: data1, loading: loading1, error: error1 }] =
    useMutation(RESEND_OTP, {
      onError: (err) => {
        console.log(err);
        setMessage(err.message);
        toast.error(err.message);
      },
      onCompleted: (data) => {
        toast.success("OTP sent successfully");
      },
    });

  console.log(data);
  const onFinish = (values) => {
    setMessage("");
    verifyOtp({
      variables: {
        mobile: mobile,
        otp: values.otp,
      },
    });
  };

  const resendOtp = () => {
    setMessage("");
    setDisabled(true);
    resendOTP({
      variables: {
        phone: mobile,
      },
    });
  };
  return (
    <div className="min-h-[80vh]">
      <div className="mx-auto flex flex-col items-center  sm:max-w-[80%] max-w-[95%]  w-full py-16">
        <h1 className="text-white font-medium text-4xl py-2 text-center mb-6">
          Verify OTP
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
              label="Enter OTP"
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please input otp sent to your mobile number!",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Your OTP"
                className="w-full h-10 px-4 border-[#727579] placeholder:text-[#727579] rounded-lg bg-[#333537]"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-primary w-full h-14 rounded-lg border-0 text-white text-lg font-medium mt-4"
              >
                Verify OTP
              </Button>
            </Form.Item>
          </Form>
          <button
            onClick={() => {
              resendOtp();
            }}
            disabled={disabled}
            className="text-primary font-light text-center w-full pb-2"
          >
            Resend OTP
          </button>
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

export default VerifyOtp;
