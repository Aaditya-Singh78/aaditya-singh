import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './JS/header'
import Navigation from './JS/footer'
import logo from '../public/icon/logo.png';

const App = () => {
  useEffect(() => {
    document.title = "Aaditya Singh";
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = logo;
    }
  }, []);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Navigation/>
    </div>
  </React.StrictMode>,
  <App />
)
