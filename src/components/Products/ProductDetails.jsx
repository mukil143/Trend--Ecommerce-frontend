import React, { useEffect } from 'react'
import { useState } from 'react';

const ProductDetails = () => {

  const [mainImage, setMainImage] = useState("");
  console.log(mainImage)


  const selectedProduct={
    name: 'Slim-Fit Easy-Iron Shirt',
    price: 350,
    originalPrice: 500,
    description: "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket,and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    colors:["red","black"],
    sizes:["S","M","L","XL"],
    quantity: 1,
    brand:"Urban Chic",
    material:"Cotton",
    image:[ {
      src: 'https://picsum.photos/500/750?random=1',
      alt: 'Slim-Fit Easy-Iron Shirt',
    },
    {
      src: 'https://picsum.photos/500/750?random=2',
      alt: 'Slim-Fit Easy-Iron Shirt -1',
    }],
  }

  useEffect(()=>{
    if(selectedProduct?.image?.length>0){
      setMainImage(selectedProduct.image[0].src)
    }
  },[])



  return (
    <section className=' md:p-4 lg:p-6 bg'>
        <div className='max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg'>
            <div className='flex flex-col  w-full md:flex-row'>
              {/* Left Thumbnil */}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                  {selectedProduct.image.map((img, idx) => (
                    <img 
                      onClick={() => setMainImage(img.src)}
                     key={idx} 
                     src={img.src} 
                     alt={img.alt}
                     className= {`w-20 h-20  object-cover rounded-lg cursor-pointer border-2 ${mainImage==img.src?"  border-black":"border border-gray-300"}`} />
                  ))}
                </div>
                {/* Main image */}
                <div className='md:w-1/2'>
                  <div className='mb-4 '>
                    <img className='rounded-lg w-full object-cover  h-auto' src={mainImage} alt={selectedProduct.image[0].alt} />
                  </div>
                </div>
              {/* Mobile thumbnil */}
              <div className='md:hidden flex  overflow-x-auto space-x-6 mb-4'>
                 {selectedProduct.image.map((img, idx) => (
                    <img 
                    onClick={() => setMainImage(img.src)}
                     key={idx} 
                     src={img.src} 
                     alt={img.alt}
                     className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${mainImage==img.src?"  border-black":"border border-gray-500"} `} />
                  ))}
              </div>
              {/* Product details */}
              <div className='w-full md:w-1/2 md:ml-10'>
                <h2 className='text-2xl md:text-3xl font-semibold mb-2'>{selectedProduct.name}</h2>
                <p className='text-gray-500 mb-2 text-lg line-through'>
                  ₹{selectedProduct.originalPrice}
                </p>
                
                <p className='text-xl text-gray-600 mb-4'>
                  ₹{selectedProduct.price}
                </p>
                

                <div>
                  <p className='text-gray-600 mb-4'>{selectedProduct.description}</p>
                </div>

                <div className='mb-4'>
                  <p className='text-lg  text-gray-700'>Colors:</p>
                  <div className='flex gap-2 mt-2'>
                    {selectedProduct.colors.map((color, idx) => (
                      <button key={idx} className={`border w-8 h-8 rounded-full  focus:border-4`} 
                      style={{ backgroundColor: color.toLocaleLowerCase(),filter:"brightness(0.5)" }}></button>
                    ))}
                  </div>
                </div>
                <div className='mb-4'>
                  <p className='text-lg text-gray-700'>Size:</p>
                  <div className='flex gap-2 mt-2'>
                    {selectedProduct.sizes.map((size, idx) => (
                      <button key={idx} className='text-black bg-white cursor-pointer focus:text-white focus:bg-black h-8 w-8 border border-gray-300'>{size}</button>
                    ))}
                  </div>
                </div>

                <div className='mb-4'>
                  <p className='text-lg text-gray-700'>Quantity:</p>
                  <div>
                    <div className='flex justify-center rounded items-center w-fit  mt-2' >
                        <button className='cursor-pointer rounded px-2 bg-gray-200  py-0.5 text-xl'>-</button>
                        <span className=' px-3 rounded py-1  text-lg font-semibold' >{selectedProduct.quantity}</span>
                        <button className=' cursor-pointer rounded bg-gray-200 px-2 py-0.5  text-xl'>+</button>
                    </div>
                  </div>
                </div>
                <div className='text-center mb-14' >
                  <button className='bg-black text-white w-full py-2 rounded text-center' >Add to Cart</button>
                </div>
                <div>
                  <p className='text-xl  font-bold mb-4 text-gray-700'>Characteristics:</p>
                  <table className='text-left w-full text-sm'>
                    <tbody  className=''>
                      <tr>
                        <td className='text-gray-600 py-1'>Brand:</td>
                      
                        <td className='text-gray-600 py-1'>{selectedProduct.brand}</td>
                      </tr>
                      <tr>
                        <td className='text-gray-600 py-1'>Material:</td>
                        
                        <td className='text-gray-600 py-1'>{selectedProduct.material}</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
               
              </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails