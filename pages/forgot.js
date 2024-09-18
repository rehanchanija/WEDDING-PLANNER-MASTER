import { useMutation } from "@apollo/client";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { FORGOT_PASSWORD } from "../utils/mutations";
const Forgot = () => {
  const [email, SetEmail] = React.useState("");

  const [forgotPassword, { data, loading, error }] = useMutation(
    FORGOT_PASSWORD,
    {
      onError: (err) => {
        console.log(err);
        toast.error(err.message);
      },
      onCompleted: (data) => {
        console.log(data);
        toast.success("Password Reset Link Sent");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    forgotPassword({
      variables: {
        email: email,
      },
    });
  };

  return (
    <div>
      <div className="container mx-auto  py-10">
        <div className="flex justify-center px-6 my-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex border rounded-lg">
            {/* Col */}
            <div className="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover rounded-lg">
              <Image
                width={500}
                height={500}
                src="/images/forgot.jpg"
                alt="Forgot Password"
                className="rounded-l-lg"
              />
            </div>
            {/* Col */}
            <div className="w-full lg:w-1/2 h-full   p-5 rounded-lg lg:rounded-l-none my-auto">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl text-white">
                  Forgot Your Password?
                </h3>
                <p className="mb-4 text-sm text-white">
                  We get it, stuff happens. Just enter your email address below
                  and we will send you a link to reset your password!
                </p>
              </div>
              <form
                className="px-12 pt-6 pb-8 mb-4  rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    required={true}
                    className="w-full px-3 py-2 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-gray-400"
                    id="email"
                    type="email"
                    onChange={(e) => SetEmail(e.target.value)}
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Submit
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link href="/signup">
                    <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Create an Account!
                    </p>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href="/login">
                    <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? Login!
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
