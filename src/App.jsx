import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './component/HomePage'
import Login from './component/Login'
import SignUp from './component/Signup'
import Cart from './component/Cart'

function App() {
    const [user, setUser] = useState(null);

  return (
<div className='App'>
 <Router>
    <Routes>
      <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
      <Route path='/signup' element={<SignUp/>}/>
        <Route path="/login" element={<Login onLogin={setUser} />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
 </Router>
</div>
  
  )
}

export default App
