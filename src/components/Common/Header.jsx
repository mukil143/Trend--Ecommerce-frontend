import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'
import CartDrawer from '../Layout/CartDrawer'

const Header = () => {
  return (
    <>
    <section className='shadow-lg' >
        <Topbar/>
        <Navbar/>
        <CartDrawer/>
        {/* <Navbar/>
        <CartDrawer/> */}
    </section>
    </>
  )
}

export default Header