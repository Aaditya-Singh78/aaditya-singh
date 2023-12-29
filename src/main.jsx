import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './JS/navbar'
import Social from './JS/social'
import logo from './icon/logo.png';
import './css/app.css';  

const App = () => {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = logo;
    }
  }, []);
} 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Social />
    </div>
  </React.StrictMode>,
  <App />
)
