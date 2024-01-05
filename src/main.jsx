import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './JS/navbar'
import Social from './JS/social'
import './css/app.css'; 
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Navbar />
      <Social />
    </>
  </React.StrictMode>,
)
