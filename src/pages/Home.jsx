import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollectionSection'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturedSection from '../components/Products/FeaturedSection'

const placeholderProducts = [
  {
      _id:1,
      name:"Stylish Jacket",
      price: 320,
      images:
        {
          url:"https://picsum.photos/500/600?random=1",
          alt:"Stylish Jacket Image"  
        }
      
    },
    {
      _id:2,
      name:"Casual Sneakers",
      price: 150,
      images:
        {
          url:"https://picsum.photos/500/600?random=2",
          alt:"Casual Sneakers Image"
        }
      
    },
    {
      _id:3,
      name:"Elegant Watch",
      price: 250,
      images:
        {
          url:"https://picsum.photos/500/600?random=3",
          alt:"Elegant Watch Image"
        }
      
    },
    {
      _id:4,
      name:"Trendy Sunglasses",
      price: 80,
      images:
        {
          url:"https://picsum.photos/500/600?random=4",
          alt:"Trendy Sunglasses Image"
        }
      
    },
    {
      _id:5,
      name:"Slim-Fit Easy-Iron Shirt",
      price: 45,
      images:
        {
          url:"https://picsum.photos/500/600?random=5",
          alt:"Slim-Fit Easy-Iron Shirt Image"
        }
      
    },
    {
      _id:6,
      name:"Classic Leather Belt",
      price: 25,
      images:
        {
          url:"https://picsum.photos/500/600?random=6",
          alt:"Classic Leather Belt Image"
        }
      
    },
    {
      _id:7,
      name:"Casual Chinos",
      price: 60,
      images:
        {
          url:"https://picsum.photos/500/600?random=7",
          alt:"Casual Chinos Image"
        }
      
    },
    {
      _id:8,
      name:"Sporty Backpack",
      price: 70,
      images:
        {
          url:"https://picsum.photos/500/600?random=8",
          alt:"Sporty Backpack Image"
        }
      
    },
]
const Home = () => {

  
  return (
    <>
      <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrival/>
        <h2 className='text-3xl text-center font-bold mb-4 mt-12 '>Best Seller</h2>
        <ProductDetails/>
        <div className='container mx-auto px-4'>
          <h2 className=' text-2xl  md:text-3xl font-bold text-center mb-4'>Top Wears For Women</h2>
          <ProductGrid products={placeholderProducts}/>
        </div>
        <FeaturedCollection/>
        <FeaturedSection/>
      </div>
    </>
  )
}

export default Home