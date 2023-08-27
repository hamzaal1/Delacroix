import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'courses_scolaire',
    title: 'Cursus scolaire',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'keywords', // Change 'categories' to 'tags'
            title: 'keywords', // Change 'Categories' to 'Tags'
            type: 'array', // Change 'reference' to 'string'
            of: [{ type: 'string' }], // Change 'category' to 'string'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }),
    ],

    preview: {
        select: {
            title: 'title',
        }
    },
});
