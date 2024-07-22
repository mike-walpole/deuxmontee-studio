import {defineType, defineField, defineArrayMember} from 'sanity'

export const prod = defineType({
  name: 'prod',
  title: 'Prod',
  type: 'document',
  fields: [
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.sku}-${doc.name}`,
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Brand',
      type: 'object',
      fields: [
        {
          title: 'Brand',
          name: 'brands',
          type: 'reference',
          to: [{type: 'brands'}],
        },
      ],
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'string',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'Male', value: 'male'},
          {title: 'Female', value: 'female'},
          {title: 'Unisex', value: 'unisex'},
          {title: 'Kids', value: 'kids'},
        ],
      },
    },
    {
      name: 'cat',
      title: 'Cat',
      type: 'string',
      options: {
        list: [
          {title: 'Clothing', value: 'clothing'},
          {title: 'Accessories', value: 'accessories'},
          {title: 'Shoes', value: 'shoes'},
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'new',
      title: 'New',
      type: 'boolean',
    },

    {
      name: 'Category',
      type: 'object',

      fields: [
        {
          title: 'Category',
          name: 'productCategory',
          type: 'reference',
          to: [{type: 'productCategory'}],
        },
      ],
    },
    {
      name: 'Subcategory',
      type: 'object',
      fields: [
        {
          title: 'Sub Category',
          name: 'sub',
          type: 'reference',
          to: [{type: 'sub'}],
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'fullprice',
      title: 'Full Price',
      type: 'number',
    },
    {
      name: 'currentprice',
      title: 'Current Price',
      type: 'number',
    },
  ],
})
