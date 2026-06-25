'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import type { Testimonial } from '@/types'
import { formatDate } from '@/utils/formatters'

interface Props {
  testimonials: Testimonial[]
}

const PLATFORM_COLORS: Record<string, string> = {
  google:     'text-blue-600',
  facebook:   'text-blue-500',
  trustpilot: 'text-green-600',
  direct:     'text-gold',
}

export default function Testimonials({ testimonials }: Props) {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length
  const prev  = () => setCurrent(c => (c - 1 + total) % total)
  const next  = () => setCurrent(c => (c + 1) % total)

  if (!testimonials.length) return null

  // Affiche 3 cartes sur desktop (current, current+1, current+2) — scroll infini
  const visible = [0, 1, 2].map(i => testimonials[(current + i) % total])

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── En-tête ─────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Témoignages
              </span>
            </div>
            <h2 className="font-display text-display-lg text-lapis-800 font-semibold leading-tight">
              Ils Nous Font
              <br />
              <span className="text-gold italic font-light">Confiance</span>
            </h2>
          </div>

          {/* Contrôles */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Précédent"
              className="w-11 h-11 rounded-full border-2 border-lapis-800/20
                          flex items-center justify-center text-lapis-800
                          hover:bg-lapis-800 hover:text-white hover:border-lapis-800
                          transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-body text-sm text-charcoal/40">
              {current + 1} / {total}
            </span>
            <button
              onClick={next}
              aria-label="Suivant"
              className="w-11 h-11 rounded-full border-2 border-lapis-800/20
                          flex items-center justify-center text-lapis-800
                          hover:bg-lapis-800 hover:text-white hover:border-lapis-800
                          transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Carrousel ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {visible.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} highlighted={i === 0} />
          ))}
        </div>

        {/* ── Indicateurs ─────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? 'w-6 h-2 bg-gold'
                  : 'w-2 h-2 bg-ivory-300 hover:bg-gold/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t, highlighted }: { testimonial: Testimonial; highlighted: boolean }) {
  return (
    <div className={`relative p-7 rounded-3xl border transition-all duration-300 ${
      highlighted
        ? 'bg-lapis-800 border-lapis-700 shadow-card-lg scale-[1.01]'
        : 'bg-white border-ivory-200 shadow-card hover:shadow-card-lg hover:-translate-y-1'
    }`}>
      {/* Guillemet décoratif */}
      <Quote className={`h-8 w-8 mb-5 ${highlighted ? 'text-gold/40' : 'text-gold/25'}`} />

      {/* Étoiles */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < t.rating ? 'fill-gold text-gold' : 'text-ivory-300'}`}
          />
        ))}
      </div>

      {/* Commentaire */}
      <p className={`font-body text-sm leading-relaxed mb-6 ${
        highlighted ? 'text-white/80' : 'text-charcoal/70'
      }`}>
        &ldquo;{t.comment}&rdquo;
      </p>

      {/* Footer */}
      <div className={`pt-5 border-t ${highlighted ? 'border-white/10' : 'border-ivory-200'}`}>
        <div className="flex items-center justify-between">
          <div>
            <div className={`font-body font-semibold text-sm ${highlighted ? 'text-white' : 'text-charcoal'}`}>
              {t.name}
            </div>
            {t.destination && (
              <div className={`font-body text-xs mt-0.5 ${highlighted ? 'text-gold/70' : 'text-charcoal/45'}`}>
                {t.destination}
              </div>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            {t.verified && (
              <div className={`flex items-center gap-1 font-body text-[10px] ${
                highlighted ? 'text-gold/70' : 'text-emerald-600'
              }`}>
                <CheckCircle2 className="h-3 w-3" />
                Vérifié
              </div>
            )}
            {t.platform && t.platform !== 'direct' && (
              <span className={`font-body text-[10px] capitalize ${
                highlighted ? 'text-white/40' : PLATFORM_COLORS[t.platform] ?? 'text-charcoal/40'
              }`}>
                via {t.platform}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
