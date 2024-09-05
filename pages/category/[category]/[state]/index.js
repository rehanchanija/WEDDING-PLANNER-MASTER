import Link from 'next/link.js'
import { useRouter } from 'next/router'
import React from 'react'
const State = ({ stateName,stateSlug,  stateDistricts}) => {
  const router = useRouter()
  const { category } = router.query
  return (
    <div className='py-6 w-full flex justify-center xl:px-0 px-4 bg-white'>
    <div className='xl:max-w-[90%] w-full '>
        <h1 className='text-primary text-2xl font-medium'>Select Your District</h1>
        <div className=" pt-6 grid sm:grid-cols-3 max-w-7xl mx-auto px-4">
          {stateDistricts?.map((item, index) => (
            <Link href={`/category/${category}/${stateSlug}/${item?.slug}`} key={index}>
              <h3 className="cursor-pointer pb-4 hover:underline hover:text-blue-800 hover:font-medium  capitalize">
                {category} in {(item?.name).replace(/-/g, " ")}  {stateName}
              </h3>
            </Link>
          ))}
        </div>
    </div>
    </div>
  )
}

export default State


export const getServerSideProps = async (context) => {
  const {  state } = context.query;
  const { States } = require(`../../../../utils/Constant.js`);
  const myState = States?.find((item) => item?.slug === state?.toLowerCase()) || {};

  const districts = myState?.districts || [];
  return {
    props: {
      stateName: myState?.name,
      stateSlug: myState?.slug,
      stateDistricts: districts,
    },
  };
};