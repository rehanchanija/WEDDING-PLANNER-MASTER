import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
const Thankyou = () => {
  return (
    <div>
      <Head>
        <title>Showguru | Thankyou</title>
        <meta name="description" content="Website is coming Soon" />
        {/* <link rel="icon" href="/images/logo1.jpg" /> */}
      </Head>
      <section className="text-gray-600 body-font h-[75vh]">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <AiOutlineHeart className="text-9xl text-primary" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Website is Coming Soon
            </h1>
            {/* <p className="mb-4 leading-relaxed">Website is coming Soon</p> */}
            <p className="mb-4 leading-relaxed">
              Continue To Explore Our Website
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <button className="w-32 text-center mx-2 flex justify-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thankyou;
