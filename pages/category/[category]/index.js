import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
const Category = () => {
    const router = useRouter()
    const { category } = router.query
    const { States = [] } = require(`../../../utils/Constant.js`)

  return (
    <div className='py-6 w-full flex justify-center xl:px-0 px-4 bg-white'>
    <div className='xl:max-w-[90%] w-full '>
        <h1 className='text-primary text-2xl font-medium'>Select Your State</h1>
        <div className=" pt-6 grid sm:grid-cols-3 max-w-7xl mx-auto px-4">
          {States?.map((item, index) => (
            <Link href={`/category/${category}/${item?.slug}`} key={index}>
              <h3 className="cursor-pointer pb-4 hover:underline hover:text-blue-800 hover:font-medium  capitalize">
                {category} in {(item?.name).replace(/-/g, " ")}
              </h3>
            </Link>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Category

// export const getServerSideProps = async (context) => {
//     const { query, state } = context.query;
//     const { States = [] } = require(`../../utils/Constant.js`);
//     const { FooterLink } = require(`../../utils/Constant.js`);
//     // const item = FooterLink?.find((item) => item?.link.split("/")[2] === query);
  
//     return {
//       props: {
//         stateName: States,
//       },
//     };
//   };
  