import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex  items-center justify-between bg-gray-500 gap-20 p-4'>
        <div className='font-bold text-2xl text-white'>
        <h4>HubCredo</h4>
        
        </div>
        
        <div className='flex flex-cols justify-center items-center gap-20'>
            <button className='bg-yellow-500 p-4 px-8 cursor-pointer rounded-md shadow-lg'>Login</button>
            <button  className='bg-blue-300 p-4 px-8 cursor-pointer rounded-md shadow-lg'>Cart</button>
        </div>
    </div>
  )
}

export default Navbar