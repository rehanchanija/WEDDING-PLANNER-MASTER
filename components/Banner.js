// import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div id="banner">
      <div className="relative">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          className="sm:flex hidden"
        >
          <div>
            <Image
              src="/images/weddingbanner.png"
              height={1000}
              width={1900}
              quality={100}
              className="h-auto max-h-[90vh] w-full"
              alt="banner"
            />
          </div>

          <div>
            <Image
              src="/images/weddingbanner3.png"
              height={1000}
              width={1900}
              quality={100}
              className="h-auto max-h-[90vh] w-full"
              alt="banner"
            />
          </div>

          <div>
            <Image
              src="/images/weddingbanner4.png"
              height={1000}
              width={1900}
              quality={100}
              className="h-auto max-h-[90vh] w-full"
              alt="banner"
            />
          </div>
        </Carousel>
        <div className="sm:flex hidden flex-col absolute top-[10%] -translate-x-1/2 left-1/2 -translate-y-1/2 bg-black/60 drop-shadow-2xl py-4 rounded-lg px-2 w-full">
          <h1 className="text-6xl w-full text-center font-extrabold text-primary  drop-shadow-xl">
            Your Wedding, Your Way
          </h1>
          <h2 className="text-6xl w-full text-center font-extrabold text-gray-100  drop-shadow-xl">
            Your
            <span className="text-primary mx-3">Dream Wedding</span>
            Planners
          </h2>
        </div>
      </div>
      <div className="relative">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          className="sm:hidden flex bg-opacity-40"
        >
          <div>
            <Image
              src="/images/weddingbanner.png"
              height={1000}
              width={1900}
              quality={100}
              className="h-[50vh] w-full object-cover"
              alt="banner"
            />
          </div>

          <div>
            <Image
              src="/images/weddingbanner3.png"
              height={1000}
              width={1900}
              quality={100}
              className="h-[50vh] w-full object-cover"
              alt="banner"
            />
          </div>

          <div>
            <Image
              src="/images/weddingbanner4.png"
              height={1000}
              width={1900}
              quality={100}
              className="h-[50vh] w-full object-cover"
              alt="banner"
            />
          </div>
        </Carousel>
        <div className="sm:hidden flex flex-col absolute -bottom-[2%] -translate-x-1/2 left-1/2 -translate-y-1/2 bg-black/60 drop-shadow-2xl py-2 px-3 rounded-lg w-full">
          <h1 className="text-2xl w-full text-center font-extrabold text-primary   drop-shadow-xl">
            Your Wedding, Your Way
          </h1>
          <h2 className="text-xl w-full text-center font-extrabold text-gray-100  drop-shadow-xl ">
            Your
            <span className="text-primary mx-3">{`"Dream Wedding"`}</span>
            Planners
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
