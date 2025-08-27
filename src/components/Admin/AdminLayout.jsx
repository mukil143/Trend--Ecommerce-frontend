import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router';
const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
      {/* Mobile Header */}
      <div className="flex items-center md:hidden  p-4 bg-gray-900 text-white z-50">
        <button onClick={toggleSidebar} className="  focus:outline-none">
          <FaBars size={24}/>
        </button>
          <h1 className='ml-4 text-xl font-medium'  >Admin Dashboard</h1>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
         <div onClick={toggleSidebar} className="bg-black opacity-50 fixed inset-0 z-40 md:hidden">
      </div>
      )}
      {/* Sidebar */}
      <div className={`absolute top-0 left-0    w-64   min-h-screen md:relative bg-gray-900 text-white z-60 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block md:z-20`}>
        <AdminSidebar/>
      </div>

      {/* Main Content     */}
      <div className="p-6 flex-grow overflow-x-auto bg-gray-100">
        {/* Your main content */}
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout