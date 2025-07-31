import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'
import CartDrawer from '../Layout/CartDrawer'

const Header = () => {
  return (
    <>
        <Topbar/>
    <section className='shadow-lg sticky top-0 z-50 bg-white ' >
        <Navbar />
        <CartDrawer/>
    </section>
    </>
  )
}

export default Header