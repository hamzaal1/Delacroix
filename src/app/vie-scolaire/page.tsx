"use client";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Blog from "@/components/blog";
import { useEffect, useState } from "react";
import CMS from "@/components/cms";



function page() {
    const [blogs, setBlogs] = useState([]);
    const query = groq`
    *[_type == 'blog']
    | order(publishedAt desc) {
    ...
    }[0...10]
    `;
    useEffect(() => {
        async function fetcher() {
            const data = await client.fetch(query);
            setBlogs(data);
        }
        fetcher();
    }, [])



    return (
        <div className="min-w-full py-10">
            <div className="container">
                <h3 className="text-3xl font-semibold text-left mb-2"><CMS id="a4363e67-0cc9-499b-8be4-87ded4ff81aa" /> </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center py-6 gap-5">
                    {
                        blogs.map((blog: any) => <Blog key={blog._id} content={blog} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default page;
