import React from 'react';
import Header from './Header';
import Explore from './Explore';
import Banner from './Banner';

const ComingSoon = () => {
  return (
    <>
      <Header />
      <Banner />
      <section 
        className='mt-20 px-4 lg:px-10 mb-20 flex flex-col items-center justify-center' 
        style={{ 
          background: 'url(/path/to/your/background/image.jpg) no-repeat center center fixed', 
          backgroundSize: 'cover', 
          minHeight: '60vh' 
        }}
      >
        <div className='container mx-auto w-full px-4 text-center'>
          <h2 
            className='text-[55px] font-normal' 
            style={{ 
              fontFamily: 'bodoni-urw, serif',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
            }}
          >
            COMING <span className='font-bodoni-light'>SOON</span>
          </h2>
          <p 
            className='text-[20px] mt-4' 
            style={{ 
              fontFamily: 'acumin-pro, sans-serif', 
              color: '#fff',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)' 
            }}
          >
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </section>
      <Explore />
    </>
  );
};

export default ComingSoon;
