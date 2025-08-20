import React from 'react'
import { HiMiniXMark } from 'react-icons/hi2'
import { useNavigate } from 'react-router';

const NavDrawer = ({drawerisOpen,toggleNavDrawer}) => {
    const navigate=useNavigate()
     const items = [
    {
      name: "MEN",
      href: "collections/all",
    },
    {
      name: "WOMEN",
      href: "#",
    },
    {
      name: "TOPWEAR",
      href: "#",
    },
    {
      name: "BOTTOMWEAR",
      href: "#",
    },
  ];
  return (
    <>
    <div className={`fixed top-0 px-2 py-4 left-0 w-3/4 sm:w-1/2 md:hidden h-svh bg-white shadow-lg transform transition-transform duration-100 z-50 ${drawerisOpen?"translate-x-0":"-translate-x-full"}` }>
    <div className='flex justify-end'>
        <button onClick={toggleNavDrawer} className='text-2xl bg-white p-2  relative hover:bg-gray-100 rounded-full cursor-pointer'><HiMiniXMark/></button>
    </div>
    <div className='flex flex-col grow space-y-2 ' >
        <h2 className='text-2xl font-semibold' >Menu</h2>
        <nav className='flex flex-col space-y-4' >
             {items.map((item, idx) => (
                  <div  className=" text-gray-700  hover:text-black" key={idx}>
                    <span className='cursor-pointer' onClick={()=>{
                        toggleNavDrawer();
                        navigate(item.href)
                        }}>
                    {item.name}
                    </span>
                  </div>
                ))}
        </nav>
    </div>
    </div>
    </>
  )
}

export default NavDrawer