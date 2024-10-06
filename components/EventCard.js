import Image from "next/image";
import React from "react";

const EventCard = ({ data, type }) => {
  return (
    <div className="">
      <div className="bg-[#333537] h-[23rem] w-60 rounded-2xl">
        <Image
          width={400}
          height={400}
          quality={100}
          src={
            data?.event_banner[1]
              ? data?.event_banner[1]
              : data?.event_banner[0]
          }
          alt="event"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <h1 className="text-white text-xl font-semibold pt-2 px-1">
        {data?.event_name}
      </h1>
      {type === "upcoming" ? (
        <p className="text-[#B2B5BB] px-1 text-lg ">Coming Soon</p>
      ) : (
        <>
          <p className="text-[#B2B5BB] px-1 text-lg ">{data?.event_location}</p>
          <p className="text-secondary px-1 text-lg ">{data?.event_date}</p>
        </>
      )}
    </div>
  );
};

export default EventCard;
