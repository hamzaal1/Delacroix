import CMS from '@/components/cms'
import ContactUs from '@/components/contact-us'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Recrutements | Institut Eugène Delacroix',
    description: "Recrutements à l'Institut Eugène Delacroix : Rejoignez-nous pour une expérience éducative enrichissante et inspirante !"
}


function page() {
    return (
        <div className='container py-16'>
            <h3 className='font-semibold text-3xl text-left'><CMS id='4b62af8a-2158-47dd-9cd7-efde7c8e17e7' /></h3>
            <div className='flex flex-col items-center py-4'>
                <ContactUs title="recrutements" />
            </div>
        </div>
    )
}

export default page