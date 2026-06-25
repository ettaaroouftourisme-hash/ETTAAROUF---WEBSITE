import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url

  const staticRoutes = [
    { url: base,               priority: 1.0,  changeFrequency: 'daily'   as const },
    { url: `${base}/destinations`, priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${base}/voyages`,  priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: `${base}/omra`,     priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: `${base}/hotels`,   priority: 0.8,  changeFrequency: 'weekly'  as const },
    { url: `${base}/vols`,     priority: 0.8,  changeFrequency: 'daily'   as const },
    { url: `${base}/visa`,     priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: `${base}/blog`,     priority: 0.7,  changeFrequency: 'weekly'  as const },
    { url: `${base}/contact`,  priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: `${base}/promotions`, priority: 0.8, changeFrequency: 'daily'  as const },
    { url: `${base}/faq`,      priority: 0.6,  changeFrequency: 'monthly' as const },
  ]

  return staticRoutes.map(r => ({
    ...r,
    lastModified: new Date(),
  }))
}
