"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TrunText {
    text:string;
    isTrun:boolean;
}

function truncateText(text:string, maxLength:number,isTrun=false):TrunText {
    if (text.length > maxLength) {
        text = text.substring(0, maxLength) + '...';
        isTrun = true;
    }
    let obj:TrunText = {
        "text":text,
        "isTrun":isTrun
    };
    return obj;
}

function Blog() {
    const title = 'La semaine du goût CE1 et CE2';
    const content = 'Coiffés de toques pâtissiers, nos petits chefs Coiffés de toques pâtissiers, nos petits chefs Coiffés de toques pâtissiers, nos petits chefs Coiffés de toques pâtissiers, nos petits chefs Coiffés de toques pâtissiers, nos petits chefs du CE1 et CE2 ont mis la main à la pâte pour réaliser de succulent et moelleux pancake à la farine d’avoine et à la banane. Ce fut un régal.';
    const date = 'Jan 10, 2022';

    const truncatedContent = truncateText(content, 200);

    return (
        <div className='bg-background py-5 px-6 rounded-md border border-secondary'>
            <Image className='rounded-md mx-auto' src={"/media/blogs/event.jpg"} width={270} height={80} alt='' />
            <p className='my-4 font-medium'>{title}</p>
            <p>{truncatedContent.text}</p>
            {
                truncatedContent.isTrun && (
                    <div />
                )
            }
            <Link href={'/blog'} className='text-dorange'>Read More</Link>
            <div className='text-gray-400 mt-2'>
                <p>{date} ∙<span className='mx-4'>3 min read</span></p>
            </div>
        </div>
    );
}

export default Blog;
