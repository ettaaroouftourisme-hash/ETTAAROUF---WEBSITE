/**
 * Utilitaires SEO centralisés
 * ──────────────────────────────────────────────────────────────
 * Génère les métadonnées Next.js 15 (Metadata API) de manière
 * cohérente à travers toutes les pages du site.
 * ──────────────────────────────────────────────────────────────
 */

import type { Metadata } from 'next'
import type { SEOData } from '@/types'

// ── Configuration de base ──────────────────────────────────────
export const SITE_CONFIG = {
  name:        'Ettaarouf Tourisme et Voyage',
  shortName:   'Ettaarouf',
  tagline:     'Votre Passeport vers l\'Extraordinaire',
  description: 'Agence de voyage algérienne spécialisée en voyages organisés, Omra, circuits internationaux, hôtels et billets d\'avion. Service premium, prix compétitifs.',
  url:         process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ettaarouf-tourisme.dz',
  locale:      'fr_DZ',
  phone:       ['+213 XX XX XX XX'],
  email:       'contact@ettaarouf-tourisme.dz',
  address:     'Alger, Algérie',
  twitterHandle: '@EttaaroufTravel',
  ogImage:     '/images/og-default.jpg',
}

// ── Générateur de métadonnées ─────────────────────────────────
export function generateMetadata(
  page: {
    title?: string
    description?: string
    path?: string
    ogImage?: string
    noIndex?: boolean
    keywords?: string[]
    structuredData?: Record<string, unknown>
  } = {}
): Metadata {
  const title = page.title
    ? `${page.title} | ${SITE_CONFIG.shortName}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`

  const description = page.description ?? SITE_CONFIG.description
  const url         = page.path ? `${SITE_CONFIG.url}${page.path}` : SITE_CONFIG.url
  const ogImage     = page.ogImage ?? SITE_CONFIG.ogImage

  return {
    title,
    description,
    keywords: [
      'agence de voyage algérie',
      'voyage organisé algérie',
      'omra algérie',
      'circuit touristique',
      'billet avion algérie',
      'hôtel pas cher algérie',
      'visa algérie',
      ...(page.keywords ?? []),
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
      languages: {
        'fr': url,
        'ar': `${url}?lang=ar`,
      },
    },
    openGraph: {
      type:        'website',
      locale:      SITE_CONFIG.locale,
      url,
      title,
      description,
      siteName:    SITE_CONFIG.name,
      images: [{
        url:    ogImage,
        width:  1200,
        height: 630,
        alt:    title,
      }],
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
      creator:     SITE_CONFIG.twitterHandle,
      images:      [ogImage],
    },
    robots: page.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  }
}

// ── Données structurées JSON-LD ────────────────────────────────
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'TravelAgency',
    name:       SITE_CONFIG.name,
    url:        SITE_CONFIG.url,
    logo:       `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    address: {
      '@type':           'PostalAddress',
      addressLocality:   'Alger',
      addressCountry:    'DZ',
    },
    contactPoint: {
      '@type':           'ContactPoint',
      contactType:       'customer service',
      availableLanguage: ['French', 'Arabic'],
    },
    sameAs: [
      'https://www.facebook.com/ettaarouf',
      'https://www.instagram.com/ettaarouf',
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type':   'ListItem',
      position:  index + 1,
      name:      item.name,
      item:      `${SITE_CONFIG.url}${item.url}`,
    })),
  }
}

export function generateVoyageSchema(voyage: {
  title: string
  description: string
  priceFrom: number
  currency: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type':    'TouristTrip',
    name:       voyage.title,
    description: voyage.description,
    image:      voyage.image,
    url:        `${SITE_CONFIG.url}${voyage.url}`,
    offers: {
      '@type':    'Offer',
      price:      voyage.priceFrom,
      priceCurrency: voyage.currency,
      availability: 'https://schema.org/InStock',
    },
  }
}
