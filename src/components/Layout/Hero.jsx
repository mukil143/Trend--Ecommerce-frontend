import React from 'react'
import { Link } from 'react-router'

const image={
    src: "https://res.cloudinary.com/deif4iuok/image/upload/v1752416971/rabbit-hero_pjulxg.webp",
    alt: "Hero Image"
}
const Hero = () => {

  return (
   <section className='relative'>
    <img  className='w-full  h-[400px] md:h-[600px] lg:h-[750px] object-cover' src={image.src} alt={image.alt} />
    <div className='absolute inset-0 flex justify-center items-center  '>
        <div className='text-center text-white p-6 '>
            <h1 className='text-white text-4xl font-bold md:text-9xl uppercase tracking-tighter' >VACATION <br />ready</h1>
            <p className='text-sm tracking-tighter md:text-lg mb-6'> 
                Explore our vacation-ready outfits with fast worldwide shipping.
            </p>
            <Link to={"#"} className='bg-white text-gray-900 px-6 py-2 rounded-sm md:text-lg ' >
            ShopNow
            </Link>
        </div>
    </div>
   </section>
  )
}

export default Hero