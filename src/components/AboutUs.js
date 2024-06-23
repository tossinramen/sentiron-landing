import React from 'react';
import Header from './Header';
import Explore from './Explore';
import Banner from './Banner';
import founder from '../assets/img/founder.png';

const AboutUs = () => {
  return (
    <>
      <Header />
      <Banner />
      <section className='mt-20 px-4 lg:px-10 mb-20'> {/* Added mb-20 for extra whitespace */}
        <div className='container mx-auto w-full px-4'>
          <h2 className='text-[55px] font-normal text-left' style={{ fontFamily: 'bodoni-urw, serif' }}>
            ABOUT <span className='font-bodoni-light'>the FOUNDER</span>
          </h2>
          <div className='flex flex-col lg:flex-row mt-6'>
            <img 
              src={founder} 
              alt="Founder" 
              className='w-full lg:w-1/3 h-auto mb-8 lg:mb-0 lg:mr-8' 
              style={{ marginTop: '-10px', marginLeft: '-10px' }} // Adjust these values as needed
            />
            <p className='lg:ml-4 text-[19px] font-normal text-left' style={{ fontFamily: 'acumin-pro, sans-serif' }}>
              I was born in <span className='font-bold'>New York City</span>, the most beauty-obsessed city in the world, and spent my formative years in <span className='font-bold'>Seoul</span>, South Korea, known for its exceptionally high beauty standards. <br/><br/>
              Growing up, I was surrounded by a world where beauty wasn't just admired but was a key part of one's identity. I witnessed firsthand the immense pressure people faced to conform to these societal standards. Yet, I held onto a deep belief that <span className='font-bold'>true beauty is unique to each person.</span> This heartfelt conviction is what inspired me to create Sentiron, <span className='font-bold'>a celebration of individual beauty in a world that often tries to dictate what beauty should be.</span>
            </p>
          </div>
        </div>
      </section>
      <Explore />
    </>
  );
};

export default AboutUs;
