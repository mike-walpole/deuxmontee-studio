import {defineType, defineField} from 'sanity'

export const brands = defineType({
  type: 'document',
  name: 'brands',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
  ],
})
