'use client'

import { useCounter } from '@/hooks/useCounter'

const STATS = [
  { value: 15,    suffix: '+',  label: 'Années d\'expérience',   description: 'Au service des voyageurs algériens' },
  { value: 12000, suffix: '+',  label: 'Voyageurs satisfaits',    description: 'Qui nous font confiance chaque année' },
  { value: 60,    suffix: '+',  label: 'Destinations',            description: 'Sur 5 continents à explorer' },
  { value: 98,    suffix: '%',  label: 'Taux de satisfaction',    description: 'Mesuré sur nos derniers voyages' },
]

export default function KeyNumbers() {
  return (
    <section className="bg-ivory-100 py-20 lg:py-24 relative overflow-hidden">
      {/* Ligne décorative dorée */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-gold opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              En chiffres
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-display-lg text-lapis-800 font-semibold leading-tight">
            Une Confiance
            <span className="text-gold italic font-light"> Méritée</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map(stat => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, suffix, label, description }: typeof STATS[number]) {
  const { count, ref } = useCounter(value, 2200)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
         className="text-center group p-6 rounded-2xl
                     hover:bg-white hover:shadow-card
                     transition-all duration-300 ease-luxury">
      {/* Nombre animé */}
      <div className="font-display text-lapis-800 font-semibold mb-2
                       text-4xl sm:text-5xl lg:text-6xl leading-none
                       group-hover:text-gold transition-colors duration-300">
        {count.toLocaleString('fr-FR')}
        <span className="text-gold">{suffix}</span>
      </div>

      {/* Label */}
      <h3 className="font-body text-charcoal font-semibold text-sm sm:text-base mb-1.5 leading-snug">
        {label}
      </h3>

      {/* Description */}
      <p className="font-body text-charcoal/45 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
