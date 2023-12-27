import { useState, useEffect } from 'react';
import logo from '../icon/logo.png';
import '../css/app.css';

export default function Navbar() {

// study in react about usestate and useeffect.
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply theme based on isDarkMode state
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    <nav >
        <div className='m-1.5 p-1.5  border-2 rounded border-black '>
        <ul className='flex flex-auto space-x-7 items-center justify-start'>
            <li>
            <a href="#" >
              <img src={logo} alt="" width={40.0}
                height={40.0} />
            </a>
            </li>
            <span className='flex  space-x-4 items-center'>
              <li className='justify-end'>
              <a href="#">About</a>
            </li>
            <li className='justify-end'>
              <a href="#">Project</a>
            </li>
            <li className='justify-end'>
              <a href="#">Article</a>
            </li>
            <li className='justify-end'>
              <a href="#">Contact</a>
            </li>
          <li className='justify-end'>
          <button onClick={toggleTheme}>
                Toggle Theme
              </button>
            
          </li>
            </span>
            
        </ul>
        </div>
    </nav>
  );
}
