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
        <li className='nav-link'><a href="#">EXPERTS</a></li>
        <li className='btn'><a href="#" className='text-white'>GET SENTIRON</a></li> 
      </ul>
    </nav>
  );
};

export default Nav;
