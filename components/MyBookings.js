import { useQuery } from "@apollo/client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useUser } from "../context/UserAuthContext";
import { GET_BOOKINGS_BY_PARAMS } from "../utils/queries";

const MyBookings = () => {
  const { user, setUser, userData } = useUser();

  const { data: bookingData } = useQuery(GET_BOOKINGS_BY_PARAMS, {
    variables: {
      user_id: userData?._id,
    },
  });

  const Bookings = bookingData?.getBookingByParams.filter(
    (booking) => booking?.booking_status === "Booked"
  );

  console.log(Bookings);
  return (
    <div className=" h-full  mx-auto py-10">
      {Bookings?.map((booking) => (
        <Link key={booking._id} href={`/ticket/?id=${booking._id}`}>
          <div className="border-b border-[#B2B5BB] w-full text-white sm:p-8 p-3 h-44 flex sm:px-16">
            <Image
              src={booking?.event_banner}
              alt="Picture of the author"
              width={100}
              height={100}
              className="rounded-lg border h-28 w-28"
            />
            <div className="flex flex-col sm:ml-20 ml-4">
              <h2 className="text-white text-lg">{booking?.event_name}</h2>
              <h2 className="text-[#B2B5BB] py-1 ">
                {moment(booking?.event_date).format("dddd MMM Do YYYY")}{" "}
              </h2>
              <h2 className="text-green-500">
                Ticket {booking?.booking_status}{" "}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyBookings;
