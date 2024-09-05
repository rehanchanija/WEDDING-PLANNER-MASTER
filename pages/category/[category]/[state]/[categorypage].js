import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { MdLocalPhone, MdLocationOn } from "react-icons/md";
import WeddingCategoryDes from "../../../../components/WeddingCategoryDes";
import { States, WeddingCategoryDesContent } from "../../../../utils/Constant";
const CategoryPage = ({}) => {
  const router = useRouter();
  const { category, state, categorypage } = router.query;

  const myState =
    States?.find((item) => item?.slug === state?.toLowerCase()) || {};

  const district =
    myState?.districts?.find(
      (item) => item?.slug === categorypage?.toLowerCase()
    ) || {};

    const Content = WeddingCategoryDesContent?.find(
      (item) => item?.slug === category
    ) || {};
const Test = "test"
console.log(state, categorypage)
const QueryLink =  category ? category : ""
const Query =  category ? category.replace(/-/g, " ") : ""
  return (
    <div>
<div className=" mx-auto  xl:max-w-[90%] w-full pt-6">
          <h3 className="font-semibold flex flex-wrap sm:px-0 px-3">
            <Link href={`/`}>
              <p className="cursor-pointer">Home / </p>
            </Link>
            <Link href={`/category/${QueryLink}`}>
              <p className="cursor-pointer pl-1 capitalize">{Query} / </p>
            </Link>
            <Link href={`/category/${QueryLink}/${state}`}>
              <p className="pl-1 cursor-pointer">{myState?.name} /</p>
            </Link>
            <Link href={`/category/${QueryLink}/${state}/${district?.slug}`}>
              <p className="pl-1 cursor-pointer">{district?.name}</p>
            </Link>
          </h3>
        </div>
    <div className=" w-full flex justify-center xl:px-0 px-4 bg-white">
    
      <div className=" xl:max-w-[90%] w-full flex flex-col">
        <div className="py-4">
          <h1 className="text-3xl font-bold capitalize">
            {category} in {district?.name} {myState?.name}
          </h1>
        </div>
        <div className="sm:flex">
          <div className="sm:w-1/2 w-full flex flex-col ">
            <Image
              src={`/images/${Content?.img1}.png`}
              alt="Picture of the author"
              width={1000}
              height={5000}
              quality={100}
              className="w-full h-[50vh] rounded-md"
            />
          </div>
          <div className="sm:w-1/2 flex flex-col sm:px-10 sm:py-0 py-6">
            <div className="border border-primary h-min rounded-lg p-4 w-full sm:max-w-md ">
              <div className="flex justify-between border-b">
                <h2 className="text-xl font-bold pb-2">Starting Price</h2>
                <h2 className="text-primary py-2">
                  21,000 <span className="">/ person</span>
                </h2>
              </div>
              <div className="flex  border-b space-x-2">
                <h2 className="py-2">{"Info-"}</h2>
                <p className="text-primary py-2 text-xs">
                {Content?.info}

                </p>
              </div>
              <div className="py-4 flex justify-between">
                <a href="https://api.whatsapp.com/send?phone=919827159595" className="rounded-3xl px-6 py-2 bg-primary text-white  font-medium">
                  Send Message
                </a>
                <a href="tel:+919827159595" className="rounded-3xl px-6 py-2 bg-green-500 text-white  font-medium">
                  View Contact
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="bg-primary bg-opacity-40 px-2 py-1  text-xs font-light rounded-sm">
                  In High Demand
                </span>
                <p className="text-xs font-light">7 enquiries last week</p>
              </div>
            </div>
            <div className="border border-primary rounded-md p-4 text-xs my-6 sm:max-w-md ">
              <p className="flex pb-2">
                <span className="font-bold flex">
                  <MdLocationOn className="text-primary text-base mr-2" />
                  Address - {"  "}
                </span>
                 Arihant Complex, #13, Ground, Raipur, Chhattisgarh 492001
              </p>
              <p className="flex pb-2">
                <span className="font-bold flex">
                  <MdLocalPhone className="text-primary text-base mr-2" />
                  Contact -{" "}
                </span>
                9827159595
              </p>
              <p className="flex pb-2">
                <span className="font-bold flex">
                  <BiMessageDetail className="text-primary text-base mr-2" />
                  Details -{" "}
                </span>
                Dreamz 24 - Events & Entertainment Solutions.
              </p>
            </div>
          </div>
        </div>
        <WeddingCategoryDes Content={Content} />
      </div>
    </div>
    </div>

  );
};

export default CategoryPage;





