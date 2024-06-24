import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12'>
        <li className='nav-link'>
          <NavLink 
            to="/about-us"
            className={({ isActive }) => isActive ? 'active-nav-link' : 'inactive-nav-link'}
          >
            ABOUT US
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink 
            to="/experts"
            className={({ isActive }) => isActive ? 'active-nav-link' : 'inactive-nav-link'}
          >
            EXPERTS
          </NavLink>
        </li>
        <li className='btn'>
          <NavLink 
            to="/signup-signin" 
            className='text-white'
          >
            GET SENTIRON
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
