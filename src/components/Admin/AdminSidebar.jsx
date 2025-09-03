import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { BsDatabaseFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";
const AdminSidebar = () => {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/');

    }
    const adminLinks = [
        {
            name: 'user',
            path: '/admin/users',
            icon:<FaUsers/>
        },
        {
            name: 'products',
            path: '/admin/products',
            icon:<AiFillProduct/>
        },
        {
            name: 'orders',
            path: '/admin/orders',
            icon:<BsDatabaseFill/>

        },
        {
            name:'Shop',
            path:'/',
            icon:<BsShop />

        }
    ]
  return (
    <div className="p-6 w-full">
        <h2 className="text-2xl font-semibold mb-6">Trende</h2>
        <h2 className='text-xl font-medium text-center mb-6'>Admin Dashbord</h2>
        <ul className='w-full'>
            {adminLinks.map((link)=>(
                <li key={link.name} className="mb-2">
                    <NavLink to={link.path} className= {({isActive})=>isActive?`flex bg-gray-700 text-white items-center text-lg py-3 px-4 rounded space-x-2 font-medium hover:text-blue-600`:`flex  items-center text-lg text-gray-300 font-medium hover:bg-gray-700 py-3 px-4 rounded space-x-2 hover:text-white`} >
                    <span className='inline-block'>{link.icon}</span><span>{link.name.charAt(0).toUpperCase() + link.name.slice(1)}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
        <div className="mt-6">
            <button onClick={handleLogout} className='bg-red-500 text-white w-full py-2 rounded font-medium flex items-center justify-center text-lg cursor-pointer hover:bg-red-600 '>
                <FaSignOutAlt className='inline-block mr-2'/>
                <span>Logout</span>
                </button>
        </div>
    </div>
  )
}

export default AdminSidebar