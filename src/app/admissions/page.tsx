import CMS from '@/components/cms'
import ContactUs from '@/components/contact-us'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Admission | Institut Eugène Delacroix',
    description: "Admission à l'Institut Eugène Delacroix : Bienvenue à tous ! Découvrez un environnement d'apprentissage stimulant. Contactez-nous dès aujourd'hui !"
}

function page() {
    return (
        <div className='container py-16'>
            <h3 className='font-semibold text-3xl text-left'><CMS id='30665c05-7ecc-4aeb-b397-b9521962e110' />  </h3>
            <div className='flex flex-col items-center py-4'>
                <ContactUs title="admissions" />
            </div>
        </div>
    )
}

export default page