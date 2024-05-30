import React from 'react';

// import images
import unique1 from '../assets/img/unique1.png';
import unique2 from '../assets/img/unique2.png';

const Mission = () => {
  return (
    <section className='mb-12 lg:mb-24'>
      <div className="container mx-auto">
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            {/* images */}
            <div className='self-start polaroid-medium' data-aos='fade-down' data-aos-offset='400'>
              <img src={unique1} alt='' className='polaroid-img-medium' />
              <div className='tape'></div>
            </div>
            <div className='self-end polaroid-medium' data-aos='fade-up'>
              <img src={unique2} alt='' className='polaroid-img-medium' />
              <div className='tape'></div>
            </div>
          </div>
          {/* text */}
          <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0' data-aos='fade-left' data-aos-offset='400'>
            <h2 className='text-5xl font-bold mb-6'>Our Mission</h2>
            <p className='font-secondary mb-6'>
              Our mission is to empower women to embrace their unique beauty. <br />
              Don't let Society's Beauty Standards stop you from being YOU!
            </p>
            <button className='btn'>Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;