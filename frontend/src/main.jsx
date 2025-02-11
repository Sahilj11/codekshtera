<<<<<<< HEAD
import { StrictMode } from 'react'
=======
import React from 'react'
>>>>>>> ef1a4f0 (Frontend Code Organzie)
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
