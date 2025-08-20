import React from 'react'
import { FaLinkedin, FaMeta,FaXTwitter  } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TbCircleLetterC } from "react-icons/tb";
import { Link } from 'react-router';



const Footer = () => {
  return (
    <>
   
    <div className='p-5 py-12 justify-evenly space-x-8 border-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-50 text-gray-700'>
        {/* Newsletter */}
        <div className='flex flex-col space-y-2'>
            <h2 className='text-lg font-semibold' >Newsletter</h2>
            <p className='font-light'>Be the first to hear about new products,
exclusive events, and online offers. </p>
            <p>Sign up and get 10% off your first order.</p>
            <form className='border  flex flex-row rounded w-fit'>
                <input type="text" placeholder='Enter your email...' id='submail'  className='outline-none flex  w-full m-0.5' />
                <button type='submit' className='p-2 w-fit rounded text-sm bg-black text-white'>Subcribe</button>
            </form>
        </div>
        {/* Shop links */}
        <div className='flex flex-col space-y-2'>
            <h2 className='text-lg font-semibold'>Shop</h2>
            <ul className='flex flex-col space-y-3'>
                <li><Link to={"#"}>Men's Top wear</Link></li>
                <li> <Link to={"#"}>Women's Top Wear</Link></li>
                <li><Link to={"#"}>Men's Bottom Wear</Link></li>
                <li><Link to={"#"}>Women's Bottom Wear</Link></li>
            </ul>
        </div>
        {/* Support */}
        <div className='flex flex-col space-y-2'>
            <h2 className='text-lg font-semibold'>Support</h2>
            <ul className='flex flex-col space-y-3'>
                <li><Link to={"#"}>Contact Us</Link></li>
                <li><Link to={"#"}>About Us</Link></li>
                <li><Link to={"#"}>FaQs</Link></li>
                <li><Link to={"#"}>Features</Link></li>
            </ul>
        </div>
        {/* Follow us */}
        <div className='flex flex-col space-y-4'>
            <h2 className='text-lg font-semibold'>Follow us</h2>
            <ul className='flex space-x-4 cursor-pointer'>
                <li><Link to={'#'}><FaMeta/></Link></li>
                <li><Link to={'#'}><SiInstagram/></Link></li>
                <li><Link to={'#'}><FaXTwitter/></Link></li>
                <li><Link to={'#'}><FaLinkedin/></Link></li>
            </ul>
            <div>
                <span className='font-light'>Call Us</span>
                <div className='flex items-center space-x-2'><span className='text-lg' ><MdOutlinePhoneInTalk/></span><span>08322-674-654</span></div>
            </div>
            </div>
    </div>
    <div className='flex justify-center p-5 border-t-1'>
        <p className='flex items-center space-x-1'><span className='text-lg'><TbCircleLetterC/></span><span> 2025, CompileTab.All Rights Reserved.</span></p>
    </div>
     </>
  )
}

export default Footer