import React, { useEffect, useState } from 'react';
import logo from '../icon/logo.png';
import SunIcon from './icon/sunIcon';
import MoonIcon from './icon/moonIcon'

const Navbar = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = () => {
      setTheme(getBrowserTheme());
    };

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getThemeIcon = () => {
    // console.log('success');
    return theme === 'dark' ? <SunIcon /> : <MoonIcon />;
  };

  return (
    <nav className={`m-1.5 p-1.5 flex header ${theme}-theme`}>
      <div className='order-1'>
        <ul className='flex items-center justify-end'>
          <li>
            <a href="#">
              <img src={logo} alt="" width={40.0} height={40.0} />
            </a>
          </li>
        </ul>
      </div>
      <div className='order-2 grow'>
        <ul className='flex space-x-4 items-center justify-end'>
          <li>
            <a href="">Aaditya Singh</a>
          </li>
        </ul>
      </div>
      <div className='order-3 grow'>
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
          <li>
            <button onClick={toggleTheme}>
              {getThemeIcon()}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme ? storedTheme : getBrowserTheme();
};

const getBrowserTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default Navbar;
