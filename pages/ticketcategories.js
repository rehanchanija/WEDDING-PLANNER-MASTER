import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Watch } from "react-loader-spinner";
import TicketCategoryCard from "../components/Cards/TicketCategoryCard";
import { GET_TICKETS_BY_GROUP } from "../utils/queries";

const TicketCategories = () => {
  const [loaderLoading, setLoaderLoading] = useState(false);
  const { query } = useRouter();
  const { event_name, eventid } = query;

  const { loading, error, data } = useQuery(GET_TICKETS_BY_GROUP, {
    variables: { eventId: eventid },
  });

  if (loading)
    return (
      <p className="h-screen text-white flex items-center justify-center">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="h-screen text-white flex items-center justify-center">
        Error :{error.message}
      </p>
    );

  return (
    <div>
      <Watch
        height="200"
        width="200"
        radius="48"
        color="#fff"
        ariaLabel="watch-loading"
        wrapperStyle={{
          position: "absolute",
          zIndex: "9999",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: loaderLoading ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          top: "0",
          height: "100%",
          width: "100vw",
        }}
        wrapperClassName=""
        visible={loaderLoading}
      />
      <div className="mx-auto flex flex-col  xl:max-w-[80%] sm:max-w-[90%] w-full py-10 sm:px-0 px-3">
        <Link href={`/event?id=${eventid}`}>
          <h1 className="text-3xl text-white font-medium flex items-center">
            <IoIosArrowBack className="mr-4 text-xl" />
            {event_name}
          </h1>
        </Link>
        {/* <p className="text-lg text-gray-400">
          Saturday 17 Dec 2022 at 8.00 pm Onwards
        </p> */}

        <div className="xl:w-[70%] sm:w-[90%] w-full mx-auto my-10">
          <h2 className="text-lg text-white py-4 text-start">
            Select Your Category
          </h2>

          <div className="flex flex-col items-center">
            {data?.getTicketByGroup.map((ticket) => (
              <TicketCategoryCard
                key={ticket._id}
                ticket={ticket}
                setLoaderLoading={setLoaderLoading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCategories;
