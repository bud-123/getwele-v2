import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'Main heading for the contact page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'string',
      description: 'Subtitle text below the main heading',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Profile image shown on the contact page',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            {
              name: 'companyName',
              title: 'Company/Building Name',
              type: 'string',
            },
            {
              name: 'street',
              title: 'Street Address',
              type: 'string',
            },
            {
              name: 'city',
              title: 'City, State, ZIP',
              type: 'string',
            },
            {
              name: 'roomNumber',
              title: 'Room Number',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        {
          name: 'weekdays',
          title: 'Weekday Hours',
          type: 'string',
          description: 'Business hours Monday-Friday',
        },
        {
          name: 'weekend',
          title: 'Weekend Hours',
          type: 'string',
          description: 'Business hours Saturday-Sunday',
        },
        {
          name: 'urgentInquiries',
          title: 'Urgent Inquiries Text',
          type: 'string',
          description: 'Text for urgent inquiries section',
        },
      ],
    }),
    defineField({
      name: 'contactForm',
      title: 'Contact Form',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Form Heading',
          type: 'string',
        },
        {
          name: 'buttonText',
          title: 'Submit Button Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
        },
      ],
    }),
  ],
})