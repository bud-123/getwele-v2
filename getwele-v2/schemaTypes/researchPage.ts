import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'researchPage',
  title: 'Research Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'introductionSection',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    }),
    defineField({
      name: 'researchAreas',
      title: 'Research Areas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'authors',
              title: 'Authors',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'publicationDate',
              title: 'Publication Date',
              type: 'date',
            },
            {
              name: 'journal',
              title: 'Journal/Conference',
              type: 'string',
            },
            {
              name: 'abstract',
              title: 'Abstract',
              type: 'text',
            },
            {
              name: 'link',
              title: 'Link to Publication',
              type: 'url',
            },
            {
              name: 'thumbnail',
              title: 'Thumbnail Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'authors',
              media: 'thumbnail',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'researchTeam',
      title: 'Research Team',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'researchInterests',
              title: 'Research Interests',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'image',
            },
          },
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
        title: title || 'Research Page',
      }
    },
  },
})
