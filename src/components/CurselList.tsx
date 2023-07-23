"use client";
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { usePathname } from 'next/navigation';
import "@/components/css/home.css"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { urlForImage } from '../../sanity/lib/image';
import { motion } from 'framer-motion';


interface Annonce {
    _id: string;
    title: string;
    mainImage: any;
    description: string;
}

const CarouselList = () => {
    const [show, setShow] = useState(true); // Fixed useState declaration
    const [annonces, setAnnonces] = useState([]);
    const { data } = useSelector((state: RootState) => state.annonces);
    useEffect(() => {
        // Update the annonces state when the data changes
        setAnnonces(data);
    }, [data]); // Add data to the dependency array


    const pathname = usePathname();
    useEffect(() => {
        if (pathname.includes('admin')) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [pathname])


    return (
        show &&
        <Carousel autoplay className='min-w-full text-center text-white'>
            {
                annonces.map((annonce: Annonce) => (
                    <div key={annonce._id}>
                        <div
                            style={{ backgroundImage: `url(${annonce?.mainImage ? urlForImage(annonce.mainImage).url() : ""})` }}
                            className="md:px-32 py-36 speciel_offer flex flex-wrap justify-center items-center">
                            <div
                                className="flex flex-col items-center px-2 md:px-16">
                                <motion.h3
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeIn" }}
                                    className='text-4xl md:text-5xl font-bold mb-4'>{annonce.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeIn" }}
                                    className='font-medium leading-6 text-base md:text-xl'>
                                    {annonce.description}
                                </motion.p>
                            </div>
                        </div>
                    </div>

                ))
            }

        </Carousel>
    );
};

export default CarouselList;
