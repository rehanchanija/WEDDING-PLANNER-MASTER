import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { useUser } from "../context/UserAuthContext";
import { CREATE_USER, USER_LOGIN } from "../utils/mutations";

const Register = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { setUser, setToken, setUserData } = useUser();

  const [addUser, { data: UserData, loading: Userloading, error: Usererror }] =
    useMutation(CREATE_USER, {
      onError: (err) => {
        console.log(err);
        toast.error(err.message);
      },
      onCompleted: (data) => {
        toast.success("User Added Successfully");
        console.log(data);
      },
    });
  const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN, {
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
    onCompleted: (data) => {
      console.log(data);
      toast;
    },
  });
  console.log(UserData, Userloading, Usererror);

  const onFinish = (values) => {
    addUser({
      variables: {
        name: values.name,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
        type: "User",
      },
    });

    if (UserData) {
      userLogin({
        variables: {
          email: values?.email,
          password: values?.password,
        },
      });
    }
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
    // form.resetFields();
  };

  return (
    <div>
      <div className="mx-auto flex flex-col items-center  sm:max-w-[80%] max-w-[95%] w-full py-16">
        <h1 className="text-black font-medium text-4xl py-2 text-center mb-6">
          Register here
        </h1>
        <div className="bg-[#333537] w-full max-w-lg sm:px-20 px-5 py-6 rounded-xl">
          <Form
            name="basic"
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            form={form}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Your Name"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder="Your Name"
                className="w-full h-10 px-4 border-[#727579] placeholder:text-[#727579] rounded-lg bg-[#333537]"
              />
            </Form.Item>
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
            <Form.Item
              label="Mobile Number"
              name="mobile"
              rules={[
                { required: true, message: "Please input your Mobile Number!" },
                //  min 10 digit number
                {
                  pattern: new RegExp(/^[0-9]{10}$/),
                  message: "Please enter a valid mobile number",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Mobile Number"
                className="w-full h-10 px-4 border-[#727579] placeholder:text-[#727579] rounded-lg bg-[#333537]"
              />
            </Form.Item>
            <Form.Item>
              <Button
                loading={Userloading}
                htmlType="submit"
                className="bg-primary w-full h-14 rounded-lg border-0 text-black text-lg font-medium mt-4"
              >
                Register
              </Button>
            </Form.Item>
          </Form>

          <p className="text-sm text-gray-50 font-light text-center">
            Already have an account?
            <Link href="/login">
              <span className="text-primary"> Login </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
