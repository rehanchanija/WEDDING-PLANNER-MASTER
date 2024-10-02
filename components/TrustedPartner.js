import { useQuery } from "@apollo/client";
import Image from "next/image";
import React from "react";
import { GET_PARTNERS } from "../utils/queries";
import TruestedPartnerCard from "./TruestedPartnerCard";

const TrustedPartner = () => {
  const { loading, error, data } = useQuery(GET_PARTNERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div
      className="bg-[#1C1C1C] py-10 w-full flex justify-center xl:px-0 px-4"
      id="partner"
    >
      <div className="xl:max-w-[90%] w-full flex flex-col">
        <h1 className="text-white  text-3xl py-2">Our Trusted Partners</h1>
        <div className="py-6 flex sm:flex-wrap justify-evenly overflow-x-scroll ">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19,
            20,
          ].map((partner, index) => (
            <div key={partner._id}>
              <div className=" mr-5 mb-8">
                <div className="bg-white lg:h-[8rem] h-[7rem] xl:w-60 lg:w-56 w-48 rounded-2xl flex items-center justify-center">
                  <Image
                    width={384}
                    height={216}
                    quality={100}
                    src={`/partnerimage/${index}.png`}
                    alt="event"
                    className="h-auto w-auto p-4  rounded-2xl lg:max-h-[8rem] max-h-[7rem] max-w-[12rem]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-6 flex flex-wrap justify-evenly">
          {data?.getPartners.map((partner) => (
            <div key={partner._id}>
              <TruestedPartnerCard data={partner} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
