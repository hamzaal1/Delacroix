"use client";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Blog from "./blog";

const query = groq`
  *[_type == 'blog']
  | order(publishedAt desc) {
   ...
  }[0...4]
`;


async function Blogsection() {
    const last_blogs = await client.fetch(query);
    // console.log(last_blogs[0].body[0].children.map(content => content.text));
    // console.log(last_blogs[0].body.children);


    return (
        <div className="min-w-full py-10">
            <div className="container">
                <h3 className="text-3xl font-semibold text-center mb-2">Recent Blog</h3>
                <p className="text-center text-base font-normal">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center py-6 gap-5">
                    {
                        last_blogs.map((blog:any) => <Blog content={blog} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Blogsection;
