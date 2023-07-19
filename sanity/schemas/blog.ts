import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'tags', // Change 'categories' to 'tags'
      title: 'Tags', // Change 'Categories' to 'Tags'
      type: 'array', // Change 'reference' to 'string'
      of: [{ type: 'string' }], // Change 'category' to 'string'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
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
      media: 'mainImage',
    }
  },
});
