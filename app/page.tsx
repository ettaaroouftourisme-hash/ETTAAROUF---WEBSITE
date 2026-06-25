/**
 * Page d'accueil — ETTAAROUF TOURISME ET VOYAGE
 * ──────────────────────────────────────────────────────────────
 * Server Component : les données sont chargées côté serveur
 * (ISR avec revalidation toutes les 60s via Netlify).
 * Chaque section est un composant indépendant et réutilisable.
 * ──────────────────────────────────────────────────────────────
 */

import type { Metadata } from 'next'
import { generateMetadata }       from '@/lib/seo'
import {
  getPopularDestinations,
  getFeaturedVoyages,
  getTestimonials,
  getPartners,
} from '@/services/cms'

// Composants de la Home
import Header              from '@/components/layout/Header'
import Footer              from '@/components/layout/Footer'
import Hero                from '@/components/home/Hero'
import SearchEngine        from '@/components/home/SearchEngine'
import PopularDestinations from '@/components/home/PopularDestinations'
import FeaturedVoyages     from '@/components/home/FeaturedVoyages'
import WhyChooseUs         from '@/components/home/WhyChooseUs'
import KeyNumbers          from '@/components/home/KeyNumbers'
import Testimonials        from '@/components/home/Testimonials'
import Partners            from '@/components/home/Partners'
import CTASection          from '@/components/home/CTASection'

// ── Métadonnées de la page ────────────────────────────────────
export const metadata: Metadata = generateMetadata({
  title:       'Agence de Voyage Algérienne — Voyages Organisés & Omra',
  description: 'Ettaarouf Tourisme : circuits internationaux, Omra, séjours de luxe, hôtels et billets d\'avion depuis l\'Algérie. 15 ans d\'expérience. Devis gratuit.',
  path:        '/',
  keywords:    ['agence voyage alger', 'voyage organisé algérie', 'omra algérie', 'circuit turquie', 'voyage dubai'],
})

// ── ISR — Revalidation toutes les 60 secondes ─────────────────
export const revalidate = 60

// ── Page ─────────────────────────────────────────────────────
export default async function HomePage() {
  // Chargement parallèle de toutes les données (Server Components)
  const [destinations, voyages, testimonials, partners] = await Promise.all([
    getPopularDestinations(6),
    getFeaturedVoyages(4),
    getTestimonials(6),
    getPartners(),
  ])

  return (
    <>
      {/* Navigation fixe transparente */}
      <Header />

      {/* ── 1. Hero immersif ─────────────────────────────── */}
      <Hero />

      {/* ── 2. Moteur de recherche (Client Component) ────── */}
      <SearchEngine />

      {/* ── 3. Destinations populaires ───────────────────── */}
      <PopularDestinations destinations={destinations} />

      {/* ── 4. Voyages en vedette ────────────────────────── */}
      <FeaturedVoyages voyages={voyages} />

      {/* ── 5. Pourquoi nous choisir ─────────────────────── */}
      <WhyChooseUs />

      {/* ── 6. Chiffres clés (animés au scroll) ─────────── */}
      <KeyNumbers />

      {/* ── 7. Témoignages clients ───────────────────────── */}
      <Testimonials testimonials={testimonials} />

      {/* ── 8. Partenaires ───────────────────────────────── */}
      <Partners partners={partners} />

      {/* ── 9. Call to Action final ──────────────────────── */}
      <CTASection />

      {/* ── 10. Pied de page complet ─────────────────────── */}
      <Footer />
    </>
  )
}
