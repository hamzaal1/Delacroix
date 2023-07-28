"use client";
import { groq } from "next-sanity";
import Blog from "@/components/blog";
import { useEffect, useState } from "react";
import CMS from "@/components/cms";
import { client } from "../../sanity/lib/client";

function VieScolaire() {
    const [blogs, setBlogs] = useState([]);
    const [blogsToLoad, setBlogsToLoad] = useState(10);
    const [hide, setHide] = useState(false);
    
    const query = groq`
    *[_type == 'blog']
    | order(publishedAt desc)
    [0..$blogsToLoad]
`;

    useEffect(() => {
        async function fetcher() {
            const data = await client.fetch(query, { blogsToLoad });
            if (blogs.length == data?.length) {
                setHide(true);
            }
            setBlogs(data);
        }
        fetcher();
    }, [blogsToLoad])



    return (
        <>
            <div className="min-w-full py-10">
                <div className="container">
                    <h3 className="text-3xl font-semibold text-left mb-2"><CMS id="a4363e67-0cc9-499b-8be4-87ded4ff81aa" /> </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-center py-6 gap-5">
                        {
                            blogs.map((blog: any) => <Blog key={blog._id} content={blog} />)
                        }
                    </div>
                    {
                        hide == false ? <button
                            onClick={() => setBlogsToLoad(blogsToLoad + 5)}
                            className="py-2 min-w-full text-3xl font-semibold bg-transparent text-dorange">
                            <i className="fa-solid fa-angles-right fa-rotate-90"/>
                        </button> : <></>
                    }
                </div>
            </div>
        </>

    );
}

export default VieScolaire;
