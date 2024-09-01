import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Download Our Mobile App Now
            </h1>
            <p className="mb-8 leading-relaxed">
              Download from Play store and Book tickets For Your
              Favourite Shows!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.showsguru"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex cursor-pointer mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                  <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width={30}>
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      />
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      />
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      />
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold font-sans -mt-1">
                      Google Play
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              width={600}
              height={400}
              quality={100}
              alt="ShowsGuru"
              src="/images/app2.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
