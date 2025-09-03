import React, { useState } from "react";

const EditProductPage = () => {
  const [colorInput, setColorInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [productdata, setproductdata] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    SKU: "",
    sizes: [],
    colors: [],
    category: "",
    images: [
      {
        url: "https://picsum.photos/500/600?random=1",
        alt: "",
      },
      {
        url: "https://picsum.photos/500/600?random=2",
        alt: "",
      },
    ],
    materials: [],
    collections: "",
    brand: "",
    gender: "",
  });


  const handleImageUpload=async(e)=>{
  
    console.log(e.target.files[0]);
  }
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setproductdata((prevdata)=> ({...prevdata,[name]:value}) )
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setproductdata((prevdata)=>({...prevdata,colors:[...prevdata.colors,colorInput],sizes:[...prevdata.sizes,sizeInput]}))
    console.log(productdata);
  }
  return (
    <div className="max-w-5xl mx-auto p-4 shadow-md rounded-lg ">
      <h1 className="text-2xl sm:text-3xl  font-bold mb-6  ">Edit Product</h1>
      <form onSubmit={handleSubmit} >
        {/* Product Name */}
        <label className="flex flex-col mb-4" htmlFor="productname">
            <span className="font-semibold mb-2">Product Name</span>
          <input
            type="text"
            id="productname"
            name="name"
            className=" font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            value={productdata.name}
            onChange={handleChange}
          />
        </label>
        {/* Product Description */}
        <label className="flex flex-col mb-4" htmlFor="productdescription">
            <span className="font-semibold mb-2">Description</span>
          <textarea
            type="text"
            name="description"
            id="productdescription"
            className=" resize-none  h-32 font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            value={productdata.description}
            onChange={handleChange}
          />
        </label>
        {/* Product price */}
        <label className="flex flex-col mb-4" htmlFor="productprice">
            <span className="font-semibold mb-2">Price</span>
          <input
            type="text"
            id="productprice"
            name="price"
            className=" font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            value={productdata.price}
            onChange={handleChange}
          />
        </label>

        {/* prodect count */}
        <label className="flex flex-col mb-4" htmlFor="productcount">
            <span className="font-semibold mb-2">Count in Stock</span>
          <input
            type="number"
            id="productcount"
            name="countInStock"
            className=" font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            value={productdata.countInStock}
            onChange={handleChange}
          />
        </label>

        {/* product SKU */}
        <label className="flex flex-col mb-4" htmlFor="productsku">
            <span className="font-semibold mb-2">SKU</span>
          <input
            type="text"
            id="productsku"
            name="SKU"
            className=" font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            value={productdata.SKU}
            onChange={handleChange}
          />
        </label>
        {/* product size */}
        <label className="flex flex-col mb-4" htmlFor="productsize">
            <span className="font-semibold mb-2">Size (separated by commas)</span>
          <input
            type="text"
            id="productsize"
            className=" font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            value={sizeInput.toUpperCase()}
            onChange={(e) => {
              const { value } = e.target;
              setSizeInput(value);
              setproductdata({
                ...productdata,
                sizes: value.toUpperCase().split(",").map((size) => size.trim()).filter((size) => size !== ""),
              });
            }}
          />
        </label>
        {/* product color */}
        <label className="flex flex-col mb-4" htmlFor="productcolor">
            <span className="font-semibold mb-2">Color</span>
          <input
            type="text"
            id="productcolor"
            className=" font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            value={colorInput.toUpperCase()}
            onChange={(e) => {
              const { value } = e.target;
              setColorInput(value);
              setproductdata({
                ...productdata,
                colors: value.toUpperCase().split(",").map((color) => color.trim()).filter((color) => color !== ""),
              });
            }}
          />
        </label>
        {/* product image */}
        <label className="flex flex-col mb-4" htmlFor="productcolor">
            <span className="font-semibold mb-2">Upload image</span>
           
          <input
            type="file"
            id="productcolor"
            className=" mb-2 font-medium border-2 border-gray-200 focus-within:outline-1 focus-within:outline-gray-400 w-full p-2  rounded"
            onChange={handleImageUpload}
          />
           <div className="flex space-x-2 mb-4 ">
              {productdata.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt || 'Product Image'}
                  className=" shadow-md rounded-md w-20 h-20 object-cover" />
              ))}
            </div>
        </label>

        <div className="max-w-full">
        <button
          type="submit"
          className="bg-green-500 w-full text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Update Product
        </button>
        </div>

      </form>
    </div>
  );
};

export default EditProductPage;
