import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
function App() {
  return (
    <>
      <div className=' h-screen w-screen overflow-x-hidden'>
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
