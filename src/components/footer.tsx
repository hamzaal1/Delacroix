import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-5 py-14">
                <div>
                    <h3 className='text-2xl font-medium mb-6 text-center md:text-start'>Contact Us</h3>
                    <ul className='grid grid-rows-1 gap-2 text-gray-300 justify-center md:justify-start'>
                        <li><i className="fa-regular fa-map me-1 text-lg" /><span>Rue Ahmed Tadili, Tanger 90060</span></li>
                        <li> <i className="fa-regular fa-paper-plane me-2 text-lg" /><span>hamzademnati21@gmail.com</span></li>
                        <li> <i className="fa-solid fa-phone me-2 text-lg" /><span>(+212) 6 82 49 01 13</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-medium mb-6 text-center md:text-start'>Website Links</h3>
                    <ul className='grid grid-rows-1 gap-1 text-gray-300 text-sm justify-center md:justify-start'>
                        <li><i className="fa-solid fa-arrow-right-long me-2" /><span>Home</span></li>
                        <li><i className="fa-solid fa-arrow-right-long me-2" /><span>About</span></li>
                        <li><i className="fa-solid fa-arrow-right-long me-2" /><span>Services</span></li>
                        <li><i className="fa-solid fa-arrow-right-long me-2" /><span>Blogs</span></li>
                        <li><i className="fa-solid fa-arrow-right-long me-2" /><span>Contact</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-medium mb-6 text-center md:text-start'>Our Media</h3>
                    <ul className='flex gap-5 text-3xl  text-gray-300 justify-center md:justify-start'>
                        <li>
                            <a href="" target='_blank'>
                                <i className="fa-brands fa-instagram " />
                            </a>
                        </li>
                        <li>
                            <a href="" target='_blank'>
                                <i className="fa-brands fa-square-facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center pb-16 text-gray-400'>
                <p>Copyright ©{ new Date().getFullYear() } All rights reserved | This template is made by
                    <a className='mx-2' style={{ color:"#A6BCFA" }} href="https://www.facebook.com/TechStylitix/" target='_blank'>
                        Tech<span className='text-white'>Stylitix</span>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
