/**
 * Service Destinations — requêtes et filtres spécifiques
 */

import { hygraphFetch, QUERIES } from '@/lib/hygraph'
import { mockDestinations } from '@/data/mock'
import type { Destination, Continent } from '@/types'

export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    const result = await hygraphFetch<{ destination: Destination }>(
      QUERIES.DESTINATION_BY_SLUG,
      { slug }
    )
    if (result?.destination) return result.destination
  } catch {}

  return mockDestinations.find(d => d.slug === slug) ?? null
}

export async function getDestinationsByContinent(
  continent: Continent,
  limit = 8
): Promise<Destination[]> {
  return mockDestinations
    .filter(d => d.continent === continent)
    .slice(0, limit)
}

export function getDestinationSlugs(): string[] {
  return mockDestinations.map(d => d.slug)
}
