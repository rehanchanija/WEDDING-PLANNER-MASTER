import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { GET_ARTISTS } from "../utils/queries";
import ArtistCard from "./ArtistCard";

const Artists = () => {
  const { loading, error, data } = useQuery(GET_ARTISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div
      className="bg-white py-10 w-full flex justify-center xl:px-0 px-4"
      id="artist"
    >
      <div className="xl:max-w-[90%] w-full flex flex-col relative">
      <h1 className="text-2xl  pb-8 text-primary font-semibold">
          Artists Collaboration in Recent Events
        </h1>

        <div id="artist2" className="py-6 flex overflow-scroll">
          <button
            onClick={() => {
              const scroll = document.getElementById("artist2");
              scroll.scrollTo({
                left: scroll.scrollLeft - 250,
                behavior: "smooth",
              });
            }}
            className="text-white text-3xl px-2  focus:outline-none sm:absolute top-[55%] transform -translate-y-[55%] sm:flex items-center hidden -left-9 h-[74%] rounded-l-lg  bg-gray-900 bg-opacity-70"
          >
            {"<"}
          </button>
          {data?.getArtists.map((artist) => (
            <div key={artist._id}>
              <Link
                href={{
                  pathname: "/artist",
                  query: { id: artist?._id },
                }}
              >
                <ArtistCard data={artist} />
              </Link>
            </div>
          ))}
          <button
            onClick={() => {
              const scroll = document.getElementById("artist2");
              scroll.scrollTo({
                left: scroll.scrollLeft + 250,
                behavior: "smooth",
              });
            }}
            className="text-white text-3xl px-2  focus:outline-none sm:absolute top-[55%] transform -translate-y-[55%] sm:flex items-center hidden -right-9 h-[74%] rounded-r-lg  bg-gray-900 bg-opacity-70"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artists;
