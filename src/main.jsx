import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './JS/navbar'
import Social from './JS/social'
import Content from './JS/content'
import './css/app.css'; 
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
    {/* Navbar and Social Navigation based Footer should be reused at every page! */}
      <Navbar />
      <Content />
      <Social />
    </>
  </React.StrictMode>,
)
