"use client";
import { groq } from 'next-sanity';
import React, { useState, useEffect } from 'react'
import { client } from '../../../../sanity/lib/client';

function page({ params }: any) {
    const { slug } = params

    return (
        <div>page {slug}</div>
    )
}


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const [blogs, setBlogs] = useState([]);
    const query = groq`
    *[_type == 'blog']
    | order(publishedAt desc) {
    ...
    }
    `;
    useEffect(() => {
        async function fetcher() {
            const data = await client.fetch(query);
            setBlogs(data);
        }
        fetcher();
    }, [])

    return blogs.map((blog: any) => ({
        slug: blog.slug.current,
    }))
}

export default page