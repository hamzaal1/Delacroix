"use client"
import Image from 'next/image'
import { useState } from 'react'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className=''>
            <nav className='container flex flex-col md:flex-row justify-between py-3 md:py-0 items-start md:items-center'>
                <Image src={"/logo.png"} width={90} height={30} alt='Delacroix Logo' />
                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                    <div className='cursor-default flex flex-row items-center gap-3'>
                        <i className="fa-regular fa-paper-plane text-dorange text-2xl" />
                        <div >
                            <h3 className='font-semibold'>Email</h3>
                            <p>hamzademnati21@gmail.com</p>
                        </div>
                    </div>
                    <div className='cursor-default flex flex-row items-center gap-3'>
                        <i class="fa-solid fa-phone text-dorange text-2xl" />
                        <div >
                            <h3 className='font-semibold'>Phone</h3>
                            <p>(+212) 6 82 49 01 13</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='bg-dblue'>
                <div className='container py-3 text-white font-medium'>
                    <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                        <i class="fa-solid fa-bars text-4xl" />
                    </button>
                    <div className={` ${isOpen ? '' : 'hidden'} py-4 md:py-0 md:block text-xl md:text-base`}>
                        <ul className='flex flex-col md:flex-row gap-3 md:gap-6 '>
                            <li className='py-1'>Home</li>
                            <li className='py-1'>About</li>
                            <li className='py-1'>Services</li>
                            <li className='py-1'>Blogs</li>
                            <li className='py-1'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav