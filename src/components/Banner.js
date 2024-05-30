import React from 'react';

// import components 
import Users from '../components/Users';

// import images
import Img from '../assets/img/banner-img.png';
import Img2 from '../assets/img/banner-img2.png';
import Img3 from '../assets/img/banner-img3.png';
import Img4 from '../assets/img/banner-img4.png';

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-between'>
          {/* text */}
          <div className='lg:w-1/2' data-aos='fade-down' data-aos-delay='500'>
            <h1 className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug font-primary'>
              We discover your true beauty
            </h1>
            <p className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>
              Tell us how you want to look and we'll provide a step-by-step formula to make that come true.
            </p>
            {/* btns */}
            <div className='flex items-center justify-center space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'>
              <button className='btn'>Get it now</button>
            </div>
            {/* additional images */}
            <div className='flex flex-wrap justify-center lg:justify-start space-x-2 mt-4'>
              <div className='polaroid-small rotate-3'>
                <img src={Img2} alt='' className='polaroid-img' />
              </div>
              <div className='polaroid-small rotate--2'>
                <img src={Img3} alt='' className='polaroid-img' />
              </div>
              <div className='polaroid-small rotate-1'>
                <img src={Img4} alt='' className='polaroid-img' />
              </div>
            </div>
          </div>
          {/* main image */}
          <div className='lg:w-1/2' data-aos='fade-up' data-aos-delay='800'>
            <div className='polaroid'>
              <img src={Img} alt='' className='polaroid-img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;