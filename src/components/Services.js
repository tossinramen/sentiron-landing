import React from 'react';

// import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';


const Headsets = () => {
  return(
    <section className='py-12 lg:py-24'>
      <div className="container mx-auto">
        {/* title */}
        <h2 className='text-3x1 font-bold mb-6' data-aos='fade-down' data-aos-offset='300'>Services</h2>
        {/* grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1000'>
            <img src={Headset1} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-x1 mb-2'>Skincare</h4>
            <p>
              Revitalize your skin with tailored routines and luxurious treatments, revealing its natural radiance for a refreshed and rejuvenated look.
            </p>
            </div>
          </div>
          {/* item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1300'>
            <img src={Headset2} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-x1 mb-2'>Makeup</h4>
            <p>
            Learn and discover personalized looks that enhance your unique beauty, leaving you feeling glamorous and confident for any occasion.
            </p>
            </div>
          </div>
          {/* item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1600'>
            <img src={Headset3} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-x1 mb-2'>Personal Styling</h4>
            <p>
            Elevate your style with expertly curated outfits that reflect your personality, fit your preferences, and make a statement wherever you go.
            </p>
            </div>
          </div>
          {/* item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1900'>
            <img src={Headset4} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-x1 mb-2'>Wardrobe Management</h4>
            <p>
            Organize and streamline your wardrobe with personalized management solutions that maximize your style potential, ensuring you always have the perfect outfit for any event.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
