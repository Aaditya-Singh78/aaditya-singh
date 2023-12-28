import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './JS/header'
import Navigation from './JS/footer'
import Content from './JS/content';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='layout'>
      <Navbar />
      <Content />
      <Navigation/>
    </div>
  </React.StrictMode>,
  <App />
)
