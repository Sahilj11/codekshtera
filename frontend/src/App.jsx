import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Routes  } from "react-router-dom"
import { Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import RecuratorDashboard from "./components/RecutorDashboard"
import UserDashboard from "./components/UserDashboard"
import { Provider } from "react-redux"
import { store } from "./store/store"
import MainDashboard from "./components/MainDashboard"
function App() {
  return (
    <>
       <Provider store={store}>
      <div className=' h-screen w-screen overflow-x-hidden'>
        
        <Navbar/>
        <Routes>
        <Route path="/" element={<><Home /><MainDashboard /></>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recurator-dashboard" element={<RecuratorDashboard/>}/>
          <Route path="/user-dashboard" element={<UserDashboard/>}/>
        </Routes>
      </div>
      </Provider>
    </>
  )
}

export default App
