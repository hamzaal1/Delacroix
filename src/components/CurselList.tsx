"use client";
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { usePathname } from 'next/navigation';
import "@/components/css/home.css"

const CarouselList = () => {
    const [show, setShow] = useState(true); // Fixed useState declaration
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.includes('admin')) {
            setShow(false)
        }
    }, [pathname])


    return (
        show &&
        <Carousel autoplay className='min-w-full text-center bg-dorange text-white'>
            <div className='md:px-32 bg-[url("/school.jpg")] py-36 speciel_offer flex flex-wrap justify-center items-center'>
                <div className="flex flex-col items-center px-2 md:px-16">
                    <h3 className='text-4xl md:text-5xl font-bold mb-4'>Institut Eugène Delacroix</h3>
                    <p className='font-medium leading-6 text-base md:text-xl'>
                        l'Institut Eugène Delacroix s'efforce de promouvoir l'excellence académique tout en encourageant le développement personnel et social de ses élèves, les préparant ainsi à devenir des citoyens engagés et éclairés.
                    </p>
                </div>
            </div>
            <div className='md:px-32'>
                <h3 className='text-3xl font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <p className='font-medium leading-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum cumque debitis fugit maxime quidem,
                    minima iusto alias quod saepe culpa omnis molestiae odio quisquam voluptatum hic accusantium magnam fuga.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum cumque debitis fugit maxime quidem,
                    minima .
                </p>
            </div>
        </Carousel>
    );
};

export default CarouselList;
