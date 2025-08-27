import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const OrderDetailsPage = () => {
    const {id}=useParams();
    const [OrderDetails,setOrderDetails]=useState(null);
    console.log(OrderDetails);
    const tableheaders = ["Name", "Unit Price", "Quantity", "Total"];
    useEffect(()=>{
        const mockOrderDetails = {
            id: id,
            createdAt: new Date().toLocaleString('en-US'),
            isPaid: true,
            isDelivered: false,
            paymentMethod:"Razorpay",
            shipping:{
                method:"Standard Shipping",
                price:10,
            },
            shippingAddress: {
                city: "New York",
                country: "USA",
            },
            OrderItems:[
                {
                    productId:"1",
                    name:"Slim-Fit T-Shirt",
                    price:150,
                    quantity:2,
                    image:"https://picsum.photos/200/300?random=1",
                },
                {
                    productId:"2",
                    name:"Shoes",
                    price:100,
                    quantity:2,
                    image:"https://picsum.photos/200/300?random=2",
                }
            ]

        };
        setOrderDetails(mockOrderDetails);
    }, [id]);
  return (
    <div className='max-w-7xl container mx-auto my-10 px-4'>
        <h1 className='text-xl md:text-3xl font-bold'>Order Details</h1>
        
            {!OrderDetails ? (
                <p>Loading order details...</p>
            ) : (
                <div className="p-4 border border-gray-300 rounded-lg mt-6">
                    {/* Order details */}
                    <div className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center mb-8">
                        <div className="">
                            <h2 className="text-sm sm:text-xl font-semibold">Order ID: {OrderDetails.id}</h2>
                            <p className="text-xs sm:text-sm text-gray-600">Placed on: {OrderDetails.createdAt}</p>
                        </div>
                        <div className="text-left sm:text-right">
                            <div className='mb-1 sm:mb-2'>{OrderDetails.isPaid?(<span className=' text-[10px] md:text-sm font-semibold bg-green-100 px-2 py-1 rounded-full text-green-600'>Approverd</span>):<span className='text-[10px] md:text-sm font-semibold bg-red-100 px-2 py-1 rounded-full text-red-600'>Pending</span>}</div>
                            <div>{OrderDetails.isDelivered?<span className='text-[10px] md:text-sm font-semibold bg-green-100 px-2 py-1 rounded-full text-green-600'>
                                Delivered
                            </span>:<span className='text-[10px] md:text-sm font-semibold bg-yellow-100 px-2 py-1 rounded-full text-yellow-600'>Pending Delivery</span>}</div>
                        </div>  
                    </div>
                    {/* payment and shipping address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 ">
                        <div className="">
                            <h2 className="text-sm sm:text-lg font-semibold mb-2">Payment Info</h2>
                            <div className="text-xs sm:text-sm  ">
                                <p className="text-gray-600">Method: {OrderDetails.paymentMethod}</p>
                                <p className="text-gray-600">Status: {OrderDetails.isPaid ? 'Paid' : 'Pending'}</p>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="text-sm sm:text-lg font-semibold mb-2">Shipping Info</h2>
                            <div className="text-xs sm:text-sm  ">
                                <p className="text-gray-600">Shipping Method: {OrderDetails.shipping.method} </p>
                                <p className="text-gray-600">Address: {OrderDetails.shippingAddress.city}, {OrderDetails.shippingAddress.country}</p>
                            </div>
                        </div>
                    </div>
                    {/* Order items */}
                    <div className="overflow-x-auto">
                        <h2 className="text-sm sm:text-lg mb-2 font-semibold">Products</h2>
                        <div className="overflow-x-auto">
                            <table className='min-w-full border border-gray-200 rounded-lg overflow-hidden'>
                                <thead>
                                    <tr className='border bg-gray-100 border-gray-100'>
                                        {tableheaders.map((header, index) => (
                                            <th
                                                key={index}
                                                className={`px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 ${index === 0 ? 'text-center w-1/3' : 'text-center'} `}
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {OrderDetails.OrderItems.map((item,idx) => (
                                        <tr className='border-b border-gray-200 ' key={idx}>
                                            <td className='px-4 py-2 flex items-center text-center flex-col sm:flex-row justify-start'>
                                                <img src={item.image} className='w-12 h-12 object-cover inline-block mr-2 rounded' alt={item.name} />
                                                <Link to={`/product/${item.productId}`} className=' text-left  hover:underline text-blue-700 text-xs sm:text-sm'>{item.name}</Link>
                                            </td>
                                            <td className='px-4 py-2 text-center text-xs sm:text-sm font-semibold'>₹{item.price}</td>
                                            <td className='px-4 py-2 text-center text-xs sm:text-sm font-semibold'>{item.quantity}</td>
                                            <td className='px-4 py-2 text-center text-xs sm:text-sm font-semibold'>₹{item.price * item.quantity}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* back button */}
                    <div className="mt-6">
                        <Link to="/my-orders" className="px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm rounded hover:bg-blue-700 transition" >
                            Back to Orders
                        </Link>
                    </div>

                </div>
            )}
    </div>
  )
}

export default OrderDetailsPage