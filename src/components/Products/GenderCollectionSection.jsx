import React from 'react'
import { Link } from 'react-router'

const image = [
  {
  src: "https://res.cloudinary.com/deif4iuok/image/upload/v1752416970/mens-collection_blqolq.webp",
  alt: "womens collection"   
}
,
{
  src: "https://res.cloudinary.com/deif4iuok/image/upload/v1752416971/womens-collection_yyll4l.webp",
  alt: "mens collection"
}]

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0' >
      <div className='container mx-auto flex flex-col md:flex-row gap-8'>
       <div className='relative flex-1'>
        <img src={image[1].src} alt={image[1].alt} className='w-full h-[700px] object-cover' />
        <div className='absolute bottom-8 left-3 opacity-95 p-4 bg-white'>
          <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's Collection</h2>
          <Link to={"/collections/all?gender=Women"} className='underline text-gray-900'>ShopNow</Link>
        </div>
       </div>
       <div className='relative flex-1'>
        <img src={image[0].src} alt={image[0].alt} className='w-full h-[700px] object-cover' />
        <div className='absolute  bottom-8 left-3 opacity-95 p-4 bg-white'>
          <h2 className='text-2xl font-bold text-gray-900 mb-3'>Men's Collection</h2>
          <Link to={"/collections/all?gender=Men"} className='underline text-gray-900'>ShopNow</Link>
        </div>
       </div>
      </div>
    </section>
  )
}

export default GenderCollectionSection