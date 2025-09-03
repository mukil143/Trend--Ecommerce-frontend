import React from 'react'
import { Link } from 'react-router'


const ProductManagement = () => {

    const products=[
        {
            _id:123456,
            name:'printed t-shirt',
            price:100,
            sku:'sku1'
        },
        {
            _id:234566,
            name:'White t-shirt',
            price:150,
            sku:'sku2'
        },
        {
            _id:345677,
            name:'Black t-shirt',
            price:200,
            sku:'sku3'
        },
        {
            _id:456788,
            name:'Blue t-shirt',
            price:250,
            sku:'sku4'
        },
        {
            _id:567899,
            name:'Red t-shirt',
            price:300,
            sku:'sku5'
        },
        {
            _id:678910,
            name:'Green t-shirt',
            price:350,
            sku:'sku6'
        },
        {
            _id:789012,
            name:'Yellow t-shirt',
            price:400,
            sku:'sku7'
        },
        {
            _id:890123,
            name:'Orange t-shirt',
            price:450,
            sku:'sku8'
        },
        {
            _id:901234,
            name:'Purple t-shirt',
            price:500,
            sku:'sku9'
        },
        
    ]

    const handleDelete=(id)=>{
        if(window.confirm("Are you sure you want to delete this product?")){
            console.log("product deleted",id);
        }
        else{
            console.log("product not deleted");
        }
    }
  return (
    <div className='max-w-7xl mx-auto  px-2  sm:px-6 lg:px-14 lg:py-6 '>
      <h1 className='text-2xl sm:text-3xl  font-bold mb-6  '>Product Management</h1>
      <div className="max-w-full overflow-x-auto shadow-md sm:rounded-lg">
         
            <table className='border-collapse min-w-full border-spacing-0   text-left '>
                <thead className=''>
                    <tr className='bg-gray-200 text-xs  uppercase sm:text-sm py-1  '>
                        <th className='px-4 py-2 w-1/2 rounded-tl-xl '>Name</th>
                        <th className='px-4 py-2 '>price</th>
                        <th className='px-4 py-2'>Sku</th>
                        <th className='px-4 py-2  rounded-tr-xl'>Action</th>
                    </tr>
                </thead>
                <tbody className='border-2 border-gray-200'>
                    {products.length>0?products.map((item,idx)=>(
                        <tr  key={idx} className='border-b-2 border-gray-200 hover:bg-gray-100 cursor-pointer '>
                            <td className='p-4 font-semibold text-sm sm:text-lg whitespace-nowrap'>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</td>
                            <td className='p-4 text-sm sm:text-lg'>₹{item.price}</td>
                            <td className='p-4 text-sm sm:text-lg'>{item.sku}</td>
                            <td className='p-4  '>
                            <div className='flex space-x-2 text-sm sm:text-lg '>
                            <Link to={`/admin/products/${item._id}/edit`} className='border px-3 py-0.5 cursor-pointer bg-yellow-500 text-white rounded'>Edit</Link>
                            <button onClick={()=>{handleDelete(item._id)}} className='border px-3 py-0.5 cursor-pointer bg-red-500 text-white rounded'>Delete</button>
                            </div>
                            </td>
                        </tr>)):<tr><td className='p-4 text-sm sm:text-lg sm:text-center text-left ' colSpan={4}>No products found</td></tr>}
                </tbody>
                
            </table>

      </div>
    </div>
  )
}

export default ProductManagement