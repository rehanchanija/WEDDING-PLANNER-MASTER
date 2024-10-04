import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import React from "react";
import { toast } from "react-toastify";
import { useUser } from "../context/UserAuthContext";
import { USER_DETAILS_UPDATE } from "../utils/mutations";
const ProfileForm = () => {
  const { user, setUser, userData } = useUser();
  console.log(userData);
  const [updateUserDetails, { loading, error }] = useMutation(
    USER_DETAILS_UPDATE,
    {
      onCompleted: (data) => {
        console.log(data);
        toast.success("Profile Updated Successfully");
      },
      onError: (error) => {
        console.log(error);
        toast.error("Error Updating Profile");
      },
    }
  );

  const onFinish = (values) => {
    console.log("Success:", values);

    updateUserDetails({
      variables: {
        id: userData._id,
        name: values.name,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
      },
    });
  };

  return (
    <div>
      <Form
        name="basic"
        initialValues={{
          name: userData?.name,
          email: userData?.email,
          mobile: userData?.mobile,
        }}
        requiredMark={false}
        layout="vertical"
        onFinish={onFinish}
        className="py-10 sm:px-20 px-5"
      >
        <div className="flex sm:flex-row flex-col  sm:space-x-32 mb-6">
          <Form.Item label="Username" name="name">
            <Input
              size="large"
              className="py-3 px-6 sm:w-72 w-full text-lg text-white placeholder:text-gray-500"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input
              size="large"
              className="py-3 px-6 sm:w-72 w-full text-lg text-white placeholder:text-gray-500"
              placeholder="Email"
            />
          </Form.Item>
        </div>
        <div className="flex sm:flex-row flex-col  sm:space-x-32">
          <Form.Item label="Mobile Number" name="mobile">
            <Input
              size="large"
              className="py-3 px-6 sm:w-72 w-full text-lg text-white placeholder:text-gray-500"
              placeholder=" Mobile Number"
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              size="large"
              className="py-3 px-6 sm:w-72 w-full text-lg text-white placeholder:text-gray-500"
              placeholder="Password"
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="sm:w-64 w-full text-lg font-semibold h-12 mt-20"
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
