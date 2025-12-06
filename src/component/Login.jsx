import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
  const [values,setValues]=useState({
    email:"",
    mobile:"",
    
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  const validateEmail=(email)=>{
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  }
  const handleSubmit=async(e)=>{
     e.preventDefault();
     if(!validateEmail(values.email)){
      setError("Only Gmail are allowed !");
      return;
     }
     setValues({name:"",email:"",mobile:""})
     console.log("values",values)

    //  Add new user to firebase
//    try {
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
          Login
        </h2>
        <form onSubmit={handleSubmit}>
        
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
                Mobile :
            </label>
             <input 
             type="number" 
             name="mobile" 
             onChange={handleChange}
             value={values.mobile}
             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 capitalize" 
             placeholder='Enter your mobile number'
             required
             />
          </div>
          
           {/* Submit Button */}
          <div className="flex items-center justify-center gap-4 py-5">
            <Button
              variant="contained"
              type="submit"
              className="w-[60%] !text-black py-5 px-2 rounded-lg !bg-yellow-300 hover:!bg-yellow-500 transition duration-200"
            >
              Continue
            </Button>
            <h6>or</h6>
            <Link to="/signup">
            <div className='bg-white p-2 rounded-lg px-2 w-18 hover:bg-yellow-100'>
              <span className='!text-yellow '>SignUp</span>
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

export default Login