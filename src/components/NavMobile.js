import React from 'react';

// import icons
import {IoClose} from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => {
  return(
    <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
      <IoClose
       onClick={() => setNavMobile(false)} 
       className ='text-3x1 absolute left-4 top-6 cursor-pointer' />
      <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary'>
      <li className='text-lg'><a href="#">Aura</a></li>
      <li className='text-lg'><a href="#">Community</a></li>
      <li className='text-lg'><a href="#">Contact</a></li>
      <li className='btn'><a href="#">Get Sentiron</a></li>
    </ul>
    </nav>
  );
};

export default NavMobile;
