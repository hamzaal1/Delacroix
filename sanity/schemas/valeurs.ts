import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'valeurs',
    title: 'valeurs',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'color',
            title: 'color',
            type: 'color',
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'text',
            rows: 2
        }),
    ],

    preview: {
        select: {
            title: 'title',
        }
    },
});
