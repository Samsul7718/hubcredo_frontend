import React, { useEffect, useState } from 'react'
// import { Link,useNavigate } from 'react-router-dom'
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
           
          </div>
            {/* <hr /> */}
            <div className='p-4 bg-sky-100'>
             <ProductCard item={products}/>
            </div>
    
    </div>
  )
}

export default HomePage


