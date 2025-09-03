import React, { use, useEffect, useState } from 'react'

const OrdersInfopage = () => {

  const [orders,setorders]=useState([]);

  useEffect(()=>{
    
    const ordersdata=[
      {
        _id:12345,
        customer:'Admin user',
        total:500,
        status:'Processing'
      },
      {
        _id:23456,
        customer:'Admin user',
        total:500,
        status:'Shipped'
      },
      {
        _id:34567,
        customer:'Admin user',
        total:500,
        status:'Delivered'
      },
    ]
    setorders(ordersdata);
  },[])

  const handleStatusChange=(id,e)=>{
    const updatedOrders = orders.map((order) => {
      if (order._id === id) {
        return { ...order, status: e.target.value };
      }
      return order;
    });
    setorders(updatedOrders);
  }

  const handleDeliver=(id)=>{
    const updatedOrders = orders.map((order) => {
      if (order._id === id) {
        return { ...order, status: 'Delivered' };
      }
      return order;
    });
    setorders(updatedOrders);
  }
  return (
    <div className='max-w-7xl mx-auto p-2   sm:p-4'>
      <h2 className='text-xl sm:text-2xl font-bold mb-6'>Order Management</h2>
      <div className="max-w-full overflow-x-auto">
         <table className='border-collapse min-w-full border-spacing-0 text-left'>
                <thead className=''>
                    <tr className='bg-gray-200 text-xs  uppercase sm:text-sm py-1 '>
                        <th className='px-4 py-2 w-1/3 rounded-tl-xl '>Order ID</th>
                        <th className='px-4 py-2 '>Costumer</th>
                        <th className='px-4 py-2'>Total price</th>
                        <th className='px-4 py-2'>Status</th>
                        <th className='px-4 py-2 rounded-tr-xl'>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    { orders.length > 0 ? orders.map((order,idx)=>(
                        <tr key={idx} className=''>
                            <td className='p-4 whitespace-nowrap'>{order._id}</td>
                            <td className='p-4'>{order.customer}</td>
                            <td className='p-4'>₹{order.total}</td>
                            <td className='p-4'>
                                <select  value={order.status} onChange={(e)=>{handleStatusChange(order._id,e)}}  selected={order.status}  id={order._id} className=' focus:ring focus:ring-blue-500 focus:border-blue-500 border-2 outline-none cursor-pointer p-1 px-2 rounded border-gray-200' >
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </td>
                            <td className='p-4'>
                            <button onClick={()=>{handleDeliver(order._id)}} className='border px-3 py-1 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded text-xs sm:text-lg'>Mark as Delivered</button></td>
                        </tr>
                    )):<tr>
                            <td colSpan={5}  className='p-4 whitespace-nowrap text-center '>No Users</td>
                        </tr>}
                </tbody>
                
            </table>
      </div>
    </div>
  )
}

export default OrdersInfopage