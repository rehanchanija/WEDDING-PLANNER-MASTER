import { useMutation } from "@apollo/client";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { UPDATE_USER } from "../utils/mutations";
const ResetPassword = () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { query } = useRouter();
  const { token } = query;
  const router = useRouter();
  const userId = jwt.decode(token);
  console.log(userId);

  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER, {
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
    onCompleted: (data) => {
      toast.success("Password Changed Successfully");
      router.push("/login");
    },
  });

  console.log(data, loading, error);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      toast.error("Password does not match");
      return;
    }

    updateUser({
      variables: {
        user_id: userId.userId,
        password: password,
      },
    });

    console.log(password);
  };

  return (
    <div>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto">
          <div className="flex space-x-2 items-center cursor-pointer pb-6">
            <h1 className="text-black  xl:text-2xl sm:text-xl font-extrabold">
              Showsguru.com
            </h1>
          </div>
          <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md  sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Change Password
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300   "
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="font-light text-gray-500 flex space-x-1"
                  >
                    <p>I accept the</p>
                    <Link href="/terms">
                      <p className="font-medium text-primary-600 hover:underline">
                        Terms and Conditions
                      </p>
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
