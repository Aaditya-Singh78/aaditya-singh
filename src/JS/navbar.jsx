import React, { useEffect, useState } from 'react';
import logo from '../icon/logo.png';
import Behaviour from '../../Api/theme';
import SunIcon from './icon/sunIcon';
import MoonIcon from './icon/moonIcon';

//  Problem Statement: How to call About Section here based on Link in href. 
//  solution: I' thought, it would be through react-router

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