import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from'sonner'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'
import Checkout from './components/Cart/Checkout'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import OrderDetailsPage from './pages/OrderDetailsPage'
// import MyOrderPage from './pages/MyOrderPage'
import MyOrdersPage from './pages/MyOrdersPage'
import AdminLayout from './components/Admin/AdminLayout'
import AdminHomePage from './components/Admin/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import EditProductPage from './components/Admin/EditProductPage'
import OrdersInfopage from './components/Admin/OrdersInfopage'

function App() {

  return (
    <>
    <Toaster position='top-right' />
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home/>} />
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='collections/:collection' element={<CollectionPage/>}/>
      <Route path='product/:id' element={<ProductDetails/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='order-confirmation' element={<OrderConfirmationPage/>}/>
      <Route path='order/:id' element={<OrderDetailsPage/>}/>
      <Route path='my-orders' element={<MyOrdersPage/>}/>
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
       <Route index element={<AdminHomePage/>}/>
       <Route path='users' element={<UserManagement/>}/>
       <Route path='products' element={<ProductManagement/>}/>
       <Route path='products/:id/edit' element={<EditProductPage/>}/>
       <Route path='orders' element={<OrdersInfopage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
