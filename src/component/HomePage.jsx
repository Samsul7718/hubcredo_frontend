import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import { useCart } from '../context/CartContext'
import ProductCard from './ProductCard'
import Navbar from './Navbar'

const HomePage = () => {
    const [products,setProducts]=useState([])
    // const Navigate=useNavigate();
    // const {addToCart}=useCart()

    useEffect(()=>{
        fetch("http://localhost:3000/api/product")
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.log(err));
      
    },[])
      console.log("product from backend",products);
  return (
   <div className='p-0'>
    <div>
        <Navbar/>
    </div>
        <div className='flex items-center justify-between gap-10 md:gap-40 lg:gap-80 bg-sky-100'>
        {/* <div className='flex-1'></div> */}
        {/* <h2 className='text-2xl mb-2 font-bold '>Home Page</h2> */}
        {/* <Link to="/login">
         <button className='bg-yellow-300 rounded-lg shadow-md text-black w-20 p-3 m-4'>login</button>
        </Link> */}
           
        {/* <Link to='/cart'>
         <button className='bg-sky-400  rounded-lg shadow-md text-white w-20 p-4 m-4'>cart</button>
        </Link> */}
           
          </div>
            {/* <hr /> */}
            <div className='p-4 bg-sky-100'>
             <ProductCard item={products}/>
            </div>
    
    </div>
  )
}

export default HomePage


