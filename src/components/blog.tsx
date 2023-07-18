// "use client";
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
    const truncatedContent = truncateText(content.body, 200);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const publishDate: string = new Date(content.publishedAt).toLocaleDateString('en-US', options);


    return (
        <div key={content.title} className='bg-background py-5 px-6 rounded-md border border-secondary'>
            <Image className='rounded-md mx-auto' src={`${urlForImage(content.mainImage).url()}`} width={270} height={80} alt='' />
            <p className='my-3 font-medium'>{content.title}</p>
            <p>{truncatedContent.text}</p>
            {
                truncatedContent.isTrun && (
                    <div />
                )
            }
            <Link href={'/blog'} className='text-dorange'>Read More</Link>
            <div className='text-gray-400 mt-2'>
                <p>{publishDate} ∙<span className='mx-4'>3 min read</span></p>
            </div>
        </div>
    );
}

export default Blog;
