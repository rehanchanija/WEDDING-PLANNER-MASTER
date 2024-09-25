import React from 'react'

const WeddingGallery = () => {
  return (
    <div className='py-6 w-full flex justify-center xl:px-0 px-4 bg-white'>
          <div className=" xl:max-w-[90%] w-full flex flex-col">

        <section className="text-gray-600 body-font">
  <div className="container py-8 mx-auto flex flex-wrap">
    <div className="flex w-full  ">
    <h1 className="text-2xl  pb-8 text-primary font-semibold">Wedding Image Gallery</h1>

    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/images/gallery1.png" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/images/gallery2.png" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/images/gallery3.png" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/images/gallery4.png" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/images/gallery5.png" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/images/gallery6.png" />
        </div>
      </div>
    </div>
  </div>
</section>
  </div>

    </div>
  )
}

export default WeddingGallery