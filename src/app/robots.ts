import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://samsbpm.ca/sitemap.xml',
    host: 'https://samsbpm.ca',
  }
}
