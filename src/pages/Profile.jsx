import React from 'react'
import { Link } from 'react-router'
import MyOrdersPage from './MyOrdersPage'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className="container mx-auto grow">
            <div className="flex mt-16 flex-col  md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                {/* Left Section */}
                <div className='p-6 w-1/2 h-fit shadow-md rounded-lg md:w-1/3 lg:w-1/4'> 
                <div className='flex flex-col space-y-4'>
                    <h2 className="text-2xl md:text-3xl font-bold"> Admin User </h2>
                    <h2 className=' text-lg text-gray-600'>admin@gmail.com</h2>
                    <Link>
                    <button  className='bg-red-500 cursor-pointer text-white w-full text-center px-4 py-2 rounded-lg'>Logout</button>
                    </Link>
                </div>
                </div>

                {/* Right section */}
                <div className="w-full md:w-2/3 lg:w-3/4">
                <MyOrdersPage/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile