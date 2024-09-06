import { useQuery } from "@apollo/client";
import moments from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { useReactToPrint } from "react-to-print";
import { GET_BOOKINGS_BY_PARAMS, GET_EVENT_BY_PARAM } from "../utils/queries";

const Ticket = () => {
  // 6396fe7e73c0167892f58c2d
  const { query } = useRouter();
  const { id } = query;
  console.log("ID=====>", id);

  const {
    data: bookingData,
    isLoading: bookingLoading,
    error: bookingError,
  } = useQuery(GET_BOOKINGS_BY_PARAMS, {
    variables: {
      _id: id,
    },
  });
  console.log("Booking Data =====>", bookingData);

  const {
    data: eventData,
    isLoading: eventLoading,
    error: eventError,
  } = useQuery(GET_EVENT_BY_PARAM, {
    variables: {
      _id: bookingData?.getBookingByParams[0]?.event_id,
    },
  });
  console.log("Event Data=====>", eventData);
  const EventData = eventData?.getEventByParams[0];
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  if (bookingLoading && eventLoading) return <p>Loading...</p>;
  if (bookingError && eventError) return <p>Error...</p>;

  return (
    <div className=" max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center text-white pb-2">
        E-Ticket
      </h1>
      <div className="rounded-2xl border" ref={componentRef}>
        <img
          src={EventData?.event_banner[0]}
          alt="Event Banner"
          width={500}
          height={300}
          className="rounded-xl w-full"
        />
        <div className="bg-white rounded-xl pt-2 ">
          <div className="p-8">
            <p className="flex justify-between font-bold text-2xl">
              <span>{EventData?.event_name}</span>
            </p>
            <p className="flex justify-between">
              <span className="flex flex-col w-1/2 py-2">
                <span className="text-gray-500">Date</span>
                <span className="font-bold ">
                  {moments(EventData?.event_date).format("DD-MM-YYYY")}
                </span>
              </span>
              <span className="flex flex-col w-1/2 py-2">
                <span className="text-gray-500">Seats</span>
                <span className="font-bold ">
                  {bookingData?.getBookingByParams[0]?.seats}
                </span>
              </span>
            </p>
            <p className="flex justify-between">
              <span className="flex flex-col w-1/2 py-2">
                <span className="text-gray-500">Venue</span>
                <span className="font-bold ">{EventData?.event_location}</span>
              </span>
              <span className="flex flex-col w-1/2 py-2">
                <span className="text-gray-500">Time</span>
                <span className="font-bold ">{EventData?.event_date}</span>
              </span>
            </p>
            <p className="flex justify-between">
              <span className="flex flex-col w-1/2 py-2">
                <span className="text-gray-500">Payment</span>
                <span className="font-bold ">
                  {bookingData?.getBookingByParams[0]?.booking_status}
                </span>
              </span>
              <span className="flex flex-col w-1/2 py-2">
                <span className="text-gray-500">Payment Id</span>
                <span className="font-bold ">
                  {bookingData?.getBookingByParams[0]?.paymentId}
                </span>
              </span>
            </p>
          </div>
          <div className="bg-[#1c1c1c] text-slate-600 px-8">
            <p className="text-center py-2 text-lg">
              This Transaction cannot be cancelled as per Event Cancellation
              Policy.
            </p>
          </div>
          <div className="px-8 flex justify-between items-center">
            <div className="py-4">
              <Image
                src="/images/checked.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <div className="flex">
              <p className="-rotate-90 flex items-center font-bold ">Scan</p>
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: 100,
                  width: "100%",
                }}
              >
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={`https://showsguru.com/ticket?id=${id}`}
                  viewBox={`0 0 256 256`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <button
          onClick={handlePrint}
          className="bg-primary rounded-xl text-white w-96 h-16 text-xl font-semibold "
        >
          Download E-Ticket
        </button>
      </div>
    </div>
  );
};

export default Ticket;
