import React from 'react';
import unique1 from '../assets/img/unique1.png';
import sentcircle from '../assets/img/sentiron-circle.png';
import girl1 from '../assets/img/girl1.jpg';
import girl2 from '../assets/img/girl2.jpg';
import flower from '../assets/img/flower.png';

const CoreMission = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${flower})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center 400px', 
      backgroundRepeat: 'no-repeat' 
    }}> {/* Added backgroundRepeat property */}
      {/* Core Section */}
      <section className='mb-12 lg:mb-24 w-full'>
        <div className="container mx-auto w-full">
          <div className='flex flex-col items-center justify-center min-h-[600px] w-full'>
            {/* text */}
            <div className='text-center mb-8 pt-20 w-full' data-aos='fade-left' data-aos-offset='400'>
              <h2 className='text-[29px] font-normal' style={{ fontFamily: 'acumin-pro, sans-serif' }}>OUR CORE</h2>
              <h3 className='text-[55px] font-normal mt-4' style={{ fontFamily: 'bodoni-urw, serif' }}>WE DISCOVER YOUR TRUE</h3>
              <h3 className='text-[55px] font-normal' style={{ fontFamily: 'bodoni-urw, serif' }}>BEAUTY</h3>
            </div>
            {/* image and text side by side */}
            <div className='flex items-center w-full mt-8'>
              <img src={unique1} alt='Unique' className='w-1/2 h-auto' />
              <p className='text-[19px] font-normal ml-8' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
                Tell us how you want to look and we'll provide a step-by-step formula to make that come true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='mb-12 lg:mb-24'>
        <div className="container mx-auto">
          <div className='flex flex-col items-center justify-center min-h-[600px]'>
            {/* text */}
            <div className='text-center mb-8 pt-12' data-aos='fade-right' data-aos-offset='400'>
              <h2 className='text-[29px] font-normal' style={{ fontFamily: 'acumin-pro, sans-serif' }}>OUR MISSION</h2>
              <h3 className='text-[55px] font-normal mt-4' style={{ fontFamily: 'bodoni-urw, serif' }}>EMPOWERING WOMEN TO</h3>
              <h3 className='text-[55px] font-normal' style={{ fontFamily: 'bodoni-urw, serif' }}>EMBRACE THEIR UNIQUE</h3>
              <h3 className='text-[55px] font-normal' style={{ fontFamily: 'bodoni-urw, serif' }}>BEAUTY</h3>
            </div>
            {/* image and text side by side */}
            <div className='flex items-center mt-[-150px]'>
              <p className='text-[19px] mr-8' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
                Don't let Society's Beauty Standards stop you from being YOU.
              </p>
              <img src={sentcircle} alt='Unique' className='w-1/2 h-auto' />
            </div>
            {/* added padding and new text */}
            <div className='pt-48 text-center'>
              <h2 className='text-[29px] font-normal' style={{ fontFamily: 'acumin-pro, sans-serif' }}>OUR PLANS</h2>
            </div>
            {/* ellipses with text */}
            <div className='flex justify-center items-center mt-8 space-x-20'>
              <div className='w-[300px] h-[150px] border-2 border-black rounded-full flex items-center justify-center' style={{ borderRadius: '50% / 100%' }}>
                <span className='text-[55px]' style={{ fontFamily: 'bodoni-urw, serif' }}>FREE</span>
              </div>
              <div className='w-[300px] h-[150px] border-2 border-black rounded-full flex items-center justify-center' style={{ borderRadius: '50% / 100%' }}>
                <span className='text-[55px]' style={{ fontFamily: 'bodoni-urw, serif' }}>PREMIUM</span>
              </div>
            </div>
            {/* Access to text */}
            <div className='flex justify-center items-center mt-4 space-x-40'>
              <div className='flex flex-col items-center' style={{ marginTop: '-40px' }}>
                <span className='text-[20px]' style={{ fontFamily: 'acumin-pro, sans-serif' }}>ACCESS TO</span>
                <span className='text-[20px] font-normal mt-2' style={{ fontFamily: 'acumin-pro, sans-serif' }}>One-Time Consultation</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-[20px]' style={{ fontFamily: 'acumin-pro, sans-serif' }}>ACCESS TO</span>
                <span className='text-[20px] font-normal mt-2' style={{ fontFamily: 'acumin-pro, sans-serif' }}>Five Consultations per month</span>
                <span className='text-[20px] font-normal mt-2' style={{ fontFamily: 'acumin-pro, sans-serif' }}>Trend & Community Updates</span>
              </div>
            </div>
            {/* OUR SERVICES section */}
            <div className='pt-48 text-center'>
              <h2 className='text-[29px] font-normal' style={{ fontFamily: 'acumin-pro, sans-serif' }}>OUR SERVICES</h2>
            </div>
            {/* Services with text */}
            <div className='flex justify-center items-center mt-8 space-x-20'>
              <div className='w-[300px] flex flex-col items-center justify-center' style={{ marginTop: '-0px' }}>
                <span className='text-[55px]' style={{ fontFamily: 'bodoni-urw, serif' }}>MAKEUP</span>
                <span className='text-[19px] font-normal mt-4 text-center' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
                  Revitalize your skin with tailored routines and luxurious treatments, revealing its natural radiance for a refreshed and rejuvenated look.
                </span>
                <img src={girl1} alt='Makeup' className='mt-4 w-[300px] h-[300px] object-cover' style={{ marginTop: '40px' }} />
              </div>
              <div className='w-[300px] flex flex-col items-center justify-center'>
                <span className='text-[55px]' style={{ fontFamily: 'bodoni-urw, serif' }}>SKINCARE</span>
                <span className='text-[19px] font-normal mt-4 text-center' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
                  Learn and discover personalized looks that enhance your unique beauty, leaving you feeling glamorous and confident for any occasion.
                </span>
                <img src={girl2} alt='Skincare' className='mt-4 w-[300px] h-[300px] object-cover' style={{ marginTop: '10px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreMission;
