import React from 'react';
import Header from './Header';
import Explore from './Explore';
import Banner from './Banner';

const ComingSoon = () => {
  return (
    <>
      <Header />
      <Banner />
      <section className='mt-20 px-4 lg:px-10 mb-20'> {/* Added mb-20 for extra whitespace */}
        <div className='container mx-auto w-full px-4'>
          <h2 className='text-[55px] font-normal text-left' style={{ fontFamily: 'bodoni-urw, serif' }}>
            COMING <span className='font-bodoni-light'>SOON</span>
          </h2>
        </div>
      </section>
      <Explore />
    </>
  );
};

export default ComingSoon;
