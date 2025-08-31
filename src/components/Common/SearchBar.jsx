import React, { useEffect, useState } from 'react'
import { HiMiniXMark } from 'react-icons/hi2';
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {

    const [isOpen,setisOpen]=useState(false)
    const [searchTerm,setsearchTerm]=useState("")   

    const handleToggle=()=>{
        setisOpen(!isOpen)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setisOpen(false)
        console.log("Form get Submited",e.target[0].value)
        setsearchTerm("")
    }

    useEffect(() => {

      return () => {
        setisOpen(false)
      }
        
    }, [])
  return (
    <>
    <div className={`flex justify-center items-center ${isOpen?"absolute top-0 left-0  transition-all ease-out duration-75 bg-white w-full h-22 md:h-28 z-50":"w-auto"}`} >
        {isOpen?(
           <form  onSubmit={handleSubmit} className=' relative flex items-center justify-center w-full' >
            <div className=' flex items-center relative w-3/4 md:w-1/2 px-2 py-1  shadow-lg  rounded-lg text-black bg-gray-100'  >

            <input  value={searchTerm} onChange={(e)=>{setsearchTerm(e.target.value)}} type="text" className='outline-none   w-full bg-gray-100 text-black px-2 py-1' placeholder='Search Items....' />
            <button className='  p-2  hover:bg-gray-200 rounded-full cursor-pointer' type='submit' >

            <IoSearchOutline/>
            </button>

            </div>
            <button type='button' className='bg-white  p-2  hover:bg-gray-100 rounded-full cursor-pointer'
             onClick={handleToggle} >
                <HiMiniXMark/>
            </button>
           </form>
        ): <button type='button' onClick={handleToggle} className='bg-white  p-2  hover:bg-gray-100 rounded-full cursor-pointer' ><IoSearchOutline/></button>}
    </div>
    </>
  )
}

export default SearchBar