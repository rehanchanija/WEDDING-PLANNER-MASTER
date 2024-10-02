import Image from "next/image";
import React from "react";

const TruestedPartnerCard = ({ data }) => {
  return (
    <div className="mr-10 mb-8">
      <div className="bg-white lg:h-[8rem] h-[7rem] lg:w-60 w-52 rounded-2xl flex items-center justify-center">
        <Image
          width={384}
          height={216}
          src={data?.image}
          alt="event"
          className="h-auto w-auto p-4  rounded-2xl lg:max-h-[8rem] max-h-[7rem]"
        />
      </div>
    </div>
  );
};

export default TruestedPartnerCard;
