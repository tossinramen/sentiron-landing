import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { slider } from '../data';

const FAQSlider = () => {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
      {slider.map((slide, index) => {
        const { question, answer } = slide;
        return (
          <SwiperSlide key={index} className='rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#2b2b2b] via-[#8f8167] to-[#f9ffc9]'>
            <h3 className='mb-4 text-xl font-semibold'>{question}</h3>
            <p className='mb-8 min-h-[100px] text-[15px]'>{answer}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FAQSlider;