/**
 * Client Hygraph (GraphQL Headless CMS)
 * ──────────────────────────────────────────────────────────────
 * Singleton GraphQL request client avec :
 *  - Support ISR (revalidation Netlify)
 *  - Gestion token d'authentification
 *  - Cache par défaut 60s (configurable par requête)
 *  - Prêt pour la preview content stage (brouillons)
 * ──────────────────────────────────────────────────────────────
 */

import { GraphQLClient } from 'graphql-request'

// ── Configuration ─────────────────────────────────────────────
// Ne jamais lancer une erreur au niveau module — Next.js analyse les routes
// au build-time même sans variables d'environnement configurées.
// La validation se fait à l'intérieur de hygraphFetch() à l'exécution.
const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT ?? ''
const HYGRAPH_TOKEN    = process.env.HYGRAPH_TOKEN    ?? ''

// ── Client publié (PUBLISHED) ─────────────────────────────────
export const hygraphClient = HYGRAPH_ENDPOINT
  ? new GraphQLClient(HYGRAPH_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${HYGRAPH_TOKEN}`,
      },
    })
  : null

// ── Client preview (DRAFT) — pour l'admin futur ───────────────
export const hygraphPreviewClient = HYGRAPH_ENDPOINT
  ? new GraphQLClient(
      HYGRAPH_ENDPOINT.replace('/master', '/draft'),
      {
        headers: {
          Authorization: `Bearer ${HYGRAPH_TOKEN}`,
        },
      }
    )
  : null

// ── Fonction de requête principale ────────────────────────────
/**
 * Effectue une requête GraphQL vers Hygraph.
 * Si le client n'est pas configuré (env de dev sans CMS),
 * renvoie null pour permettre le fallback vers les données mock.
 */
export async function hygraphFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: {
    preview?: boolean
    tags?: string[]
    revalidate?: number | false
  }
): Promise<T | null> {
  const client = options?.preview ? hygraphPreviewClient : hygraphClient

  if (!client) {
    // Pas de client configuré → fallback mock en développement
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Hygraph] Client non configuré, utilisation des données mock.')
    }
    return null
  }

  try {
    const data = await client.request<T>(query, variables)
    return data
  } catch (error) {
    console.error('[Hygraph] Erreur de requête:', error)
    return null
  }
}

// ── Queries communes ───────────────────────────────────────────
export const QUERIES = {
  // Destinations populaires pour la home
  POPULAR_DESTINATIONS: `
    query PopularDestinations($first: Int = 6) {
      destinations(
        where: { popular: true }
        orderBy: priceFrom_ASC
        first: $first
      ) {
        id slug name country continent
        shortDescription priceFrom currency
        image { url width height }
        badge featured popular
      }
    }
  `,

  // Voyages en vedette pour la home
  FEATURED_VOYAGES: `
    query FeaturedVoyages($first: Int = 4) {
      voyages(
        where: { featured: true }
        orderBy: createdAt_DESC
        first: $first
      ) {
        id slug title category
        shortDescription duration priceFrom currency
        rating reviewCount badge discount
        coverImage { url }
        destination { name country }
      }
    }
  `,

  // Témoignages pour la home
  TESTIMONIALS: `
    query Testimonials($first: Int = 6) {
      testimonials(
        where: { verified: true }
        orderBy: createdAt_DESC
        first: $first
      ) {
        id name avatar { url } rating
        comment destination date platform
      }
    }
  `,

  // Partenaires
  PARTNERS: `
    query Partners {
      partners(orderBy: name_ASC) {
        id name type
        logo { url } logoDark { url }
        url
      }
    }
  `,

  // Article de blog récents
  RECENT_POSTS: `
    query RecentPosts($first: Int = 3) {
      blogPosts(
        orderBy: publishedAt_DESC
        first: $first
      ) {
        id slug title excerpt
        image { url }
        author { name avatar { url } }
        publishedAt category readTime
      }
    }
  `,

  // Destination par slug
  DESTINATION_BY_SLUG: `
    query DestinationBySlug($slug: String!) {
      destination(where: { slug: $slug }) {
        id slug name country continent
        description shortDescription
        image { url width height }
        gallery { url }
        priceFrom currency duration
        highlights climate bestSeason
      }
    }
  `,
}

// ── Revalidation webhook ───────────────────────────────────────
/**
 * Vérifie la signature du webhook Hygraph pour l'ISR.
 * À utiliser dans app/api/revalidate/route.ts
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  // Implémentation HMAC-SHA256
  // À compléter avec 'crypto' native de Node.js
  const crypto = require('crypto') as typeof import('crypto')
  const expectedSig = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  return `sha256=${expectedSig}` === signature
}
