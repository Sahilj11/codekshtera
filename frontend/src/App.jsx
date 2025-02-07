import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Routes  } from "react-router-dom"
import { Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
function App() {
  return (
    <>
      <div className=' h-screen w-screen overflow-x-hidden'>

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
