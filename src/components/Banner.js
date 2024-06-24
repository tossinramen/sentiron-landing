import React from 'react';
import { Link } from 'react-router-dom';

// import images
import Img from '../assets/img/banner-img.png';
import Img2 from '../assets/img/banner-img2.png';

const Banner = () => {
  return (
    <section className='relative w-full flex justify-center items-center pt-16'>
      <div className='relative w-full'>
        <div className='relative'>
          <img src={Img} alt='Banner' className='w-full h-auto' />
          <div className='absolute inset-0 flex items-center justify-start p-4' style={{ top: '85%', left: '0%', transform: 'translateY(-50%)' }}>
            <Link to='/coming-soon'>
              <img src={Img2} alt='Overlay' className='w-1/4 h-auto mr-4' />
            </Link>
            <Link to='/coming-soon' className='ml-[-40rem]'> {/* Adjust the left margin as needed */}
              <span style={{ textDecoration: 'underline', color: '#2B2B2B' }}>JOIN THE ANDROID WAITLIST</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
