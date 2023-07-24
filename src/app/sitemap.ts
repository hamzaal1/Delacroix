import { groq } from "next-sanity"
import { client } from "../../sanity/lib/client"

type Sitemap = Array<{
    url: string
    lastModified?: string | Date
}>

export const revalidate = 10;

let qurey = groq`
    *[_type=="blog"] | order(publishedAt desc)
    {
    'slug': slug.current
    }
`

export default async function sitemap(): Promise<Sitemap> {
    let blogs = await client.fetch(qurey);

    const blogsRoutes = blogs.map(({ slug }: any) => ({
        url: `${process.env.BASE_URL}/vie-scolaire/${slug}`,
        lastModified: new Date(),
    }))
    const staticRoutes = [
        {
            url: `${process.env.BASE_URL}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.BASE_URL}a-propos`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.BASE_URL}notre-mission`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.BASE_URL}notre-vision`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.BASE_URL}college`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.BASE_URL}elementaire`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.BASE_URL}lycee`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.BASE_URL}maternelle`,
            lastModified: new Date(),
        },
    ]

    return [...staticRoutes, ...blogsRoutes]
}