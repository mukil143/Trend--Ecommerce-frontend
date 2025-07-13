import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import NavDrawer from "../Layout/NavDrawer";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  const [cartopen,setcartopen]=useState(false)
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  }

  const handlecartToggle=()=>{
    setcartopen(!cartopen)
  }

  const items = [
    {
      name: "MEN",
      href: "#",
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

  const options = [
    {
      icon: <CiUser />,
      href: "#",
    },
    {
      icon: <IoBagOutline />,
      href: "#",
    },
    {
      icon: <IoSearchOutline />,
      href: "#",
    },
  ];

  return (
    <>
      
        
            <div className=" container mx-auto flex justify-between py-4 px-6   items-center">
            <div className="text-black font-bold ">
              <h2 className="text-3xl">Trendé</h2>
            </div>
            <div>
              <div className=" hidden md:flex space-x-3 ">
                {items.map((item, idx) => (
                  <span className="font-semibold text-gray-700  hover:text-black" key={idx}>
                    <Link to={item.href} >
                      {item.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-4 justify-center items-center *:text-2xl  ">
              <span  className="bg-white p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <Link to='/profile'> 
                  <CiUser />  
                </Link>
              </span>

              <button onClick={handlecartToggle} className=  "bg-white p-2 relative hover:bg-gray-100 rounded-full cursor-pointer">
                <IoBagOutline/>
                <span className="absolute px-1 top-2 ring right-1 bg-red-500 text-white  text-xs rounded-full">4</span>
              </button>
              {/* <span className="bg-white p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <IoSearchOutline />
              </span> */}
              <div className="overflow-hidden">

                <SearchBar/>
              </div>
             
              <button onClick={toggleNavDrawer} className="md:hidden" >
                <HiMiniBars3BottomRight/>
              </button>
            </div>
          </div>
          <CartDrawer drawerisOpen={cartopen} handlecartToggle={handlecartToggle} />
          <NavDrawer drawerisOpen={navDrawerOpen} toggleNavDrawer={toggleNavDrawer} />
    </>
  );
};

export default Navbar;
