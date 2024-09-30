import Image from "next/image";
import React from "react";
const WeddingCategoryDes = ({Content}) => {
  return (
    <div>
      <div
        className="flex flex-col-reverse md:flex-row justify-between  py-10"
        id="development"
      >
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl  font-bold leading-9 text-gray-800 pb-4">
            {Content?.title}
          </h1>
          <p className="font-medium text-sm leading-6 text-gray-600 ">
            {Content?.descriptionA}
          </p>
<br />
          <p className="font-medium text-sm leading-6 text-gray-600 ">
            {Content?.descriptionB}
          </p>
          {
            Content?.list ? (
              <ul className="list-disc list-inside text-sm text-gray-600">
                {Content?.list?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : null
            
          }
          <br />
          <a href="#introduction">
            <button
              className="h-11 mt-6 bg-gradient-to-br from-primary to-slate-700 hover:from-slate-700 hover:to-primary hover:text-white hover:scale-110 text-white text-lg font-semibold w-48 rounded-md"
            >
              Contact Us {"->"}
            </button>
          </a>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div>
            <Image
              width={1000}
              height={600}
              className="w-full h-auto rounded-md"
              src={`/images/${Content?.img2}.png`}
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCategoryDes;
