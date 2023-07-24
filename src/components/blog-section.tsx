"use client";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Blog from "./blog";
import { useEffect, useState } from "react";
import CMS from "./cms";


const query = groq`
  *[_type == 'blog']
  | order(publishedAt desc) {
   ...
  }[0...4]
`;


function Blogsection() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetcher() {
            const last_blogs = await client.fetch(query);
            setBlogs(last_blogs);
        }
        fetcher();
    }, [])
    // console.log(last_blogs[0].body[0].children.map(content => content.text));
    // console.log(last_blogs[0].body.children);


    return (
        <div className="min-w-full py-10">
            <div className="container">
                <h3 className="text-3xl font-semibold text-center mb-2"> <CMS id="a4363e67-0cc9-499b-8be4-87ded4ff81aa" />  </h3>
                <p className="text-center text-base font-normal">
                    <CMS id="7a42d626-1366-460e-a6bd-c06fefad54a9" />
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center py-6 gap-5">
                    {
                        blogs.map((blog: any) => <Blog key={blog._id} content={blog} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Blogsection;
