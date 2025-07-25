import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from 'react-router';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassWord]=useState("");
    console.log({email,password})
    const [isHide,setishide]=useState(true)
     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("User Register",{email,password})
    }
  return (
    <section className='flex '>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 ">
        <form  onSubmit={handleSubmit} className='w-full max-w-md mx-auto bg-white p-8 rounded-lg border border-gray-200 shadow'>
            <div className="flex flex-col  justify-center ">
                <h2 className="text-xl text-center font-medium mb-4">Trendé</h2>
                <h2 className='text-2xl font-bold text-center  mb-4'>Hey there!👋</h2>
                <p className='text-center mb-6'>
                    Enter your username and password to Login.
                </p>

                <h2 className='text-md font-bold mb-1' >Email</h2>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your email address' className='border focus-within:border-blue-600 border-gray-100 outline-none rounded py-2 px-2 mb-4  ' />
                <h2 className='text-md font-bold mb-1' >Password</h2>

                <div className=' border focus-within:border-1 focus-within:border-blue-600  rounded py-2 px-2 mb-4 border-gray-200 flex items-center transform transition-transform duration-500 '>
                <input type={`${isHide ?"password":"text"}`} value={password} onChange={(e)=>{setPassWord(e.target.value)}} placeholder='Enter your password'  className=' w-full outline-none ' />
                <span className='text-xl cursor-pointer ' onClick={()=>{setishide(!isHide)}} >{isHide?<IoEyeOutline/>:<IoEyeOffOutline/>}</span>
                </div>

                <button type='submit' className='bg-black text-white w-full py-2 font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-150 cursor-pointer mb-6'>Sign In</button>
                <h2 className='text-center'>Don't have an account? <Link to={'/register'} className='text-sky-500'>Register</Link></h2>
            </div>
        </form> 
        </div>


        <div className='hidden md:block w-1/2 bg-gray-800'>
        <div className="h-full flex flex-col justify-center items-center">
            <img  className='h-[710px] w-full object-cover' src="https://res.cloudinary.com/deif4iuok/image/upload/v1752416971/login_dpd2md.webp" alt="" />
        </div>
        </div>
    </section>
  )
}

export default Login