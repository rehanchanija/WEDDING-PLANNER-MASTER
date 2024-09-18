import { useQuery } from "@apollo/client";
import { Tabs } from "antd";
import React from "react";
import MyBookings from "../components/MyBookings";
import ProfileForm from "../components/ProfileForm";
import { useUser } from "../context/UserAuthContext";
import { GET_BOOKINGS_BY_PARAMS } from "../utils/queries";

const Profile = () => {
  const { user, setUser, userData } = useUser();

  const { data: bookingData } = useQuery(GET_BOOKINGS_BY_PARAMS, {
    variables: {
      user_id: userData?._id,
    },
  });

  const Bookings = bookingData?.getBookingByParams;
  console.log(Bookings);

  return (
    <div className="min-h-[80vh] b py-10 xl:max-w-[80%] sm:w-[95%] mx-auto my-10">
      <Tabs
        defaultActiveKey="1"
        // onChange={onChange}
        type="card"
        items={[
          {
            label: `Bookings`,
            key: "1",
            children: <MyBookings />,
          },
          {
            label: `My Profile`,
            key: "2",
            children: <ProfileForm />,
          },
        ]}
      />
    </div>
  );
};

export default Profile;
