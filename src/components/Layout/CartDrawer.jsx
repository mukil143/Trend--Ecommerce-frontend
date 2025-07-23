import React, { useState } from 'react'
import { HiMiniXMark } from 'react-icons/hi2'
import CartContents from '../Cart/CartContents'

const CartDrawer = ({drawerisOpen,handlecartToggle}) => {
  
  return (
    <>
    <div className={`fixed top-0 px-2 py-4 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-svh bg-white shadow-lg transform transition-transform duration-100 z-50 ${drawerisOpen?"translate-x-0":"translate-x-full"}` }>
      <div className='flex  text-2xl font-bold  justify-end ' >
        <button onClick={handlecartToggle} className='bg-white p-2 relative hover:bg-gray-100 rounded-full cursor-pointer' >
        <HiMiniXMark/>
        </button>
        
      </div>
      <div className='grow h-svh overflow-y-auto scroll-auto p-4 ' > 
          <h1 className='text-xl font-semibold mb-4' >Your Cart</h1>
        {/* Add cart items here */}
        
        <CartContents/>
        
        </div>

       


        <div className='fixed bottom-0 flex flex-col  justify-center items-center w-full bg-white p-4' >
          <button className='bg-black w-full md:w-[20rem] text-white py-2 rounded-lg font-semibold hover:bg-gray-950 cursor-pointer' >Checkout</button>
          <p className='text-xs text-center mt-2 tracking-tighter' >Shipping, taxes, and Discount codes calculated at Checkout</p>
        </div>
    </div>
    </>
  )
} 

export default CartDrawer