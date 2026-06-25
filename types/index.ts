// ──────────────────────────────────────────────────────
//  ETTAAROUF TOURISME — Système de types centralisé
//  Toutes les interfaces partagées à travers l'application
// ──────────────────────────────────────────────────────

// ── Destination ────────────────────────────────────────
export interface Destination {
  id: string
  slug: string
  name: string
  country: string
  continent: Continent
  description: string
  shortDescription: string
  image: string
  gallery?: string[]
  priceFrom: number
  currency: Currency
  duration?: string
  highlights?: string[]
  climate?: string
  bestSeason?: string
  featured?: boolean
  popular?: boolean
  badge?: string // ex: "Nouveau", "Populaire"
  createdAt?: string
  updatedAt?: string
}

export type Continent =
  | 'afrique'
  | 'europe'
  | 'asie'
  | 'amerique'
  | 'oceanie'
  | 'moyen-orient'

// ── Voyage Organisé ────────────────────────────────────
export interface Voyage {
  id: string
  slug: string
  title: string
  destination: Pick<Destination, 'id' | 'slug' | 'name' | 'country' | 'image'>
  description: string
  shortDescription?: string
  itinerary?: ItineraryDay[]
  duration: number          // jours
  priceFrom: number
  currency: Currency
  maxParticipants?: number
  currentParticipants?: number
  departureDate?: string
  returnDate?: string
  nextDepartures?: string[]
  included?: string[]
  notIncluded?: string[]
  images: string[]
  coverImage: string
  featured?: boolean
  category: VoyageCategory
  rating?: number
  reviewCount?: number
  tags?: string[]
  difficulty?: 'facile' | 'modere' | 'difficile'
  badge?: string
  discount?: number         // pourcentage
  createdAt?: string
}

export type VoyageCategory =
  | 'circuit'
  | 'sejour'
  | 'omra'
  | 'hajj'
  | 'croisiere'
  | 'aventure'
  | 'luxe'
  | 'famille'
  | 'culturel'

export interface ItineraryDay {
  day: number
  title: string
  description: string
  activities?: string[]
  accommodation?: string
  meals?: Array<'petit-dejeuner' | 'dejeuner' | 'diner'>
}

// ── Hôtel ──────────────────────────────────────────────
export interface Hotel {
  id: string
  slug: string
  name: string
  destination: string
  destinationSlug: string
  stars: 1 | 2 | 3 | 4 | 5
  description: string
  shortDescription?: string
  image: string
  gallery?: string[]
  amenities?: string[]
  priceFrom: number
  currency: Currency
  rating?: number
  reviewCount?: number
  featured?: boolean
  address?: string
  coordinates?: { lat: number; lng: number }
}

// ── Vol ────────────────────────────────────────────────
export interface Flight {
  id: string
  origin: AirportCode
  originCity: string
  destination: AirportCode
  destinationCity: string
  airline: string
  airlineCode: string
  airlineLogo?: string
  departureDate: string
  returnDate?: string
  departureTime: string
  arrivalTime: string
  price: number
  currency: Currency
  class: FlightClass
  stops: number
  stopover?: string
  duration: string           // ex: "3h45"
  availableSeats?: number
}

export type FlightClass = 'economique' | 'affaires' | 'premiere'
export type AirportCode = string  // IATA : 'ALG', 'CDG', 'DXB'...

// ── Omra ───────────────────────────────────────────────
export interface OmraPackage extends Voyage {
  category: 'omra'
  hotelMecca?: string
  hotelMedina?: string
  hotelMeccaStars?: number
  hotelMedinaStars?: number
  nightsMecca: number
  nightsMedina: number
  transportationType: 'aerien' | 'terrestre'
  visaIncluded: boolean
  guidanceLang?: string[]
  season?: 'ramadan' | 'hors-ramadan'
}

// ── Visa ───────────────────────────────────────────────
export interface VisaService {
  id: string
  country: string
  flag: string
  processingTime: string
  price: number
  currency: Currency
  type: VisaType
  requirements?: string[]
  description?: string
}

export type VisaType = 'touriste' | 'affaires' | 'transit' | 'etudes' | 'famille'

// ── Témoignage ────────────────────────────────────────
export interface Testimonial {
  id: string
  name: string
  avatar?: string
  rating: 1 | 2 | 3 | 4 | 5
  comment: string
  destination?: string
  voyageTitle?: string
  date: string
  verified?: boolean
  platform?: 'google' | 'facebook' | 'trustpilot' | 'direct'
}

// ── Partenaire ────────────────────────────────────────
export interface Partner {
  id: string
  name: string
  logo: string
  logoDark?: string
  url?: string
  type: PartnerType
}

export type PartnerType = 'compagnie-aerienne' | 'hotel' | 'assurance' | 'visa' | 'transfert' | 'autre'

// ── Article de blog ───────────────────────────────────
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  image: string
  author: Author
  publishedAt: string
  updatedAt?: string
  category: string
  tags?: string[]
  readTime?: number
  featured?: boolean
  seo?: SEOData
}

export interface Author {
  id: string
  name: string
  avatar?: string
  bio?: string
}

// ── Promotion ────────────────────────────────────────
export interface Promotion {
  id: string
  title: string
  description: string
  image: string
  discountPercent?: number
  discountAmount?: number
  currency?: Currency
  code?: string
  validFrom: string
  validUntil: string
  voyage?: Pick<Voyage, 'id' | 'slug' | 'title'>
  destination?: Pick<Destination, 'id' | 'slug' | 'name'>
  featured?: boolean
}

// ── Recherche ─────────────────────────────────────────
export interface SearchParams {
  type: SearchType
  destination?: string
  origin?: string
  departureDate?: string
  returnDate?: string
  adults: number
  children: number
  infants: number
  rooms?: number
  class?: FlightClass
}

export type SearchType = 'vol' | 'hotel' | 'circuit' | 'omra'

// ── SEO ───────────────────────────────────────────────
export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  canonicalUrl?: string
  structuredData?: Record<string, unknown>
}

// ── Configuration du site ─────────────────────────────
export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  phone: string[]
  email: string
  address: string
  city: string
  country: string
  registrationNumber?: string
  social: SocialLinks
  businessHours?: string
}

export interface SocialLinks {
  facebook?: string
  instagram?: string
  twitter?: string
  whatsapp?: string
  youtube?: string
  tiktok?: string
}

// ── Utilitaires ───────────────────────────────────────
export type Currency = 'DZD' | 'EUR' | 'USD' | 'SAR'

export interface PaginationMeta {
  total: number
  page: number
  perPage: number
  pageCount: number
}

export interface ApiResponse<T> {
  data: T
  meta?: PaginationMeta
  error?: string
}

// ── Hygraph (CMS) ─────────────────────────────────────
export interface HygraphImage {
  url: string
  width?: number
  height?: number
  mimeType?: string
  fileName?: string
}

export interface HygraphRichText {
  html: string
  markdown?: string
  text?: string
}
