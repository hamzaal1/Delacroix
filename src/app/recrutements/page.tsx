import ContactUs from '@/components/contact-us'
import React from 'react'

function page() {
    return (
        <div className='container py-16'>
            <h3 className='font-semibold text-3xl text-left'>Recrutements</h3>
            <div className='flex flex-col items-center py-4'>
                <ContactUs title="recrutements" />
            </div>
        </div>
    )
}

export default page