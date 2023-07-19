import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'content',
  title: 'content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    }
  },
});
