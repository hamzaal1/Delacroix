"use client";
import { groq } from 'next-sanity';
import React, { useState, useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import "@/components/css/portable-text.css"
import Media from '@/components/media';
import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
function Elementaire() {
    const [pageData, setPageData] = useState();
    let qurey = groq`*[_type=='courses_scolaire' && _id == '9eed68bc-6a4d-42d2-9216-d53409252797'][0]`
    useEffect(() => {
        async function fetcher() {
            const data = await client.fetch(qurey);
            setPageData(data);
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
        pageData && <div className="container py-16">
            <div className="flex flex-col md:flex-row">
                <div className='order-last md:order-first'>
                    <Media />
                </div>
                <div className='flex flex-col justify-center mt-2 md:px-10 gap-5'>
                    <h2 className='text-3xl font-bold mb-3 sp-text'>{pageData.title}</h2>
                    <div className='sanity-portable-text text-justify leading-8 '>
                        <PortableText components={StyledPortableText} value={pageData.body} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Elementaire;