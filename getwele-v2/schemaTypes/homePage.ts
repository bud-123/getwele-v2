import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Each line of the hero title as separate entries',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Each line of the subtitle as separate entries',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          description: 'URL path for the button',
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
      name: 'cards',
      title: 'Information Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Material Icon Name',
              type: 'string',
              description: 'Name of the Material icon to use (e.g., "error_outline", "science", "event_available")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'color',
              title: 'Card Color',
              type: 'string',
              description: 'Hex color code (e.g., "#FF6B6B")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Card Content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Paragraph Text',
                      type: 'text',
                    },
                    {
                      name: 'highlightedPhrases',
                      title: 'Highlighted Phrases',
                      type: 'array',
                      of: [{type: 'string'}],
                      description: 'List of phrases within the paragraph that should be bold',
                    },
                  ],
                }
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
        }
      ],
    }),
    defineField({
      name: 'researchSection',
      title: 'Research and Factors Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Title for the Research and Factors section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'introText',
          title: 'Introduction Text',
          type: 'text',
          description: 'Introductory paragraph for the research section',
        },
        {
          name: 'conclusionText',
          title: 'Conclusion Text',
          type: 'text',
          description: 'Text that appears after the factors',
        },
        {
          name: 'factors',
          title: 'Contributing Factors',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Factor Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Factor Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'color',
                  title: 'Title Color',
                  type: 'string',
                  description: 'Hex color code (e.g., "#4DA6FF")',
                }
              ]
            }
          ],
          validation: (Rule) => Rule.required(),
        }
      ],
    }),
    defineField({
      name: 'assamLevelsSection',
      title: 'ASSAM Levels Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Title for the ASSAM Levels section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'introText',
          title: 'Introduction Text',
          type: 'text',
          description: 'Main introduction paragraph',
        },
        {
          name: 'subIntroText',
          title: 'Secondary Introduction Text',
          type: 'text',
          description: 'Secondary introduction paragraph',
        },
        {
          name: 'levels',
          title: 'ASSAM Levels',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'levelName',
                  title: 'Level Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Level Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'color',
                  title: 'Title Color',
                  type: 'string',
                  description: 'Hex color code (e.g., "#4CAF50")',
                }
              ]
            }
          ],
          validation: (Rule) => Rule.required(),
        }
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
      title: 'heroSection.title.0',
    },
    prepare({title}) {
      return {
        title: 'Home Page',
        subtitle: title || 'Home Page Content',
      }
    },
  },
})