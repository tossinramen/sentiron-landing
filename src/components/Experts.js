import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Explore from './Explore';

const Experts = () => {
  return (
    <>
      <Header />
      <Banner />
      <section className='mt-20 px-4 lg:px-10 mb-20'>
        <div className='container mx-auto w-full px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-[55px] font-normal' style={{ fontFamily: 'bodoni-urw, serif' }}>
              ALL OUR <span className='font-bodoni-light'>COACHES</span> ARE <span style={{ fontWeight: 'bold' }}>LICENSED EXPERTS</span>
            </h2>
            <p className='text-[19px] font-normal' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
              BEAUTICIANS & ESTHETICIANS
            </p>
            <p className='text-[19px] font-normal mt-4' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
              Licensed Expert? Sign-up today to meet global customers, earn experience, and share beauty!
            </p>
            <div className='flex justify-center'>
              <button className='mt-4 btn' style={{ fontFamily: 'acumin-pro, sans-serif' }}>EXPERTS SIGN UP HERE</button>
            </div>
          </div>
          <div className='text-center mb-8'>
            <h3 className='text-[40px] font-normal' style={{ fontFamily: 'bodoni-urw, serif' }}>
              MEET OUR <span className='font-bodoni-light'>EXPERTS</span>
            </h3>
          </div>
          <div className='flex flex-wrap -mx-4'>
            {/* Add your expert profiles here */}
            <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
              <div className='bg-white p-4 border rounded'>
                <div className='h-40 bg-gray-200 mb-4'></div>
                <h4 className='text-[19px] font-normal' style={{ fontFamily: 'acumin-pro, sans-serif' }}>NAME</h4>
                <p className='text-[16px] font-normal mt-2' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
                  Service (Makeup, Skincare, or Trichology Description)<br/>
                  Price per Session
                </p>
              </div>
            </div>
            {/* Repeat the above div for more experts */}
          </div>
        </div>
      </section>
      <Explore />
    </>
  );
};

export default Experts;
