"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DropdownView from './dropdown'
import CMS from './cms'
import { usePathname } from 'next/navigation'

const presrntation = [
    {
        key: '1',
        label: (
            <Link className='px-10' rel="noopener noreferrer" href="/a-propos">
                <CMS id='88731520-0ca0-4b54-9b8f-f833cd8c4965' />
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link className='px-10' rel="noopener noreferrer" href="/notre-vision">
                <CMS id='3567aa1b-4c67-480b-ad10-a228c794a0c2' />
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link className='px-10' rel="noopener noreferrer" href="/notre-mission">
                <CMS id='555fc22b-f4b2-4cd9-9983-464654f9d191' />
            </Link>
        ),
    }
];
const courses_scolaire = [
    {
        key: '1',
        label: (
            <Link className='px-10' rel="noopener noreferrer" href="/maternelle">
                <CMS id='1c8f9e7a-4ede-4bf9-b253-2c50f02690e8' />
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link className='px-10' rel="noopener noreferrer" href="/elementaire">
                <CMS id='83f37ab2-0864-4a31-8176-8f3398ff3d5d' />
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link className='px-10' rel="noopener noreferrer" href="/college">
                <CMS id='fd019c85-e728-448c-972c-936e28ec5662' />
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link className='px-10' rel="noopener noreferrer" href="/lycee">
                <CMS id='9822cb63-d840-4b7f-98eb-b6d87147f79c' />
            </Link>
        ),
    }
];


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname])

    return (
        <header className=''>
            <nav className='container flex flex-col md:flex-row justify-center py-4 md:py-0 items-center'>
                <Link href={'/'}>
                    <Image src={'/main-logo.png'} width={245} height={30} alt='main-logo' />
                </Link>
            </nav>
            <div className='bg-dblue'>
                <div className='container py-3 text-white font-medium'>
                    <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                        <i className="fa-solid fa-bars text-4xl" />
                    </button>
                    <div className={` ${isOpen ? '' : 'hidden'} py-4 md:py-0 md:block text-xl md:text-base`}>
                        <ul className='flex flex-col md:flex-row gap-3 md:gap-6 '>
                            <li className='py-1'> <Link href={'/'}><CMS id='74374e37-b9d7-4753-a1bf-936964f77e08' /></Link> </li>
                            <li className='py-1'>
                                <DropdownView items={presrntation} title={<CMS id='7a6e5153-1bfb-42a4-b900-73321ccceb3b' />} />
                            </li>
                            <li className='py-1'>
                                <DropdownView items={courses_scolaire} title={<CMS id='f52be135-c749-4d5c-b3db-1394dbaa717b' />} />
                            </li>
                            <li className='py-1'> <Link href={'/vie-scolaire'}><CMS id='7c1a6cdf-6f3c-4154-90d9-62b887635212' /></Link> </li>
                            <li className='py-1'> <Link href={'/admissions'}><CMS id='30665c05-7ecc-4aeb-b397-b9521962e110' /></Link> </li>
                            <li className='py-1'> <Link href={'/recrutements'}><CMS id='4b62af8a-2158-47dd-9cd7-efde7c8e17e7' /></Link> </li>
                            <li className='py-1'> <Link href={'/nous-contact'}><CMS id='6d1837b7-c9a4-4b4d-9818-357b67c4fd23' /></Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav