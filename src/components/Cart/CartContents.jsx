import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";


const cartProducts = [{
    id: 1,
    name: 'T-Shirt',
    size: 'M',
    color: 'Red',
    image: 'https://picsum.photos/200?random=1',
    price: 100,
    quantity: 1
  },
    {
        id: 2,
        name: 'Jeans',
        size: 'L',
        color: 'Blue',
        image: 'https://picsum.photos/200?random=2',
        price: 200,
        quantity: 2
    },
    {
        id: 3,
        name: 'Jacket',
        size: 'XL',
        color: 'Black',
        image: 'https://picsum.photos/200?random=3',
        price: 300,
        quantity: 1
    },
    {
        id: 4,
        name: 'Sneakers',
        size: '10',
        color: 'White',
        image: 'https://picsum.photos/200?random=4',
        price: 150,
        quantity: 1
    },
    {
        id: 5,
        name: 'Shoes',
        size: '11',
        color: 'Grey',
        image: 'https://picsum.photos/200?random=5',
        price: 250,
        quantity: 1
    },
    {
        id: 6,
        name: 'Hat',
        size: 'One Size',
        color: 'Black',
        image: 'https://picsum.photos/200?random=6',
        price: 50,
        quantity: 1
    },
    {
        id: 7,
        name: 'Sunglasses',
        size: 'One Size',
        color: 'Black',
        image: 'https://picsum.photos/200?random=7',
        price: 80,
        quantity: 1
    },
    {
        id: 8,
        name: 'Watch',
        size: 'One Size',
        color: 'Silver',
        image: 'https://picsum.photos/200?random=8',
        price: 500,
        quantity: 1
    },
    {
        id: 9,
        name: 'Backpack',
        size: 'One Size',
        color: 'Brown',
        image: 'https://picsum.photos/200?random=9',
        price: 120,
        quantity: 1
    },
    {
        id: 10,
        name: 'Belt',
        size: 'M',
        color: 'Black',
        image: 'https://picsum.photos/200?random=10',
        price: 40,
        quantity: 1
    }

]

const CartContents = () => {
  return (
    <>
    <div className=' ' >
        {cartProducts.map((product,idx)=>(
            <div key={idx} className='flex justify-start space-x-1 border-b-1 py-4' >
                <div className='flex items-start'>

                <img src={product.image} className='w-20 object-cover mr-4 rounded' alt={product.name} />
                </div>
                <div>
                    <h3>{product.name}</h3>
                    <p className='text-sm text-gray-500' > 
                        Size: {product.size} |
                Color: {product.color}
                    </p>
                    <div className='flex justify-center rounded items-center w-fit border mt-2' >
                        <button className='border-r px-2 py-1  text-xl'>+</button>
                        <span className=' px-2 rounded py-1  text-xl font-semibold' >{product.quantity}</span>
                        <button className='border-l px-2  py-1 text-xl'>-</button>
                    </div>
                </div>
                <div className='ml-auto flex flex-col items-end' >
                    <span className='text-lg font-semibold' >₹{product.price}</span>
                    <button className='text-red-500 hover:text-red-700 mt-2' ><FaRegTrashAlt/></button>
                    </div>
                
            </div>
        ))}
    </div>
    </>
  )
}

export default CartContents