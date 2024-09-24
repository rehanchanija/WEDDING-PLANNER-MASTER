import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeddingCategoryCard = ({ color, heading, desc, url,link }) => {
  return (
    <div className={`h-[150px] sm:w-[32%] w-full min-w-[300px] bg-white mb-5 shadow-xl border border-primary rounded-l-md hover:scale-110 ease-in-out transition-transform delay-75`}>
    <Link href={`/category/${link}`}>
    <div className="pl-4 flex items-center h-[150px]">

      <div className="w-[50%]">
        <h2 className="text-xl font-semibold">
          {heading} 
        </h2>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="w-[50%] h-full rounded-l-xl">
        <Image
          src={`/images/${url}.png`}
          alt="Picture of the author"
          width={800}
          height={500}
          quality={100}
          className="w-full h-full"
          style={{
            clipPath: "ellipse(99% 160px at 100% 50%)",
          }}
        />
      </div>
      </div>

    </Link>
    </div>
  );
};

export default WeddingCategoryCard;
