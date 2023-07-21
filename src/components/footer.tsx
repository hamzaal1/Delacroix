"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CMS from './cms';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Content {
    _id: string;
    title: string;
}

const Footer: React.FC = () => {
    const [showPresentation, setShowPresentation] = useState(false);
    const [showCourses, setShowCourses] = useState(false);
    let facebook_id = "9174b9e9-c408-477b-9449-15eceb99e3ea";
    let instagrame_id = "7f6d325c-ffde-45ce-a719-3a21a76a1bcf";
    const { data } = useSelector((state: RootState) => state.content);
    let facebook = data.find((obj: Content) => obj._id === facebook_id) || { _id: "null", title: "null" };
    let instagram = data.find((obj: Content) => obj._id === instagrame_id) || { _id: "null", title: "null" };
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-5 py-14">
                <div>
                    <div className='flex justify-center md:justify-start items-center'>
                        <Link className='inline-block ' href={'/'}>
                            <Image className='mb-4 md:mb-2 ' src={'/logo-1.png'} width={180} height={30} alt='logo' />
                        </Link>
                    </div>
                    <h3 className='text-2xl font-medium mb-6 text-center md:text-start'> <CMS id='8adc6076-abb6-4519-a4f5-4603da0a2920' /> </h3>
                    <ul className='grid grid-rows-1 gap-2 text-gray-300 text-center md:text-start justify-center md:justify-start'>
                        <li><i className="fa-regular fa-map me-1 text-lg" /><span> <CMS id='17ada544-f319-4fc4-9aac-fdbbd04ff3ff' />  </span></li>
                        <li> <i className="fa-regular fa-paper-plane me-2 text-lg" /><span> <CMS id='3cc7396c-6d29-40e8-92d0-fa69b3d10043' />  </span></li>
                        <li> <i className="fa-solid fa-phone me-2 text-lg" /><span> <CMS id='82c238ca-6ff2-4319-99db-f0503c3106ae' />  </span></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-medium mb-6 text-center md:text-start'> <CMS id='acbc49ec-b3f5-4569-bea7-add80d0d12ad' />  </h3>
                    <ul className='grid grid-rows-1 gap-1 text-gray-300 text-sm justify-center md:justify-start'>
                        <li><i className="fa-solid fa-arrow-right-long me-2" />
                            <Link href={'/'}>
                                <CMS id='74374e37-b9d7-4753-a1bf-936964f77e08' />
                            </Link>
                        </li>
                        <li
                            onClick={() => setShowPresentation(!showPresentation)}
                            className='cursor-pointer'
                        ><i className="fa-solid fa-arrow-right-long me-2" />
                            <span><CMS id='7a6e5153-1bfb-42a4-b900-73321ccceb3b' /></span>
                            {
                                showPresentation && <ul className='grid grid-rows-1 gap-2 text-gray-300 text-sm justify-center md:justify-start ps-4 py-2'>
                                    <li>
                                        <i className="fa-solid fa-arrow-right-long me-2" />
                                        <Link href={'/a-props'}>
                                            <CMS id='88731520-0ca0-4b54-9b8f-f833cd8c4965' />
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-arrow-right-long me-2" />
                                        <Link href={'/a-props'}>
                                            <CMS id='3567aa1b-4c67-480b-ad10-a228c794a0c2' />
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-arrow-right-long me-2" />
                                        <Link href={'/a-props'}>
                                            <CMS id='555fc22b-f4b2-4cd9-9983-464654f9d191' />
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </li>
                        <li
                            onClick={() => setShowCourses(!showCourses)}
                            className='cursor-pointer'
                        ><i className="fa-solid fa-arrow-right-long me-2" />
                            <span> <CMS id='f52be135-c749-4d5c-b3db-1394dbaa717b' /> </span>
                            {
                                showCourses && <ul className='grid grid-rows-1 gap-2 text-gray-300 text-sm justify-center md:justify-start ps-4 py-2'>
                                    <li>
                                        <i className="fa-solid fa-arrow-right-long me-2" />
                                        <Link href={'/a-props'}>
                                            <CMS id='1c8f9e7a-4ede-4bf9-b253-2c50f02690e8' />
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-arrow-right-long me-2" />
                                        <Link href={'/a-props'}>
                                            <CMS id='83f37ab2-0864-4a31-8176-8f3398ff3d5d' />
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-arrow-right-long me-2" />
                                        <Link href={'/a-props'}>
                                            <CMS id='fd019c85-e728-448c-972c-936e28ec5662' />
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-arrow-right-long me-2" />
                                        <Link href={'/a-props'}>
                                            <CMS id='9822cb63-d840-4b7f-98eb-b6d87147f79c' />
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </li>
                        <li>
                            <i className="fa-solid fa-arrow-right-long me-2" />
                            <Link href={'/vie-scolaire'}>
                                <CMS id='7c1a6cdf-6f3c-4154-90d9-62b887635212' />
                            </Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-arrow-right-long me-2" />
                            <Link href={'/admissions'}>
                                <CMS id='30665c05-7ecc-4aeb-b397-b9521962e110' />
                            </Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-arrow-right-long me-2" />
                            <Link href={'/recrutements'}>
                                <CMS id='4b62af8a-2158-47dd-9cd7-efde7c8e17e7' />
                            </Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-arrow-right-long me-2" />
                            <Link href={'/nous-contact'}>
                                <CMS id='6d1837b7-c9a4-4b4d-9818-357b67c4fd23' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-medium mb-6 text-center md:text-start'>
                        <CMS id='698f0552-5e35-4a46-8819-bbb9ee657044' />
                    </h3>
                    <ul className='flex gap-5 text-3xl  text-gray-300 justify-center md:justify-start'>
                        <li>
                            <a href={instagram.title} target='_blank'>
                                <i className="fa-brands fa-instagram " />
                            </a>
                        </li>
                        <li>
                            <a href={facebook.title} target='_blank'>
                                <i className="fa-brands fa-square-facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center pb-16 text-gray-400'>
                <p>Copyright ©{new Date().getFullYear()} All rights reserved | This template is made by
                    <a className='mx-2' style={{ color: "#A6BCFA" }} href="https://www.techstylitix.me" target='_blank'>
                        Tech<span className='text-white'>Stylitix</span>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
