/**
 * Couche de service CMS — abstraction entre Hygraph et l'app
 * ──────────────────────────────────────────────────────────────
 * Pattern Repository : l'app ne sait pas si les données viennent
 * du CMS ou des données mock. Permet de switcher de CMS facilement.
 * ──────────────────────────────────────────────────────────────
 */

import { hygraphFetch, QUERIES } from '@/lib/hygraph'
import type { Destination, Voyage, Testimonial, Partner, BlogPost } from '@/types'

// ── Import des données mock (fallback développement) ──────────
import {
  mockDestinations,
  mockVoyages,
  mockTestimonials,
  mockPartners,
} from '@/data/mock'

// ── Helper : choisit CMS ou mock ─────────────────────────────
async function fetchOrMock<T>(
  fetcher: () => Promise<T | null>,
  fallback: T
): Promise<T> {
  try {
    const result = await fetcher()
    return result ?? fallback
  } catch {
    return fallback
  }
}

// ── Destinations ──────────────────────────────────────────────
export async function getPopularDestinations(limit = 6): Promise<Destination[]> {
  return fetchOrMock(
    () => hygraphFetch<{ destinations: Destination[] }>(
      QUERIES.POPULAR_DESTINATIONS,
      { first: limit }
    ).then(r => r?.destinations ?? null),
    mockDestinations.filter(d => d.popular).slice(0, limit)
  )
}

export async function getAllDestinations(): Promise<Destination[]> {
  return fetchOrMock(
    () => hygraphFetch<{ destinations: Destination[] }>(
      QUERIES.POPULAR_DESTINATIONS,
      { first: 50 }
    ).then(r => r?.destinations ?? null),
    mockDestinations
  )
}

// ── Voyages ───────────────────────────────────────────────────
export async function getFeaturedVoyages(limit = 4): Promise<Voyage[]> {
  return fetchOrMock(
    () => hygraphFetch<{ voyages: Voyage[] }>(
      QUERIES.FEATURED_VOYAGES,
      { first: limit }
    ).then(r => r?.voyages ?? null),
    mockVoyages.filter(v => v.featured).slice(0, limit)
  )
}

// ── Témoignages ───────────────────────────────────────────────
export async function getTestimonials(limit = 6): Promise<Testimonial[]> {
  return fetchOrMock(
    () => hygraphFetch<{ testimonials: Testimonial[] }>(
      QUERIES.TESTIMONIALS,
      { first: limit }
    ).then(r => r?.testimonials ?? null),
    mockTestimonials.slice(0, limit)
  )
}

// ── Partenaires ───────────────────────────────────────────────
export async function getPartners(): Promise<Partner[]> {
  return fetchOrMock(
    () => hygraphFetch<{ partners: Partner[] }>(
      QUERIES.PARTNERS
    ).then(r => r?.partners ?? null),
    mockPartners
  )
}

// ── Articles de blog ──────────────────────────────────────────
export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  return fetchOrMock(
    () => hygraphFetch<{ blogPosts: BlogPost[] }>(
      QUERIES.RECENT_POSTS,
      { first: limit }
    ).then(r => r?.blogPosts ?? null),
    []
  )
}
