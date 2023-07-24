import { groq } from 'next-sanity';
import { client } from '../../../../sanity/lib/client';
import "@/components/css/portable-text.css"
import BlogDetail from "@/components/blogDetail"
import { urlForImage } from '../../../../sanity/lib/image';


function page({ params }) {
    const { slug } = params;
    return (
        <>
            <BlogDetail slug={slug} />

        </>
    )
}


export async function generateMetadata({ params }, parent) {
    // read route params
    const slug = params.slug
    // fetch data
    const query = groq`
    *[_type == 'blog' && slug.current=="${slug}"][0]
    `
    const blog = await client.fetch(query);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: blog.title,
        description:blog.text,
        openGraph: {
            images: [urlForImage(blog.mainImage).url(), ...previousImages],
        },
    }
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const query = groq`
    *[_type == 'blog']
    | order(publishedAt desc) {
    ...
    }`
    const data = await client.fetch(query);
    return data.map((blog) => ({
        slug: blog.slug.current,
    }))
}

export default page