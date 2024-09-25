import React from "react";

const ChiefGuestCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="mr-10">
      <div className="bg-[#444546] h-[23rem] w-60 rounded-2xl">
        <img
          src={data?.image}
          alt="event"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <h1 className="text-secondary text-xl font-semibold pt-2 px-1">
        {data?.name}
      </h1>
      <p className="text-white px-1 text-lg ">{data?.description}</p>
    </div>
  );
};

export default ChiefGuestCard;
