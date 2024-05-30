import React, { useState, useEffect } from 'react';
// import components
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Mission from './components/Mission';
import Download from './components/Download';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Explore from './components/Explore';

//import animate on scroll 
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,

    });
  });

  return (
    <div className='relative overflow-hidden before:content-[""] before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile} />
      <Banner />
      {/* mobile nav */}
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Mission />
      <Download />
      <Services />
      <FAQ />
      <Explore />
    </div>
  );
};

export default App;