import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'image_arrier',
  title: 'arrière plan',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      }
    })
  ],
  preview: {
    select: {
      // title: 'title',
      media: 'mainImage'
    }
  },
});
