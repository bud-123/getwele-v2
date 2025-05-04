import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productPage',
  title: 'Product Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Product Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Product Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'benefit',
              title: 'Product Benefit',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Learn More',
            },
            {
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
            },
            {
              name: 'color',
              title: 'Background Color',
              type: 'string',
              description: 'CSS color code (e.g., #4CAF50)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
          description: 'Title used for search engines and browser tabs',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Description for search engines',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Keywords for search engines',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
    prepare({title}) {
      return {
        title: title || 'Product Page',
      }
    },
  },
})