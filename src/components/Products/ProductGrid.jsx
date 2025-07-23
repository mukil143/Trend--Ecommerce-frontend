import React from 'react'
import { Link } from 'react-router'

const ProductGrid = ({products}) => {
   
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center lg:grid-cols-4 gap-4 '>
           {products.map((item,idx)=>(
            <Link key={idx} to={`/product/${item._id}`} className='block'>
                <div className='bg-white p-4 rounded-lg'>
                    <div className='w-full h-96 mb-4'>
                        <img  className= ' w-full h-full object-cover rounded-lg' src={item.images.url} alt={item.images.alt} />
                    </div>
                    <div className='mt-2'>
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                    <p className='text-gray-600  text-smtracking-tighter'>${item.price}</p>
                </div>
                </div>
                
                
            </Link>
           ))}
        </div>
    </section>
  )
}

export default ProductGrid