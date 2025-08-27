import React from 'react'
import { useEffect } from "react";
const checkout={
    id:"123456",
    createdAt: new Date(),
    products:[
        {
            produvctId: "1",
            name: "Stylish jacket",
            size: "M",      
            color: "Black",
            price:120,
            image:"https://picsum.photos/200?random=1",
            quantity: 1
        },
        {
            produvctId: "2",
            name: "Casual sneakers",
            size: "10",
            color: "White",
            price:80,
            image:"https://picsum.photos/200?random=2",
            quantity: 1
        }
    ],
    shippingAddress: [{
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        city: 'Anytown',
        postalCode: '12345',
        country: 'USA',
        phone: '123-456-7890'
    }],

}

const CalculateEstimatedDeliveryDate=(createdAt) => {
    const date = new Date(createdAt);
    date.setDate(date.getDate() + 7); // Assuming delivery in 7 days
    return date.toLocaleDateString('en-GB');
}

const OrderConfirmationPage = () => {
    

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div   className="container min-h-screen  mx-auto max-w-4xl bg-white p-6 ">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">Thank you for your order!</h1>
        {checkout&&<div className="border rounded-lg border-gray-200 p-4 md:p-6  ">
            <div className='flex   flex-col  sm:flex-row md:flex-row  items-start justify-between mb-4 '>
            <div>
                <h2 className="text-sm md:text-lg font-semibold mb-2">Order ID: {checkout.id}</h2>
                <p className=" text-sm md:text-lg text-gray-600 mb-2">Order Date: {new Date(checkout.createdAt).toLocaleDateString('en-GB')}</p>
            </div>
            <div className="text-xs md:text-sm text-emerald-500">
                <h2>Estimated Delivery Date: {CalculateEstimatedDeliveryDate(checkout.createdAt)}</h2>
            </div>
            </div>

            <div className="py-7">
            {checkout.products.map((product,idx)=>(
                <div key={idx} className="flex  items-start  justify-between mb-4">
                    <div className="flex items-start  ">
                        <img src={product.image} alt={product.name} className=" w-16 h-16  md:w-20 md:h-20 object-cover rounded-md mr-4" />
                        <div className="">
                            <h2 className='text-sm md:text-lg font-semibold'>{product.name}</h2>
                            <p className='text-xs md:text-sm text-gray-600'>Size: {product.size} |  Color: {product.color}</p>
                        </div>
                    </div>
                    <div className="text-right ml-auto">
                        <p className='text-sm md:text-lg font-semibold'>₹{product.price}</p>
                        <p className='text-xs md:text-sm  '><span>Qty:</span>
                        <span className=''>{product.quantity.toLocaleString()}</span></p>
                    </div>

                </div>
            ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                <div className="">
                    <h2 className='text-sm md:text-lg font-semibold mb-2'>Payment</h2>
                    <p className='text-xs md:text-sm text-gray-600'>Razorpay</p>
                </div>
                <div className="">
                    <h2 className="text-sm md:text-lg font-semibold mb-2">Delivery</h2>
                    {checkout.shippingAddress.map((address,idx)=>(
                    <div key={idx} className='text-xs md:text-sm text-gray-600'>
                        <span>{address.firstName} {address.lastName},</span>
                        <br />
                         <span>{address.address},</span>
                        <br />
                        <span>
                            {address.city}, {address.postalCode}, {address.country}, {address.phone}    
                       </span>
                            </div>
                    
                    ))}
                </div>
            </div>
            
        </div>}
    </div>
  )
}

export default OrderConfirmationPage