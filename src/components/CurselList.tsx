"use client";
import React from 'react';
import { Carousel } from 'antd';



const CarouselList: React.FC = () => (
    <Carousel autoplay className='min-w-full text-center bg-dorange py-28'>
        <div className='md:px-32'>
            <h3 className='text-3xl font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p className='font-medium leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum cumque debitis fugit maxime quidem, minima iusto alias quod saepe culpa omnis molestiae odio quisquam voluptatum hic accusantium magnam fuga.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum cumque debitis fugit maxime quidem, minima .
            </p>
        </div>
        <div className='md:px-32'>
            <h3 className='text-3xl font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p className='font-medium leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum cumque debitis fugit maxime quidem, minima iusto alias quod saepe culpa omnis molestiae odio quisquam voluptatum hic accusantium magnam fuga.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum cumque debitis fugit maxime quidem, minima .
            </p>
        </div>
    </Carousel >
);

export default CarouselList;