// Explore.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-0 bg-[#2B2B2B] text-white w-full'>
      <div className="w-full h-full">
        <div className='h-full p-14 flex flex-col items-start justify-center'>
          <h3 className='text-[49px] font-normal text-white'>
            STAY UP TO DATE <br /> WITH SENTIRON
          </h3>
          {/* Social Media Icons */}
          <div className='flex space-x-4 mb-8 mt-8'>
            <a href="https://www.instagram.com/sentiron.official/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
            </a>
            <a href="https://www.linkedin.com/company/sentiron/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
            </a>
            <a href="mailto:info@sentiron.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-white" />
            </a>
          </div>
          <p className='text-white mb-4'>CONNECT WITH US</p>
          {/* form */}
          <form
            className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
            data-aos='fade-up' data-aos-offset='200'>
            <input
              className='bg-[#2B2B2B] border-b border-white text-white h-12 px-4 outline-none w-full'
              type="text" placeholder="YOUR EMAIL"
            />
            <button className='text-white'>SEND</button>
          </form>
          {/* Bottom Section */}
          <div className='flex flex-col items-start mt-8 w-full'>
            <div className='flex flex-col lg:items-end items-start w-full mb-4 space-y-2 lg:space-y-0 lg:space-x-0 text-gray-400'>
              <p className='text-gray-400'>&copy; Copyright 2024 Sentiron LLC</p>
              <Link to='/terms' className='hover:underline text-gray-400'>Term</Link>
              <Link to='/privacy-policy' className='hover:underline text-gray-400'>Privacy Policy</Link>
            </div>
            <span className='font-all-round-gothic text-40'>SENTIRON</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
