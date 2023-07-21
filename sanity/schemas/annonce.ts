import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'annonce',
    title: 'annonce',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'text',
            rows: 5
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    },
});
