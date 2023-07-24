import CMS from '@/components/cms'
import ContactUs from '@/components/contact-us'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'Nous Contact | Institut Eugène Delacroix',
  description: "N'hésitez pas à nous contacter pour toute question, demande d'information ou pour planifier une visite de l'établissement. Nous serons ravis de vous accueillir et de répondre à vos besoins."
}

function page() {
  return (
    <div className='container py-16'>
      <h3 className='font-semibold text-3xl text-left'><CMS id='6d1837b7-c9a4-4b4d-9818-357b67c4fd23' /></h3>
      <div className='flex flex-col items-center py-4'>
        <ContactUs title="contact" />
      </div>
    </div>
  )
}

export default page