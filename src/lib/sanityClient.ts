import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN // Only if using preview
});

export async function getHomePage() {
  return sanityClient.fetch(`
    *[_type == "homePage"][0] {
      heroSection {
        title,
        subtitle,
        buttonText,
        buttonLink,
        heroImage {
          asset->{
            _id,
            url
          }
        }
      },
      heroSlides[] {
        title,
        subtitle,
        buttonText,
        buttonLink,
        slideImage {
          asset->{
            _id,
            url
          }
        }
      },
      cards[] {
        title,
        icon,
        color,
        content[] {
          text,
          highlightedPhrases
        }
      },
      researchSection {
        title,
        introText,
        conclusionText,
        factors[] {
          title,
          description,
          color
        }
      },
      assamLevelsSection {
        title,
        introText,
        subIntroText,
        levels[] {
          levelName,
          description,
          color
        }
      },
      seo
    }
  `);
}

export async function getAboutPage() {
  return sanityClient.fetch(`
    *[_type == "aboutPage"][0] {
      pageTitle,
      heroSection {
        heading,
        subheading,
        heroImage {
          asset->{
            _id,
            url
          }
        }
      },
      introText,
      missionStatement {
        heading,
        content,
        image {
          asset->{
            _id,
            url
          }
        }
      },
      visionStatement {
        heading,
        content,
        image {
          asset->{
            _id,
            url
          }
        }
      },
      studies {
        heading,
        content,
        image {
          asset->{
            _id,
            url
          }
        }
      },
      seo
    }
  `);
}

export async function getProductPage() {
  return sanityClient.fetch(`
    *[_type == "productPage"][0] {
      pageTitle,
      products[] {
        title,
        description,
        benefit,
        buttonText,
        buttonLink,
        color,
        image {
          asset->{
            _id,
            url
          }
        }
      },
      seo
    }
  `);
}

export async function getResearchPage() {
  return sanityClient.fetch(`
    *[_type == "researchPage"][0] {
      pageTitle,
      heroSection {
        heading,
        subheading,
        heroImage {
          asset->{
            _id,
            url
          }
        }
      },
      introductionSection {
        heading,
        content
      },
      researchAreas[] {
        title,
        description,
        image {
          asset->{
            _id,
            url
          }
        }
      },
      publications[] {
        title,
        authors,
        publicationDate,
        journal,
        abstract,
        link,
        thumbnail {
          asset->{
            _id,
            url
          }
        }
      },
      researchTeam[] {
        name,
        role,
        bio,
        image {
          asset->{
            _id,
            url
          }
        },
        researchInterests
      },
      seo
    }
  `);
}

export async function getContactPage() {
  return sanityClient.fetch(`
    *[_type == "contactPage"][0] {
      pageTitle,
      pageSubtitle,
      profileImage {
        asset->{
          _id,
          url
        }
      },
      contactInfo {
        email,
        phone,
        address {
          companyName,
          street,
          city,
          roomNumber
        }
      },
      businessHours {
        weekdays,
        weekend,
        urgentInquiries
      },
      contactForm {
        heading,
        buttonText
      },
      seo
    }
  `);
}