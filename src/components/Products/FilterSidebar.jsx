import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'


const FilterSidebar = () => {
   const navigate=useNavigate();
    const [searchParams,setSearchParams]=useSearchParams({});
    const [price,setPrice]=useState(null);
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

     const handleFilterChange=(e)=>{
         //  console.log(e);
        const {name,value,checked,type}=e.target;
      //   console.log({name,value,checked,type});
        let newfilters={...filters};
      //   console.log("newfilters",newfilters);
      //   console.log("newfilters",newfilters["size"]);
        if(type==="checkbox"){
         if(checked){
            newfilters[name]=[...(newfilters[name] || []),value];
            // console.log("checked",newfilters[name]);
         }
         else{
            newfilters[name]=newfilters[name].filter((item)=>item!==value);
            // console.log("unchecked",newfilters[name]);
         }
        }else{
            newfilters[name]=value;
            // console.log("newfilters[name]",newfilters[name]);
        }
        setFilters(newfilters);
      //   console.log("newfilters after change",newfilters);

      //   console.log(Object.keys(newfilters));
      updateURLparams(newfilters);
     }

   //   Function to update URL parameters based on selected filters
     // This function takes the new filters object, converts it to URL parameters, and updates the URL
     const updateURLparams=(newfilters)=>{
      const params= new URLSearchParams();// Create a new URLSearchParams object params={};
      Object.keys(newfilters).forEach((key)=>{
         if(Array.isArray(newfilters[key])&& newfilters[key].length>0){
            params.append(key,newfilters[key].join(","));// Convert array to comma-separated string
         }else if(newfilters[key]!=null && newfilters[key]!==""){
            params.append(key,newfilters[key]);// Append key-value pair
         }
      })
      console.log("params",params.toString());
      setSearchParams(params);
      navigate(`?${params.toString()}`); // Update the URL with new search params


     }

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
               <input type="radio" name="category" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500' checked={filters.category===category} onChange={(e)=>{
               handleFilterChange(e);
            }} value={category} id={category} />
               <span className='text-lg text-gray-800 font-medium' >{category}</span>
            </div>
         ))}

      </div>

      {/* Gender */}

      <div className='mb-6'>
         <label className='text-lg text-gray-800 font-medium mb-4' htmlFor="">Gender</label>
         { genders.map((gender,idx)=>(
            <div className='flex items-center' key={idx}>
               <input type="radio"  name="gender" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500' checked={filters.gender===gender} onChange={(e)=>{
               handleFilterChange(e);
            }} value={gender} id={gender} />
               <span  className='text-lg text-gray-800 font-medium'>{gender}</span>
            </div>
         ))}

      </div>

      {/* Colors */}

      <div className='mb-6 text-left '>
         <label className='text-lg text-gray-800 font-medium mb-4' htmlFor="">Color</label>
         <div className='flex  flex-wrap  gap-2   '>
           {colors.map((color,idx)=>(
            <button key={idx} name="Color" value={color} id={color} onClick={(e)=>{handleFilterChange(e)}} type='button'  style={{backgroundColor:color.toLowerCase()}} className={`w-8 h-8 border border-gray-300 rounded-full cursor-pointer transition  hover:scale-105 ${filters.Color.includes(color) && "ring-2 ring-offset-2 ring-blue-500"}`} ></button>
         ))}
         </div>
         
      </div>

      {/* Size */}

      <div className='mb-6 text-left '>
         <label className='text-lg text-gray-800 font-medium ' htmlFor="">Size</label>
         <div  className=''>
            {sizes.map((size,idx)=>(
            <div key={idx} className='flex  items-center space-x-2'>
               <input type="checkbox"  value={size}  checked={filters.size.includes(size)} onChange={(e)=>{
               handleFilterChange(e);}} className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500'   name="size" id={size} />
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
               <input type="checkbox"  value={material} checked={filters.material.includes(material)} onChange={(e)=>{handleFilterChange(e);}} className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500'   name="material" id={material} />
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
               <input type="checkbox" className='mr-2 h-4 w-4 text-blue-500 onfocus:ring-2 onfocus:ring-blue-500'   name="brand" value={brand} checked={filters.brand.includes(brand)} onChange={(e)=>{handleFilterChange(e);}} id={brand} />
               <span className='text-lg text-gray-800 font-medium'>{brand}</span>
            </div>
         ))}
         </div>

      </div>

      {/* Price range */}

      <div className="mb-8">
         <label htmlFor="" className='block text-gray-600 text-lg font-medium mb-2'>Price Range</label>
         <div>
            <input type="range" name='prizerange' min={100} max={1000}  onChange={(e)=>{setPrice(e.target.value);handleFilterChange(e);}} className='w-full  h-2 appearance-none rounded-lg cursor-pointer bg-gray-200' />
            <div className='flex justify-between text-gray-600'>
               <span>${priceRange[0]}</span>
               <span>${priceRange[1]}</span>
            </div>
         </div>
         <div>
            <span className='text-lg font-semibold' >₹ {price}</span>
         </div>
      </div>
   </div>
  )
}

export default FilterSidebar