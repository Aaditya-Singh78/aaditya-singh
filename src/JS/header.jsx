import { useState, useEffect } from 'react';
import logo from '../icon/logo.png';
import '../css/app.css';

export default function Navbar() {

// for toggling theme either we can use css animations!
  

  return (
    <nav className='navbar' >
        <div className='m-1.5 p-1.5 flex items-center justify-end'>
        <div className='order-1 grow'>
        <ul className=''>
            <li>
            <a href="#" >
              <img src={logo} alt="" width={40.0}
                height={40.0} />
            </a>
            </li>
        </ul>
        </div>
        <div className='order-2 grow'>
          <ul className='flex space-x-4 items-center justify-end'>
              <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Article</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          <li >
          <button onClick={toggleTheme}>
                {}
              </button>
          </li>
          </ul>
        </div> 
        </div>
    </nav>
  );
}
