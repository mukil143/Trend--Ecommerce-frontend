import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollectionSection'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {

  const newArrivals =[
    {
      _id: "1",
      name:"Stylish Jacket",
      price: 320,
      images:[
        {
          url:""
        }
      ]
    }
  ]
  return (
    <>
      <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrival/>
        <h2 className='text-3xl text-center font-bold mb-4 mt-12 '>Best Seller</h2>
        <ProductDetails/>
      </div>
    </>
  )
}

export default Home