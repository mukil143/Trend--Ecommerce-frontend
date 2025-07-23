import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import ProductGrid from './ProductGrid';

const ProductDetails = () => {

  const [mainImage, setMainImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const selectedProduct={
    name: 'Slim-Fit Easy-Iron Shirt',
    price: 350,
    originalPrice: 500,
    description: "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket,and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    colors:["red","black","blue","green"],
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


  const similarProducts=[
     {
      _id:1,
      name:"Stylish Jacket",
      price: 320,
      images:
        {
          url:"https://picsum.photos/500/600?random=1",
          alt:"Stylish Jacket Image"  
        }
      
    },
    {
      _id:2,
      name:"Casual Sneakers",
      price: 150,
      images:
        {
          url:"https://picsum.photos/500/600?random=2",
          alt:"Casual Sneakers Image"
        }
      
    },
    {
      _id:3,
      name:"Elegant Watch",
      price: 250,
      images:
        {
          url:"https://picsum.photos/500/600?random=3",
          alt:"Elegant Watch Image"
        }
      
    },
    {
      _id:4,
      name:"Trendy Sunglasses",
      price: 80,
      images:
        {
          url:"https://picsum.photos/500/600?random=4",
          alt:"Trendy Sunglasses Image"
        }
      
    },
  ]

  useEffect(()=>{
    if(selectedProduct?.image?.length>0){
      setMainImage(selectedProduct.image[0].src)
    }
  },[])

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select color and size',{duration:1000});
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success('Product added to cart successfully!', {duration: 1000});
      setIsButtonDisabled(false);
    }, 2000);
  }



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
                <div className=' md:w-1/2'>
                  <div className='mb-4 '>
                    <img className='rounded-lg w-full object-cover   h-auto' src={mainImage} alt={selectedProduct.image[0].alt} />
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
                {/* COLORS */}

                <div className='mb-4'>
                  <p className='text-lg  text-gray-700'>Colors:</p>
                  <div className='flex gap-2 mt-2'>
                    {selectedProduct.colors.map((color, idx) => (
                      <button 
                      onClick={() => setSelectedColor(color)}
                      key={idx} className={` w-8 h-8 rounded-full  cursor-pointer ${selectedColor===color?"border-4 border-black":" border-2 border-gray-200"}`} 
                      style={{ backgroundColor: color.toLocaleLowerCase(),filter:"brightness(0.5)" }}></button>
                    ))}
                  </div>
                </div>

                {/* SIZE */}
                <div className='mb-4'>
                  <p className='text-lg text-gray-700'>Size:</p>
                  <div className='flex gap-2 mt-2'>
                    {selectedProduct.sizes.map((size, idx) => (
                      <button
                      onClick={() => setSelectedSize(size)}
                       key={idx} className={` cursor-pointer   h-8 w-8 border border-gray-300 ${selectedSize===size?"bg-black text-white":"bg-white text-black"}`}>{size}</button>
                    ))}
                  </div>
                </div>
                {/* QUANTITY */}
                <div className='mb-4'>
                  <p className='text-lg text-gray-700'>Quantity:</p>
                  <div className='flex items-center justify-start  '>
                    <div className='flex  justify-around rounded items-center w-28  mt-2' >
                        <button
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                         className='cursor-pointer  rounded px-2 bg-gray-200  py-0.5 text-xl'>-</button>
                        <span className=' px-3 mx-1 rounded py-1  text-lg font-semibold' >{quantity}</span>
                        <button onClick={()=>{setQuantity((prev)=>prev+1)}} className=' cursor-pointer rounded bg-gray-200 px-2 py-0.5  text-xl'>+</button>
                    </div>
                  </div>
                </div>
                {/* Add to cart */}
                <div className='text-center mb-14' >
                  <button 
                  onClick={handleAddToCart}
                  disabled={isButtonDisabled}
                  className={` bg-black cursor-pointer text-white w-full py-2 rounded text-center ${isButtonDisabled?" opacity-50 cursor-not-allowed ":"hover:bg-gray-900"}`} >{isButtonDisabled?"Adding...":"ADD TO CART"}</button>
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
            <div className='mt-20'>
              <h2 className='text-2xl text-center font-bold mb-10'>You May Also Like</h2>
              <ProductGrid  products={similarProducts} />
            </div>
        </div>
    </section>
  )
}

export default ProductDetails