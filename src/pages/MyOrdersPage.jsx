import React, { useEffect, useState } from 'react'
import { data } from 'react-router';

const MyOrdersPage = () => {
    const [orders,SetOrders]=useState([]);

    const titles=["IMAGE","ORDER ID","CREATED","SHIPPING ADDRESS","ITEMS","PRICE","STATUS"]

    useEffect(()=>{
        setTimeout(() => {
            const mockorders=[
                {
                    _id:12345,
                    createdAt:new Date(),
                    shippingAddress:{city:"Newyork",country:"USA"},
                    orderItems:[
                        {
                            name:"Product 1",
                            image:"https://picsum.photos/500/500?random=8"
                        },
                    ],
                    totalPrice:100,
                    isPaid:true,
                    quantity:1,
                },
                {
                    _id:3456,
                    createdAt:new Date(),
                    shippingAddress:{city:"Newyork",country:"USA"},
                    orderItems:[
                        {
                            name:"Product 2",
                            image:"https://picsum.photos/500/500?random=9"
                        },
                    ],
                    totalPrice:100,
                    isPaid:false,
                    quantity:1,
                },

            ];
            SetOrders(mockorders)
        }, 1000);
    },[])
  return (
    <section className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-xl font-bold sm:text-2xl mb-6'>My Orders</h2>
        <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
            <table className='min-w-full text-left text-gray-500 '>
                <thead className='bg-gray-100 text-sm uppercase text-gray-700'>
                    <tr className='text-left'>
                        {titles.map((titile,idx)=>(
                        <th className='py-2 px-4 sm:py-3'>{titile}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className=''>
                    {orders.length>0 ?(
                        orders.map((item,idx)=>(
                           <tr className='text-left border-b-2 border-gray-100 hover:border-gray-50'>
                            <td className='p-2 sm:p-4'>
                                <img src={item.orderItems[0].image}
                                className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg' 
                                 alt="" />
                            </td>
                            <td className="p-2 sm:p-4 font-bold text-gray-800 tracking-tighter">
                                #{item._id}
                            </td>
                            <td className="p-2 sm:p-4 text-gray-400">
                                {new Date(item.createdAt).toLocaleDateString()}
                                {" "}
                                 {new Date(item.createdAt).toLocaleTimeString()}
                            </td>
                            <td className="p-2 sm:p-4 text-gray-600">
                                {item.shippingAddress?`${item.shippingAddress.city},${item.shippingAddress.country}`:"N/A"}
                                
                            </td>
                            <td className="p-2 sm:p-4 text-gray-600">
                                {item.quantity}
                            </td>
                            <td className="p-2 sm:p-4 text-gray-600">
                                ₹{item.totalPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-gray-600 ">
                                <span className={` px-2  py-1 text-xs sm:text-sm font-medium rounded-full ${item.isPaid?" bg-green-200 text-green-700":"bg-red-200 text-red-700"}`}>{item.isPaid?"Paid":"Pending"}</span>
                            </td>
                           </tr> 
                        ))
                    ):(
                    <tr>
                        <td colSpan={7} className='py-4 px-4 text-center text-gray-500' >You have no orders</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default MyOrdersPage