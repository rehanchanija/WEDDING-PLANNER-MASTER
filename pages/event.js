import { useQuery } from "@apollo/client";
import { Collapse } from "antd";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import ArtistCard from "../components/ArtistCard";
import { YoutubeSVG } from "../public/SVG/SVG";
import { GET_EVENT_BY_PARAM } from "../utils/queries";
const Event = () => {
  const { Panel } = Collapse;
  const { query } = useRouter();
  const { id, state } = query;

  const { loading, error, data } = useQuery(GET_EVENT_BY_PARAM, {
    variables: { _id: id },
  });

  const EventData = data?.getEventByParams[0];

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

  return (
    <div className="bg-[#1C1C1C] relative">
      <div className="mx-auto flex flex-col  ">
        <Image
          src={EventData?.event_banner_desktop[0]}
          height={1000}
          width={1500}
          quality={100}
          className="xl:h-[70vh] h-[50vh] w-full sm:flex hidden xl:max-w-[80%] sm:w-[95%] mx-auto "
          alt="banner"
        />
        <Image
          src={EventData?.event_banner[0]}
          height={1000}
          width={1500}
          quality={100}
          className="h-[55vh] w-full sm:hidden flex xl:max-w-[80%] sm:w-[95%] mx-auto "
          alt="banner"
        />
        <div className="bg-[#1C1C1C]  sticky top-28  z-20">
          <div className="py-4 border-b sm:px-0 px-2  xl:max-w-[80%] sm:w-[95%] mx-auto w-full">
            <h1 className="sm:text-4xl text-3xl font-medium text-white">
              {EventData?.event_name}
            </h1>
            <div className=" flex sm:flex-row flex-col justify-between sm:items-center ">
              <div className="flex items-center">
                <span>
                  <MdLocationPin className="text-[#333537] sm:text-4xl text-xl" />
                </span>
                <span className="text-secondary sm:text-xl text-sm">
                  {EventData?.event_location}
                </span>
                <span className="px-4 text-white">|</span>
                <span className=" sm:text-xl text-sm text-gray-400">
                  {moment(EventData?.event_date).format("dddd, Do MMM  YYYY")}{" "}
                  at {EventData?.event_start_at} Onwards
                </span>
              </div>
              <div className="flex items-center justify-between sm:pt-0 pt-4">
                <a
                  href={EventData?.event_youtube_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center text-white sm:px-3">
                    <YoutubeSVG />
                    <p>Youtube</p>
                  </span>
                </a>
                {state !== "upcoming" ? (
                  <Link
                    href={`/ticketcategories?eventid=${id}&event_name=${EventData?.event_name}`}
                  >
                    <button className="bg-primary sm:h-14 h-10 sm:w-60 w-36 rounded-xl flex items-center justify-center">
                      <span className="text-white sm:text-xl text-sm">
                        Book Now
                      </span>
                    </button>
                  </Link>
                ) : (
                  <span className="text-white sm:text-xl text-sm">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 sm:px-0 px-2  xl:max-w-[70%] sm:w-[80%] mx-auto w-full">
          <h3 className="text-xl text-white pb-6">About</h3>
          <p className="text-gray-400">{EventData?.event_description}</p>
          <h1 className="text-white text-xl py-2">Artists List</h1>
          <div className="py-6 flex overflow-scroll">
            {EventData?.artists?.map((artist) => (
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
          </div>
          <h3 className="text-xl text-white pb-4 pt-6">More Informations...</h3>

          <div>
            <Collapse
              // defaultActiveKey={["1"]}
              accordion
              className="text-white sm:w-[70%] bg-transparent"
              bordered={false}
            >
              <Panel
                header="Terms and Conditions"
                key="1"
                className="text-white"
              >
                <p className="text-white">{EventData?.event_terms}</p>
              </Panel>
              <Panel header="Instructions" key="2">
                <p className="text-white">{EventData?.event_instructions}</p>
              </Panel>
              <Panel header="FAQ'S" key="3">
                <p className="text-white">{EventData?.event_FAQ}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
        {/* <ChiefGuest /> */}
        <div className="bg-[#333537] pt-8">
          <h1 className="text-white text-3xl py-2 xl:max-w-[80%] sm:w-[95%] mx-auto">
            Our Sponsers
          </h1>
          <div className="py-10 flex overflow-x-scroll justify-start bg-[#333537]">
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19,
              20,
            ].map((partner, index) => (
              <div key={partner._id}>
                <div className=" mr-10 mb-8">
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
        </div>
      </div>
    </div>
  );
};

export default Event;
