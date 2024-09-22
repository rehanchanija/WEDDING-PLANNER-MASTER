import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Artists from "../components/Artists";
import ChiefGuest from "../components/ChiefGuest";
import { GET_ARTIST_BY_ID } from "../utils/queries";
const Artist = () => {
  const { query } = useRouter();
  const { id } = query;

  const { loading, error, data } = useQuery(GET_ARTIST_BY_ID, {
    variables: { _id: id },
  });

  const ArtistData = data?.getArtistByID;

  console.log(ArtistData);
  if (loading)
    return (
      <p className="h-screen text-white flex items-center justify-center">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="h-screen text-white flex items-center justify-center">
        Error :
      </p>
    );
  console.log(ArtistData);
  return (
    <div className="bg-[#1C1C1C]">
      <div className="mx-auto flex flex-col  xl:max-w-[80%] sm:w-[95%]">
        <Image
          src={
            ArtistData?.desktopImage
              ? ArtistData?.desktopImage
              : ArtistData?.image
          }
          height={1000}
          width={1500}
          quality={100}
          className="h-[55vh]  mx-auto sm:flex hidden"
          alt="banner"
        />
        <Image
          src={ArtistData?.image}
          height={1000}
          width={1500}
          quality={100}
          className="h-[55vh]  mx-auto sm:hidden flex"
          alt="banner"
        />
        <div className="py-8 border-b sm:px-0 px-2 ">
          <h1 className="sm:text-4xl text-3xl font-medium text-white flex">
            {ArtistData?.name}
            <span className="px-4 text-white">|</span>
            <span className=" sm:text-xl text-sm text-gray-400 flex items-center">
              {ArtistData?.ratings}
              <AiFillStar className="text-yellow-500 ml-2" />
            </span>
          </h1>
          <div className="pt-3 flex sm:flex-row flex-col justify-between sm:items-center">
            <div className="flex items-center">
              <span className="text-secondary sm:text-xl text-sm pr-4">
                {ArtistData?.description}
              </span>
            </div>
            <div className="flex items-center justify-between sm:pt-0 pt-4">
              <Link href="/contactus">
                <button className="bg-primary sm:h-14 h-10 sm:w-60 w-36 rounded-xl flex items-center justify-center">
                  <span className="text-white sm:text-xl text-sm">
                    Enquire Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Artists />
      <ChiefGuest />
    </div>
  );
};

export default Artist;
