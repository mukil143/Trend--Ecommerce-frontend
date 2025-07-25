import React from 'react'
import { IoBagHandle } from "react-icons/io5";
import { LuRepeat2 } from "react-icons/lu"; 
import { FaRegCreditCard } from "react-icons/fa";

const FeaturedSection = () => {
  return (
    <section className='py-16 px-4'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className='p-4 rounded-full mb-4 '>
            <h2 className='text-2xl text-center mb-6'><IoBagHandle className='inline'/></h2>
            <p className='text-lg font-semibold tracking-tighter mb-2'>FREE INTERNATIONAL SHIPPING</p>
            <p className='text-md  tracking-tighter  text-gray-700 '>On all orders over $100.00</p>
           </div>
           <div className='p-4 rounded-full mb-4 '>
            <h2 className='text-2xl text-center mb-6'><LuRepeat2 className='inline'/></h2>
            <p className='text-lg font-semibold tracking-tighter mb-2'>45 DAYS RETURN</p>
            <p className='text-md  tracking-tighter  text-gray-700 '>Money back guarantee</p>
           </div>
           <div className='p-4  rounded-full  mb-4 '>
            <h2 className='text-2xl text-center mb-6'><FaRegCreditCard className='inline'/></h2>
            <p className='text-lg font-semibold tracking-tighter mb-2'>SECURE CHECKOUT</p>
            <p className='text-md  tracking-tighter  text-gray-700 '>100% secured checkout process</p>
           </div>
        </div>
    </section>
  )
}

export default FeaturedSection