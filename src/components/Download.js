import React from 'react';
import download from '../assets/img/download.png';

const Download = () => {
  return (
    <div className='bg-[#8f8167]/30 py-6'>
      <div className="container mx-auto">
        <div className='flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between'>
          <h3 className='text-2xl font-semibold mb-8 lg:mb-0' data-aos='fade-right' data-aos-offset='350'>
            Get your glowup formula TODAY!
          </h3>
          {/* download image */}
          <div className='w-[270px] h-[180px] flex items-center justify-center' data-aos='fade-left' data-aos-offset="350">
            <a href={download} download className='cursor-pointer'>
              <img src={download} alt='Download' className='hover:scale-110 transition' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;