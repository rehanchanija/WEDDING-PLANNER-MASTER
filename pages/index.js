import Head from "next/head";
import React from "react";
import Artists from "../components/Artists";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import TopSearches from "../components/TopSearches";
import WeddingCategories from "../components/WeddingCategories";
import WeddingGallery from "../components/WeddingGallery";
const HomePage = () => {
  return (
    <>
      <Head>
        <title>
         Wedding Planners for Your Dream Wedding
        </title>
      </Head>
      <div>
        <Banner />
        <WeddingCategories />
        <WeddingGallery/>
        <TopSearches/>
        <Artists />
        <Testimonials/>
        {/* <Events />
        <Artists />
        <TrustedPartner />
        <Download /> */}
      </div>
    </>
  );
};

export default HomePage;
