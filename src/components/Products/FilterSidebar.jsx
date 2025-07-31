import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

const FilterSidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams({});

     const [filters,setFilters]=useState({
        category:"",
        gender:"",
        Color:[],
        size:[],
        material:[],
        brand:[],
        minPrice:100,
        maxPrice:1000,
     });

     const categories=["Top Wear","Bottom wear"];

     const [priceRange,setPriceRange]=useState([0, 100])

     const colors=[
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Black",
        "White",
        "Orange",
        "Purple",
        "Pink",
     ]

     const sizes=[
        "S",
        "M",
        "L",
        "XL",
        "XXL",
     ]

     const materials=[
        "Cotton",
        "Polyester",
        "Denim",
        "Leather",
        "Synthetic",
     ]

     const brands=[
        "Nike",
        "Adidas",
        "Puma",
        "Under Armour",
        "Reebok",
     ]

     const genders=["Men","Women"];

     useEffect(()=>{
         const params=Object.fromEntries([...searchParams]); //https://yourapp.com/collection?category=shoes&gender=men&Color=red,blue&size=M,L&brand=Nike&minPrice=150&maxPrice=700 =>> {category:"shoes",gender:"men",Color:"red,blue",size:"M,L",brand:"Nike",minPrice:"150",maxPrice:"700"}

         console.log("params",params);

         setFilters({
            ...params,
            category:params.category || "" ,
            gender:params.gender || "" ,
            Color:params.Color? params.Color.split(",") : [] ,
            size:params.size? params.size.split(",") : [] ,
            material:params.material? params.material.split(",") : [] ,
            brand:params.brand? params.brand.split(",") : [] ,
            minPrice:params.minPrice || 100 ,
            maxPrice:params.maxPrice || 1000 ,
         })
         setPriceRange([params.minPrice || 100, params.maxPrice || 1000])
     },[searchParams])

  return (
   <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Filter</h3>
      <div className='mb-6'>
         <label className='text-lg text-gray-800 font-medium' htmlFor="">Category</label>
         { categories.map((category,idx)=>(
            <div className='flex items-center' key={idx}>
               <input type="radio" name="category" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500' checked={filters.category===category} onChange={(e)=>{setSearchParams({...searchParams,category:category})}} value={category} id={category} />
               <span className='text-lg text-gray-800 font-medium' >{category}</span>
            </div>
         ))}

      </div>

      {/* Gender */}

      <div className='mb-6'>
         <label className='text-lg text-gray-800 font-medium mb-4' htmlFor="">Gender</label>
         { genders.map((gender,idx)=>(
            <div className='flex items-center' key={idx}>
               <input type="radio" name="gender" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500'  onChange={(e)=>{setSearchParams({...searchParams,gender:gender})}} value={gender} id={gender} />
               <span  className='text-lg text-gray-800 font-medium'>{gender}</span>
            </div>
         ))}

      </div>

      {/* Colors */}

      <div className='mb-6 text-left '>
         <label className='text-lg text-gray-800 font-medium mb-4' htmlFor="">Color</label>
         <div className='flex  flex-wrap  gap-2   '>
           {colors.map((color,idx)=>(
            <button key={idx} name={color}  style={{backgroundColor:color.toLowerCase()}} className='w-8 h-8 border border-gray-300 rounded-full cursor-pointer transition  hover:scale-105'></button>
         ))}
         </div>
         
      </div>

      {/* Size */}

      <div className='mb-6 text-left '>
         <label className='text-lg text-gray-800 font-medium ' htmlFor="">Size</label>
         <div  className=''>
            {sizes.map((size,idx)=>(
            <div key={idx} className='flex  items-center space-x-2'>
               <input type="checkbox" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500'   name={size} id={size} />
               <span className='text-lg text-gray-800 font-medium'>{size}</span>
            </div>
         ))}
         </div>

      </div>

      {/* Materials */}

       <div className='mb-6 text-left '>
         <label className='text-lg text-gray-800 font-medium ' htmlFor="">Materials</label>
         <div  className=''>
            {materials.map((material,idx)=>(
            <div key={idx} className='flex  items-center space-x-2'>
               <input type="checkbox" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500'   name={material} id={material} />
               <span className='text-lg text-gray-800 font-medium'>{material}</span>
            </div>
         ))}
         </div>

      </div>


      {/* Brands */}


       <div className='mb-6 text-left '>
         <label className='text-lg text-gray-800 font-medium ' htmlFor="">Brands</label>
         <div  className=''>
            {brands.map((brand,idx)=>(
            <div key={idx} className='flex  items-center space-x-2'>
               <input type="checkbox" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500'   name={brand} id={brand} />
               <span className='text-lg text-gray-800 font-medium'>{brand}</span>
            </div>
         ))}
         </div>

      </div>

      {/* Price range */}

      <div className="mb-8">
         <label htmlFor="" className='block text-gray-600 text-lg font-medium mb-2'>Price Range</label>
         <div>
            <input type="range"  name='prizerange' min={100} max={1000}  onChange={(e)=>{console.log(e.target.value)}} className='w-full  h-2 appearance-none rounded-lg cursor-pointer bg-gray-200' />
            <div className='flex justify-between text-gray-600'>
               <span>${priceRange[0]}</span>
               <span>${priceRange[1]}</span>
            </div>
         </div>
      </div>
   </div>
  )
}

export default FilterSidebar