"use client";
import { groq } from 'next-sanity';
import React, { useState, useEffect } from 'react'
import { urlForImage } from '../../sanity/lib/image';
import { PortableText } from '@portabletext/react'
import Image from 'next/image';
import "@/components/css/portable-text.css"
import Media from '@/components/media';
import { client } from '../../sanity/lib/client';

function BlogDetail({ slug }) {
    const [blog, setBlogs] = useState();
    async function fetchBlogData(slug) {
        const query = groq`
          *[_type == 'blog' && slug.current == "${slug}"][0] {
           ...
          }
        `;

        const data = await client.fetch(query);
        return data;
    }
    useEffect(() => {
        async function fetcher() {
            const data = await fetchBlogData(slug);
            setBlogs(data);
        }
        fetcher();
    }, [])

    const StyledPortableText = {
        types: {
            image: ({ value }) => <img className='mb-4 md:inline me-3 w-[600px] md:w-[350px]' src={urlForImage(value.asset._ref).url()} />,
            callToAction: ({ value, isInline }) =>
                isInline ? (
                    <a href={value.url}>{value.text}</a>
                ) : (
                    <div className="callToAction">{value.text}</div>
                ),
        },

        marks: {
            link: ({ children, value }) => {
                const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
                return (
                    <a className='text-dblue' href={value.href} rel={rel}>
                        {children}
                    </a>
                )
            },
        },
    }

    return (
        blog && <div className="container py-16">
            <div className="flex flex-col md:flex-row">
                <div className='order-last md:order-first'>
                    <Media />
                </div>
                <div className='flex flex-col justify-center mt-2 md:px-10 gap-5'>
                    <h2 className='text-3xl font-bold mb-3 sp-text'>{blog.title}</h2>
                    <div className='flex flex-wrap'>
                        <Image className='object-contain mx-auto mb-2' src={`${urlForImage(blog.mainImage).url()}`} width={600} height={100} alt='' />
                        <p className='leading-8 text-justify'> {blog.text}</p>
                    </div>
                    <div className='sanity-portable-text text-justify leading-8 '>
                        <PortableText components={StyledPortableText} value={blog.body} />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BlogDetail;