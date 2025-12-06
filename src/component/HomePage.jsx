import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <div>
            <div className='w-full'>
                <Navbar/>
            </div>
           
        </div>
        <div>card</div>
    </div>
  )
}

export default HomePage