import React from 'react'
import { Link } from 'react-router'


const AdminHomePage = () => {
    const orders=[
        {
            id:'#'+Math.floor(Math.random()*1000),
            user:{
                userName:'John Doe',
            },
            totalPrice:250,
            status:"Processing",
        },
        {
            id:'#'+Math.floor(Math.random()*1000),
            user:{
                userName:'Jane Smith',
            },
            totalPrice:450,
            status:"Shipped",
        },
        {
            id:'#'+Math.floor(Math.random()*1000),
            user:{
                userName:'Alice Johnson',
            },
            totalPrice:150,
            status:"Delivered",
        },
        {
            id:'#'+Math.floor(Math.random()*1000),
            user:{
                userName:'Bob Brown',
            },
            totalPrice:350,
            status:"Cancelled",
        },
    ]
  return (
    <div className="max-w-7xl container mx-auto p-2 overflow-y-auto
     sm:p-6">
        <h1 className="text-xl md:text-3xl font-bold mb-6 tracking-tight">Admin Dashboard</h1>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  *:shadow-md *:p-4 *:rounded-lg mb-6 ">
            {/* Company analytics */}
            <div className=" flex flex-col flex-wrap flex-grow ">
                <h2 className="text-lg md:text-xl font-semibold">Revenue</h2>
                <h1 className="text-lg md:text-xl font-medium tracking-tight">₹10000</h1>
                
            </div>
            <div className=" flex flex-col flex-wrap">
                <h2 className="text-lg md:text-xl font-bold">Total Orders</h2>
                <h1 className="text-xl sm:text-2xl font-medium tracking-tight">4</h1>
                <Link className='flex mt-1 text-blue-500 hover:underline' to={'/admin/orders'}>Manage Orders</Link>
            </div>
            <div className=" flex flex-col flex-wrap">
                <h2 className="text-lg md:text-xl font-bold">Total Products</h2>
                <h1 className="text-lg md:text-xl font-medium tracking-tight">40</h1>
                <Link className='flex mt-1 text-blue-500 hover:underline' to={'/admin/products'}>Manage Products</Link>

            </div>

            {/* Order data */}
        </div>
            <div className="w-full ">
                <h1 className="text-lg md:text-xl tracking-tight font-bold mb-4">Recent Orders</h1>
                <div className='overflow-x-auto'>
                    <table className="min-w-full">
                        <thead>
                            <tr className='bg-gray-200 text-gray-700 text-xs sm:text-sm uppercase text-left rounded'>
                                <th className="px-4 w-lg py-2">Order ID</th>
                                <th className="px-4  py-2">User</th>
                                <th className="px-4 py-2">Total Price</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length>0? orders?.map((order)=>(
                                <tr className='border-b-2 border-gray-200 hover:bg-gray-50 cursor-pointer ' key={order.id}> 
                                <td className="p-4 text-black font-semibold tracking-tight">{order.id}</td>
                                <td className="p-4 text-gray-500 font-medium ">{order.user.userName}</td>
                                <td className="p-4 text-gray-500 font-medium">₹{order.totalPrice}</td>
                                <td className={`p-4 text-gray-500 font-medium ${order.status === 'Processing' ? 'text-yellow-500' : order.status === 'Shipped' ? 'text-blue-500' : order.status === 'Delivered' ? 'text-green-500' : 'text-red-500'}`}>{order.status}</td>
                                    
                                </tr>
                            )):
                            <tr className='border-b-2  border-gray-200 '>
                                <td colSpan={4} className="p-4   text-center text-black font-semibold tracking-tight">No orders found</td>
                            </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>

    </div>
  )
}

export default AdminHomePage