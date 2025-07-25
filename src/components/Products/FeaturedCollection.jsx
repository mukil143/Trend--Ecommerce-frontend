import React from 'react'
import { Link } from 'react-router'

const FeaturedCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto text-center flex  items-center   flex-col-reverse     lg:flex-row
        bg-green-50 lg:rounded-3xl'>
            <div className='lg-w-1/2 md:w-1/2 w-full p-8 text-center lg:text-left'>
            <p className='text-lg font-semibold text-gray-700 mb-2 md:text-xl'>Comfort and Style</p>
            <h1 className='text-4xl lg:text-5xl mb-6 font-bold'>Apparel made for your everyday life</h1>
            <p className=' text-lg text-gray-600 mb-6 '>Discover high-quality, comfortable clothing that effortlessly blends fashion and
function. Designed to make you look and feel great every day.</p>
<Link to='/collections/all' >
 <button className='bg-black cursor-pointer text-lg text-white px-6 py-2  rounded-lg hover:bg-gray-800 transition duration-300'>Shop Now</button>
</Link>
           
            </div>
            <div className='lg:w-1/2   md:w-full w-full'>
                <img src="https://res.cloudinary.com/deif4iuok/image/upload/v1752416971/featured_nluctd.webp" alt="Featured Collection" className='w-full  h-40% md:h-full lg:h-[50%] object-cover lg:rounded-r-3xl ' />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection