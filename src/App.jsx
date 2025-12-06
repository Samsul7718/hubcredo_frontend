import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './component/HomePage'
import Login from './component/Login'
import SignUp from './component/Signup'
import Cart from './component/Cart'

function App() {
 

  return (
<div className='App'>

 <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
 </Router>
</div>
  
  )
}

export default App
