import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { useUser } from "../context/UserAuthContext";
import { GET_EVENT_BY_PARAM } from "../utils/queries";
import EventCard from "./EventCard";
const Events = () => {
  const { eventCategory } = useUser();
  const { loading, error, data } = useQuery(
    GET_EVENT_BY_PARAM,
    eventCategory !== "all" && {
      variables: {
        event_category: eventCategory,
      },
    }
  );
  console.log(data?.getEventByParams);
  const ApprovedEvents = data?.getEventByParams?.filter(
    (event) => event.event_status === "Approve"
  );
  const ongoingEvents = ApprovedEvents?.filter(
    (event) => event?.state === "ongoing"
  );
  const upcomingEvents = ApprovedEvents?.filter(
    (event) => event?.state === "upcoming"
  );

  if (loading) return <p>Loadinng...</p>;
  if (error) return <p>Error. :</p>;

  return (
    <>
      <div
        className="bg-[#1C1C1C] py-6 w-full flex justify-center xl:px-0 px-4"
        id="ongoing"
      >
        <div className="xl:max-w-[90%] w-full flex flex-col relative">
          <h1 className="text-white text-3xl py-2">Ongoing Event</h1>

          <div id="ongoing2" className="py-6 flex overflow-scroll">
            <button
              onClick={() => {
                const scroll = document.getElementById("ongoing2");
                scroll.scrollTo({
                  left: scroll.scrollLeft - 250,
                  behavior: "smooth",
                });
              }}
              className="text-white text-3xl px-2  focus:outline-none sm:absolute top-[55%] transform -translate-y-[55%] sm:flex items-center hidden -left-9 h-[74%] rounded-l-lg  bg-gray-900 bg-opacity-70"
            >
              {"<"}
            </button>
            {ongoingEvents?.map((event) => (
              <div key={event._id} className="w-64 mr-8">
                <Link href={`/event?id=${event?._id}`}>
                  <EventCard data={event} type="ongoing" />
                </Link>
              </div>
            ))}
            <button
              onClick={() => {
                const scroll = document.getElementById("ongoing2");
                scroll.scrollTo({
                  left: scroll.scrollLeft + 250,
                  behavior: "smooth",
                });
              }}
              className="text-white text-3xl px-2  focus:outline-none sm:absolute top-[55%] transform -translate-y-[55%] sm:flex items-center hidden -right-9 h-[74%] rounded-r-lg bg-gray-900 bg-opacity-70"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-[#1C1C1C] py-6 w-full flex justify-center xl:px-0 px-4"
        id="upcoming"
      >
        <div className="xl:max-w-[90%] w-full flex flex-col relative">
          <h1 className="text-white text-3xl py-2">Upcoming Events</h1>

          <div id="upcoming2" className="py-6 flex overflow-scroll">
            <button
              onClick={() => {
                const scroll = document.getElementById("upcoming2");
                scroll.scrollTo({
                  left: scroll.scrollLeft - 250,
                  behavior: "smooth",
                });
              }}
              className="text-white text-3xl px-2  focus:outline-none sm:absolute top-[55%] transform -translate-y-[55%] sm:flex items-center hidden -left-9 h-[74%] rounded-l-lg  bg-gray-900 bg-opacity-70"
            >
              {"<"}
            </button>
            {upcomingEvents?.map((event) => (
              <div key={event._id} className="w-64 mr-8">
                <Link href={`/event?id=${event?._id}&state=upcoming`}>
                  <EventCard data={event} type="upcoming" />
                </Link>
              </div>
            ))}
            <button
              onClick={() => {
                const scroll = document.getElementById("upcoming2");
                scroll.scrollTo({
                  left: scroll.scrollLeft + 250,
                  behavior: "smooth",
                });
              }}
              className="text-white text-3xl px-2  focus:outline-none sm:absolute top-[55%] transform -translate-y-[55%] sm:flex items-center hidden -right-9 h-[74%] rounded-r-lg bg-gray-900 bg-opacity-70"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
