import React from 'react'

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from "axios";

const SignUp = () => {
    const [values,setValues]=useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    gender:"",
  })
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  const validateEmail = (email) => {
    // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
     if(!validateEmail(values.email)){
      setError("Only Gmail are allowed !");
      return;
     }
     
     //   add new user in mongodb 
     try{
       const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/signup`,values);
       alert(response.data.message);
       setValues({name:"",email:"",mobile:"",password:"",gender:""});
       navigate("/");
// const result = await axios.post(
//   "https://admin167.app.n8n.cloud/webhook/46f6a3bf-41e2-414e-87ae-4d4b64fb96a0",
//   {
//     email: values.email,
//     name: values.name
//   }
// );

console.log("Webhook triggered:", result.data);

    }catch(error){
      console.log(error.response.data.message);
    }
//      try {
//     const response= await addDoc(collection(DiBackbone,"users"),values)
//     if(Response.id){
//       navigate("/")
//     }
//    } catch (error) {
//     console.log(error)
//    } 
  }
  return (
   <div className='flex min-h-screen pb-25 items-center justify-center bg-sky-100 '>
        <div className='w-full max-w-md bg-cyan-200  p-8 shadow-lg rounded-lg'>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {" "}
          SignUp
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label className='text-gray-700 font-medium mb-1'>
                Name :
            </label>
             <input 
             type="text" 
             name="name" 
             onChange={handleChange}
             value={values.name}
             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 capitalize" 
             placeholder='Enter your name'
             required
             />
          </div>
            <div className='mb-2'>
            <label className='text-gray-700 font-medium mb-1'>
                Email :
            </label>
             <input 
             type="email" 
             name="email" 
             onChange={handleChange}
             value={values.email}
             className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 ${
                error ? "border-red-500 ring-red-500" : "focus:ring-blue-500"
              }`}
             placeholder='Email Address'
             required
             />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
            <div className='mb-2'>
            <label className='text-gray-700 font-medium mb-1'>
                Password :
            </label>
             <input 
             type="password" 
             name="password" 
             onChange={handleChange}
             value={values.password}
             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 capitalize" 
             placeholder='Enter your password'
             required
             />
          </div>
            <div className='mb-2'>
            <label className='text-gray-700 font-medium mb-1'>
                Mobile :
            </label>
             <input 
             type="mobile" 
             name="mobile" 
             onChange={handleChange}
             value={values.mobile}
             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 capitalize" 
             placeholder='Enter your name'
             required
             />
          </div>
            <div className='mb-2'>
            <label className='text-gray-700 font-medium mb-1'>
                Gender :
            </label>
             <select 
             type="gender" 
             name="gender" 
             onChange={handleChange}
             value={values.gender}
             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 capitalize" 
             placeholder='Enter your name'
             required
             >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
           {/* Submit Button */}
          <div className="flex items-center justify-center gap-4 py-5">
            <Button
              variant="contained"
              // color="success"
              type="submit"
              className="w-[60%] !text-black py-5 px-2 rounded-lg !bg-yellow-300 hover:!bg-yellow-500 transition duration-200"
            >
              Continue
            </Button>
            <h6>or</h6>
            <Link to="/">
            <div className='bg-white p-2 rounded-lg px-2 w-18 hover:bg-yellow-100'>
              <span className='!text-yellow '>Login</span>
            </div>
             </Link>
            <div>
            </div>
          </div>

        </form>
        </div>
    </div>
  )
}

export default SignUp