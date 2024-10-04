import { useQuery } from "@apollo/client";
import { Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useUser } from "../context/UserAuthContext";
import { GET_EVENT, GET_EVENT_CATEGORIES } from "../utils/queries";

const Navbar = () => {
  const { loading, error, data } = useQuery(GET_EVENT);
  // const [user, setUser] = React.useState(false);
  const router = useRouter();

  const { user, setUser, userData, setEventCategory, eventCategory } =
    useUser();
  const { data: eventCategories } = useQuery(GET_EVENT_CATEGORIES);

  const EventCategories = eventCategories?.getEventCategories;

  return (
    <div className=" sticky top-0 z-20">
      {/* <div className="pt-4 bg-[#333537]">
        <div className="flex space-x-5 justify-end pr-[6%]">
          <a
            href="https://www.facebook.com/profile.php?id=100088409724869"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsFacebook className="text-blue-500 text-xl" />
          </a>
          <a
            href="https://instagram.com/showsguru?igshid=ZmRlMzRkMDU="
            target={"_blank"}
            rel="noreferrer"
          >
            <BsInstagram className="text-[#bc2a8d] text-xl" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=+91 81056 01098&text=hii"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsWhatsapp className="text-green-500 text-xl" />
          </a>
        </div>
      </div> */}
      <div className="w-full bg-white flex justify-center pb-5 pt-2 ">
        <div className="xl:max-w-[90%] xl:px-0 px-4 w-full flex sm:flex-row flex-col justify-between sm:items-center">
          <div className="sm:block flex justify-between items-center">
            <Link href="/">
              <span className="flex items-center sm:pb-0 pb-2">
                {/* <Image
                  src="/images/logo.png"
                  width={700}
                  height={700}
                  quality={100}
                  alt="Showguru"
                  className="xl:w-60 w-52"
                /> */}
                <h2 className="text-3xl text-primary font-serif">
                  Wedding Planners
                </h2>
              </span>
            </Link>
            <div className="sm:hidden flex">
              {user === false ? (
                <Link href="/register">
                  <span className="flex  bg-[#ef0454] xl:px-16 px-10 py-2 xl:h-12 h-10 text-black font-semibold rounded-lg items-center">
                    Register
                  </span>
                </Link>
              ) : (
                <div className="sm:hidden flex xl:space-x-6 space-x-4 items-center">
                  <Select
                    className="w-36 text-black text-base"
                    defaultValue={"user"}
                    onSelect={(value) => {
                      if (value === "logout") {
                        localStorage.removeItem("token");
                        localStorage.removeItem("UserData");
                        setUser(false);
                        router.push("/");
                      }
                      if (value === "profile") {
                        router.push("/profile");
                      }
                    }}
                  >
                    <Select.Option value="user" className="text-black">
                      {userData?.name}
                    </Select.Option>

                    <Select.Option value="profile" className="text-black">
                      Profile
                    </Select.Option>
                    <Select.Option value="logout" className="text-red-600">
                      Logout
                    </Select.Option>
                  </Select>
                </div>
              )}
            </div>
          </div>
          {/* <div className="bg-[#434649] px-4 h-12 rounded-lg sm:w-[25%] w-full flex justify-center items-center">
            <BiSearch className="text-gray-400 text-xl" />
            <Select
              style={{
                backgroundColor: "#434649",
              }}
              className="w-full bg-transparent placeholder:text-black"
              showSearch
              placeholder="Search"
              optionFilterProp="children"
              onSelect={(value) => {
                router.push(`/event?id=${value}`);
              }}
            >
              {data?.getEvents.map((event) => (
                <Select.Option
                  key={event._id}
                  value={event?._id}
                  className="text-black"
                >
                  {event?.event_name}
                </Select.Option>
              ))}
            </Select>
          </div> */}

          <div className="flex sm:flex-row flex-col ">
            <div className=" sm:py-0 py-2 flex items-center text-black">
              <Link href="/#banner">
                <button
                  onClick={() => {
                    setEventCategory("all");
                  }}
                  className=" px-2 py-1 rounded-lg text-base  h-8"
                >
                  Home
                </button>
              </Link>
              <Link href="/aboutus">
                <button className=" px-2 py-1 w-24 rounded-lg text-base  h-8">
                  About Us
                </button>
              </Link>
              {/* <Link href="/#ongoing" className="sm:block hidden">
                <button className=" px-2 py-1 rounded-lg text-base  h-8">
                  Ongoing Events
                </button>
              </Link> */}
              <Link href="/#categories" className="sm:block hidden">
                <button className=" px-2 py-1 rounded-lg text-base  h-8">
                  Categories
                </button>
              </Link>
              {/* <select
                onChange={(e) => {
                  console.log(e.target.value);
                  setEventCategory(e.target.value);
                  router.push("/#ongoing");
                }}
                className="bg-transparent sm:w-20  text-base border-0"
                placeholder="Categories"
                defaultValue={eventCategory}
                // value={eventCategory}
              >
                <option value="all" className="text-black font-medium">
                  Category
                </option>
                <option value="all" className="text-black font-medium">
                  All
                </option>

                {EventCategories?.map((category, index) => {
                  return (
                    <option
                      key={index}
                      value={category.name}
                      className="text-black font-medium"
                    >
                      {category?.name}
                    </option>
                  );
                })}
              </select> */}
              <Link href="/#artist">
                <button className=" px-2 py-1 rounded-lg text-base  h-8">
                  Artists{" "}
                </button>
              </Link>
              <div className="sm:hidden flex">
                <Link href="/login">
                  <button className="text-black px-2 py-1 rounded-lg text-base  h-8">
                    Login
                  </button>
                </Link>
              </div>
            </div>

            <div className="sm:overflow-auto overflow-scroll sm:pt-0 pt-3 sm:block flex justify-center ">
              {user === false ? (
                <div className="sm:flex hidden xl:space-x-6 space-x-3 items-center ml-3">
                  <Link href="/login">
                    <span className="text-black  text-base  rounded-lg  h-8 flex items-center">
                      Login
                    </span>
                  </Link>

                  <Link href="/register">
                    <span className="sm:flex hidden bg-[#ef0454] xl:px-14 px-10 py-2  h-10 text-white font-semibold rounded-lg items-center mr-2">
                      Register
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="sm:flex hidden xl:space-x-6 space-x-4 items-center">
                  <Select
                    className="w-36 text-black"
                    defaultValue={"user"}
                    onSelect={(value) => {
                      if (value === "logout") {
                        localStorage.removeItem("token");
                        localStorage.removeItem("UserData");
                        setUser(false);
                        router.push("/");
                      }
                      if (value === "profile") {
                        router.push("/profile");
                      }
                    }}
                  >
                    <Select.Option value="user" className="text-black">
                      {userData?.name}
                    </Select.Option>

                    <Select.Option value="profile" className="text-black">
                      Bookings
                    </Select.Option>
                    <Select.Option value="logout" className="text-red-600">
                      Logout
                    </Select.Option>
                  </Select>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
