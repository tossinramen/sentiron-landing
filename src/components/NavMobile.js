import React from 'react';
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const NavMobile = ({ setNavMobile }) => {
  return (
    <div className='lg:hidden fixed top-0 left-0 w-full h-full z-50 bg-[#F5F5F5]'>
      <IoClose
        onClick={() => setNavMobile(false)}
        className='text-3x1 absolute left-4 top-6 cursor-pointer text-black'
      />
      <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary'>
        <li className='nav-link'>
          <NavLink
            to="/about-us"
            className={({ isActive }) => isActive ? 'active-nav-link' : 'inactive-nav-link'}
            onClick={() => setNavMobile(false)}
          >
            ABOUT US
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            to="/experts"
            className={({ isActive }) => isActive ? 'active-nav-link' : 'inactive-nav-link'}
            onClick={() => setNavMobile(false)}
          >
            EXPERTS
          </NavLink>
        </li>
        <li className='btn'>
          <a href="#" className='text-white' onClick={() => setNavMobile(false)}>GET SENTIRON</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
