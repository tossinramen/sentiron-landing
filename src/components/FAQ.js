import React from 'react';

// import components 
import FAQSlider from './FAQSlider';

const FAQ = () => {
  return (
    <section className='mb-64 lg:mb-48'>
      <div className="container mx-auto">
        <div className='bg-custom-brown max-h-[400px] p-12 rounded-lg'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-6' data-aos='fade-up' data-aos-offset='300' data-aos-delay='1600'>Frequently Asked Questions</h2>
            <p className='max-w-2xl mx-auto mb-12 lg:mb-24' data-aos='fade-up' data-aos-offset='300' data-aos-delay='1800'>
              {/* Add any introductory text here if needed */}
            </p>
          </div>
          {/* slider */}
          <div data-aos='fade-up' data-aos-offset='300' data-aos-delay='2000'>
            <FAQSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;