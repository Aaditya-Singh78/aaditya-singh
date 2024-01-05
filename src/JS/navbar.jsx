import React, { useEffect, useState } from 'react';
import logo from '../icon/logo.png';
import SunIcon from './icon/sunIcon';
import MoonIcon from './icon/moonIcon';

let name = 
    <li>
      <a href="#">Aaditya Singh</a>
    </li>

const web = 
    <li>
      <a href="#">
        <img src={logo} alt="" width={40.0} height={40.0} />
      </a>
    </li>

const pages = [
    {title:'About', href: '#'},
    {title: 'Project', href: '#'},
    {title: 'Article', href: '#'},
    {title: 'Contact', href: '#'}
];

const listItem = pages.map(pages =>
    <li>
        <a href={pages.href}>{pages.title}</a>
    </li>
)

function Behaviour(){
/*
  Problem stmt: Create a function that know about Current theme of browser or os. 
  if it is light theme: change css property according to it. or, else if it is dark 
  theme: change property according to it. 
*/

// -------------------------------------------------------------------------------
}

export default function Navbar(){
  return (
    <nav className={'m-1.5 p-1.5 flex header'}>
      <div className='order-1'>
        <ul className='flex items-center justify-end'>
          {web}
        </ul>
      </div>
      <div className='order-2 grow'>
        <ul className='flex space-x-4 items-center justify-end'>
          {name}
        </ul>
      </div>
      <div className='order-3 grow'>
        <ul className='flex space-x-4 items-center justify-end'>
          {listItem}
        </ul>
      </div>
    </nav>
  );
};