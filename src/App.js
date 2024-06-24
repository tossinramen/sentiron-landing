import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import CoreMission from './components/CoreMission';
import Explore from './components/Explore';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import ComingSoon from './components/ComingSoon';
import Experts from './components/Experts';
import SignupSignin from './components/SignupSignin';

import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <Router>
      <div className='relative overflow-hidden w-full'>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <CoreMission />
            <Explore />
          </>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/signup-signin" element={<SignupSignin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
