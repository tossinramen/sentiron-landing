import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import Nav from './Nav';

const Header = ({ setNavMobile }) => {
  return (
    <header 
      className='py-6 w-full fixed top-0 left-0 z-50 shadow-md' 
      style={{ backgroundColor: '#FCF9ED' }}
      data-aos='fade-down' 
      data-aos-duration='2000' 
      data-aos-delay='900'
    >
      <div className='w-full px-4 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <Link to="/" className='ml-4 lg:ml-8'> 
            <span className='font-all-round-gothic text-40'>SENTIRON</span>
          </Link>
          {/* nav */}
          <Nav />
          {/* nav mobile btn */}
          <HiMenu onClick={() => setNavMobile(prev => !prev)} 
          className='lg:hidden text-3xl text-black cursor-pointer' />
        </div>
      </div>
    </header>
  );
};

export default Header;
