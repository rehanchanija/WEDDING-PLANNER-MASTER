import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHIEFGUESTS } from "../utils/queries";
import ChiefGuestCard from "./Cards/ChiefGuestCard";

const ChiefGuest = () => {
  const { loading, error, data } = useQuery(GET_CHIEFGUESTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div className="bg-[#1C1C1C] py-10 w-full flex justify-center xl:px-0 px-4">
      <div className="xl:max-w-[90%] w-full flex flex-col">
        <h1 className="text-white font-medium text-4xl py-2">
          Our Chief Guest
        </h1>

        <div className="py-6 flex overflow-scroll">
          {data?.getChiefGuests.map((guest) => (
            <div key={guest._id}>
              <ChiefGuestCard data={guest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChiefGuest;
