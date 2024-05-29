import React from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper';
//import data 
import { slider } from '../data';
const TestimonialSlider = () => {
  return <Swiper>
    {slider.map((slide, index) => {
      // destructure slide
      const {message, image, name, email} = slide;
      return <SwiperSlide className='rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via [#2A1428] to-[#331A35]'>
        <p className='mb-8 min-h-[100px] text-[15px]'>
          {message}
        </p>
        <div>
          <div>
            <div>

            </div>
          </div>
        </div>
        </SwiperSlide>;
    })}
  </Swiper>;
};

export default TestimonialSlider;
