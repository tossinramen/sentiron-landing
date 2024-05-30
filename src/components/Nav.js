import React from 'react';

const Nav = () => {
  return <nav className='hidden lg:flex'>

    <ul className='flex items-center space-x-12 font-secondary'>
      <li className='nav-link'><a href="#">Aura</a></li>
      <li className='nav-link'><a href="#">Community</a></li>
      <li className='nav-link'><a href="#">Contact</a></li>
      <li className='btn'><a href="#">Get Sentiron</a></li>
    </ul>
  </nav>;
};

export default Nav;
