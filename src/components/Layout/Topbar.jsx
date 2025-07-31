import React from 'react'

import { FaMeta,FaXTwitter  } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { Link } from 'react-router';


const Topbar = () => {
  return (
   <>
   <div className='bg-[#ea2e0e] text-white w-full' >
    <div className='container mx-auto'>
      <div className='flex px-14 py-1 space-x-5   text-center items-center justify-between' >

      <div className='md:flex space-x-3 items-center  hidden '  >
        <Link className='' to={"/"}>
        <FaMeta/>
        </Link>
        <Link to={"/"}>
        <SiInstagram/>
        </Link>
        <Link to={"/"}>
       <FaXTwitter/>
        </Link>
         
         
      </div>
      <div className='grow text-xs md:text-sm lg:text-lg' >
        <p>We ship worldwide-Fast and reliable shipping!</p>
      </div>
      <div className='hidden md:block' >
        <p>+91 756283747</p>
      </div>
      </div>
    </div>

   </div>
   </>
  )
}

export default Topbar