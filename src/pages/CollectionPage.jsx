import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";



const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  const sidebarRef=useRef(null)
  const buttonRef=useRef(null)
  console.log(sidebarRef)

  const [isSidebarOpen,setisSidebarOpen]=useState(false);

  const toggleSidebar=()=>{
    setisSidebarOpen((prev)=> !prev);
  }

  const handleclickOutside=(e)=>{
    
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)&&buttonRef.current&&!buttonRef.current.contains(e.target)){
        setisSidebarOpen(false);
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown",handleclickOutside);
    

    return ()=>{
        document.removeEventListener("mousedown",handleclickOutside);
    }
    
  })

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Stylish Jacket",
          price: 320,
          images: {
            url: "https://picsum.photos/500/600?random=1",
            alt: "Stylish Jacket Image",
          },
        },
        {
          _id: 2,
          name: "Casual Sneakers",
          price: 150,
          images: {
            url: "https://picsum.photos/500/600?random=2",
            alt: "Casual Sneakers Image",
          },
        },
        {
          _id: 3,
          name: "Elegant Watch",
          price: 250,
          images: {
            url: "https://picsum.photos/500/600?random=3",
            alt: "Elegant Watch Image",
          },
        },
        {
          _id: 4,
          name: "Trendy Sunglasses",
          price: 80,
          images: {
            url: "https://picsum.photos/500/600?random=4",
            alt: "Trendy Sunglasses Image",
          },
        },
        {
          _id: 5,
          name: "Slim-Fit Easy-Iron Shirt",
          price: 45,
          images: {
            url: "https://picsum.photos/500/600?random=5",
            alt: "Slim-Fit Easy-Iron Shirt Image",
          },
        },
        {
          _id: 6,
          name: "Classic Leather Belt",
          price: 25,
          images: {
            url: "https://picsum.photos/500/600?random=6",
            alt: "Classic Leather Belt Image",
          },
        },
        {
          _id: 7,
          name: "Casual Chinos",
          price: 60,
          images: {
            url: "https://picsum.photos/500/600?random=7",
            alt: "Casual Chinos Image",
          },
        },
        {
          _id: 8,
          name: "Sporty Backpack",
          price: 70,
          images: {
            url: "https://picsum.photos/500/600?random=8",
            alt: "Sporty Backpack Image",
          },
        },
      ];
      setProducts(fetchProducts);
    }, 2000);
  }, []);
  return(
  <div className="flex flex-col  lg:flex-row">
    {/* Mobile filter button */}
    <button  ref={buttonRef} onClick={toggleSidebar} className=" lg:hidden  border p-2 flex space-x-2 justify-center items-center">
        <FaFilter className="mr-2"/>
        <span className="text-lg">Filter</span>
    </button>
    {/* Filter Sidebar */}
    <div  ref={sidebarRef} className={`${isSidebarOpen?"translate-x-0":"-translate-x-full"} lg:-translate-x-full fixed inset-y-0 bg-white w-64 z-50 left-0 overflow-y-auto transition-transform duration-300  `}>
        <FilterSidebar/>
    </div>
    <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* sort */}
        <SortOptions/>  
        {/* Product Grid */}
        <ProductGrid products={products} />
    </div>
  </div>
  );
};

export default CollectionPage;
