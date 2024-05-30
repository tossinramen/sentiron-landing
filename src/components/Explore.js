import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
      <div className="container mx-auto h-full">
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3 className='text-3xl font-semibold mb-8' data-aos='fade-right' data-aos-offset='1100'>
            Stay up to date <br /> with Sentiron
          </h3>
          <p className='max-w-xs mb-12' data-aos='fade-right' data-aos-offset='1300'>
            {/* You can add any additional text here */}
          </p>
          {/* Social Media Icons */}
          <div className='flex space-x-4 mb-8'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
            </a>
            <a href="mailto:info@sentiron.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-white" />
            </a>
          </div>
          {/* form */}
          <form
            className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
            data-aos='fade-up' data-aos-offset='200'>
            <input
              className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md'
              type="text" placeholder="Your email"
            />
            <button className='btn'>Send</button>
          </form>
          {/* Copyright Text */}
          <p className='mt-4 text-sm text-white'>
            © 2024 BY SENTIRON
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explore;