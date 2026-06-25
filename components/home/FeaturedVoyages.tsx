import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, ArrowRight, Tag } from 'lucide-react'
import type { Voyage } from '@/types'
import { formatPrice, formatDuration } from '@/utils/formatters'

interface Props {
  voyages: Voyage[]
}

export default function FeaturedVoyages({ voyages }: Props) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── En-tête ─────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Nos voyages
              </span>
            </div>
            <h2 className="font-display text-display-lg text-lapis-800 font-semibold leading-tight">
              Voyages en Vedette
              <br />
              <span className="text-gold italic font-light">Sélection Premium</span>
            </h2>
          </div>
          <Link
            href="/voyages"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-lapis-800
                        hover:text-gold transition-colors duration-200 group shrink-0"
          >
            Tous les voyages
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Grille de voyages ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {voyages.map(voyage => (
            <VoyageCard key={voyage.id} voyage={voyage} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VoyageCard({ voyage: v }: { voyage: Voyage }) {
  const categoryColors: Record<string, string> = {
    circuit:   'bg-blue-50 text-blue-700 border-blue-200',
    sejour:    'bg-emerald-50 text-emerald-700 border-emerald-200',
    omra:      'bg-amber-50 text-amber-700 border-amber-200',
    hajj:      'bg-amber-50 text-amber-700 border-amber-200',
    luxe:      'bg-purple-50 text-purple-700 border-purple-200',
    famille:   'bg-pink-50 text-pink-700 border-pink-200',
    croisiere: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    aventure:  'bg-orange-50 text-orange-700 border-orange-200',
    culturel:  'bg-teal-50 text-teal-700 border-teal-200',
  }
  const catColor = categoryColors[v.category] ?? 'bg-ivory-100 text-charcoal border-ivory-200'

  return (
    <Link
      href={`/voyages/${v.slug}`}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden
                  shadow-card hover:shadow-card-lg border border-ivory-200
                  transition-all duration-400 ease-luxury hover:-translate-y-1.5"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={v.coverImage}
          alt={v.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />

        {/* Badge réduction */}
        {v.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white font-body text-xs
                           font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Tag className="h-3 w-3" />
            -{v.discount}%
          </div>
        )}

        {/* Catégorie */}
        <div className={`absolute top-3 right-3 font-body text-[10px] font-semibold
                          px-2.5 py-1 rounded-full border uppercase tracking-wider ${catColor}`}>
          {v.category}
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-5">
        {/* Destination */}
        <p className="font-body text-xs text-charcoal/50 uppercase tracking-widest mb-1.5">
          {v.destination.name}, {v.destination.country}
        </p>

        {/* Titre */}
        <h3 className="font-display text-lapis-800 text-lg font-semibold leading-snug mb-2
                         group-hover:text-gold transition-colors duration-200 line-clamp-2">
          {v.title}
        </h3>

        {/* Description courte */}
        {v.shortDescription && (
          <p className="font-body text-sm text-charcoal/55 leading-relaxed mb-3 line-clamp-2">
            {v.shortDescription}
          </p>
        )}

        {/* Méta */}
        <div className="flex items-center gap-4 mb-4 mt-auto">
          {v.rating && (
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-gold fill-gold" />
              <span className="font-body text-sm font-semibold text-charcoal">{v.rating}</span>
              {v.reviewCount && (
                <span className="font-body text-xs text-charcoal/40">({v.reviewCount})</span>
              )}
            </div>
          )}
          <div className="flex items-center gap-1 text-charcoal/50">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-body text-xs">{formatDuration(v.duration)}</span>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-ivory-200 mb-4" />

        {/* Prix & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-body text-xs text-charcoal/45">À partir de</span>
            <div className="font-display text-lapis-800 text-xl font-semibold">
              {formatPrice(v.priceFrom, v.currency)}
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30
                           flex items-center justify-center
                           group-hover:bg-gold group-hover:border-gold
                           transition-all duration-300">
            <ArrowRight className="h-4 w-4 text-gold group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Inclus */}
        {v.included && v.included.length > 0 && (
          <p className="font-body text-[10px] text-charcoal/40 mt-3 leading-relaxed">
            ✓ {v.included.slice(0, 3).join(' · ')}
          </p>
        )}
      </div>
    </Link>
  )
}
