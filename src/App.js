import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import CoreMission from './components/CoreMission';
import Explore from './components/Explore';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import the Privacy Policy component
import ComingSoon from './components/ComingSoon'; // Import the ComingSoon component

// Import animate on scroll 
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <Router>
      <div className='relative overflow-hidden w-full'>
        <Header setNavMobile={setNavMobile} />
        <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
          <NavMobile setNavMobile={setNavMobile} />
        </div>
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <CoreMission />
            <Explore />
          </>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add Privacy Policy route */}
          <Route path="/coming-soon" element={<ComingSoon />} /> {/* Add ComingSoon route */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
