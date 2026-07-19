import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow major AI crawlers (some platforms block these by default)
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'ChatGPT-User',    allow: '/' },
      { userAgent: 'ClaudeBot',       allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'Claude-Web',      allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'Amazonbot',       allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Googlebot',       allow: '/' },
      { userAgent: 'Bingbot',         allow: '/' },
      { userAgent: 'cohere-ai',       allow: '/' },
      { userAgent: 'FacebookBot',     allow: '/' },
      { userAgent: 'YouBot',          allow: '/' },
      { userAgent: 'Applebot',        allow: '/' },
      { userAgent: 'Bytespider',      allow: '/' },
      { userAgent: 'DuckDuckBot',     allow: '/' },
    ],
    sitemap: 'https://samsbpm.ca/sitemap.xml',
    host: 'https://samsbpm.ca',
  }
}
