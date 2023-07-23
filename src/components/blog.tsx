"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlForImage } from '../../sanity/lib/image';

interface TrunText {
    text: string;
    isTrun: boolean;
}


function truncateText(text: string, maxLength: number, isTrun = false): TrunText {
    if (text.length > maxLength) {
        text = text.substring(0, maxLength) + '...';
        isTrun = true;
    }
    let obj: TrunText = {
        "text": text,
        "isTrun": isTrun
    };
    return obj;
}

function Blog({ content }: any) {
    const truncatedContent = truncateText(content.text, 200);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const publishDate: string = new Date(content.publishedAt).toLocaleDateString('en-US', options);

    return (
        <div  key={content._id} className='rounded-md border border-secondary' >
            <Link href={`/vie-scolaire/${content.slug.current}`} className='cursor-pointer'>
                <Image className='rounded-t-md mx-auto min-w-full' src={`${urlForImage(content.mainImage).url()}`} width={270} height={280} alt='' />
            </Link>
            <div className='px-6 py-2'>
                <p className='mt-3 font-medium'>{content.title}</p>
                <div className='text-gray-400 mb-2'>
                    <p>{publishDate}</p>
                </div>
                <p>{truncatedContent.text}</p>
                <div className='cursor-pointer text-dorange'>Read More</div>
            </div>
        </div >
    );
}

export default Blog;
