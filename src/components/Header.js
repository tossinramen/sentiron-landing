import React from 'react';

// import components
import Logo from '../assets/img/logo.png';
import Nav from './Nav';

// import icons 
import { HiMenu } from 'react-icons/hi';

const Header = ({ setNavMobile }) => {
  return (
    <header className='py-6' data-aos='fade-down' data-aos-duration='2000' data-aos-delay='900'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <a href='#' className='ml-0 lg:-ml-11'> {/* Adjusted margin to move logo left */}
            <img className='h-[120px]' src={Logo} alt='' /> {/* Updated height */}
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile btn */}
          <HiMenu onClick={() => setNavMobile(true)} 
          className='lg:hidden text-3xl text-white cursor-pointer' /> {/* Corrected text size class to text-3xl */}
        </div>
      </div>
    </header>
  );
};

export default Header;