import type { Partner } from '@/types'

interface Props {
  partners?: Partner[]
}

// Partenaires affichés sous forme textuelle (fallback si pas de logos SVG)
const PARTNER_NAMES = [
  'Air Algérie',
  'Turkish Airlines',
  'Emirates',
  'Marriott Hotels',
  'Accor Hotels',
  'AXA Assistance',
  'Qatar Airways',
  'Hilton',
]

export default function Partners({ partners }: Props) {
  const names = partners?.map(p => p.name) ?? PARTNER_NAMES

  return (
    <section className="bg-ivory-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre discret */}
        <p className="text-center font-body text-xs text-charcoal/40 uppercase tracking-[0.3em] mb-8">
          Nos partenaires de confiance
        </p>

        {/* Bande défilante (CSS animation) */}
        <div className="relative overflow-hidden">
          {/* Fade gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10
                           bg-gradient-to-r from-ivory-100 to-transparent pointer-events-none" />
          {/* Fade droite */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10
                           bg-gradient-to-l from-ivory-100 to-transparent pointer-events-none" />

          {/* Double liste pour boucle infinie */}
          <div className="flex items-center gap-10 lg:gap-16 w-max animate-[scroll_30s_linear_infinite]"
               style={{ '--tw-translate-x': '0' } as React.CSSProperties}>
            {[...names, ...names].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-6 py-4
                            bg-white rounded-xl border border-ivory-200
                            shadow-sm hover:shadow-card hover:border-gold/30
                            transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span className="font-body text-charcoal/60 font-semibold text-sm tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {[
            '🏛️ Agréé Ministère du Tourisme',
            '🔒 Paiements sécurisés SSL',
            '⭐ Note Google 4.9/5',
            '✈️ IATA Accredited',
          ].map(cert => (
            <div key={cert}
                 className="font-body text-xs text-charcoal/55 flex items-center gap-2
                              bg-white px-4 py-2 rounded-full border border-ivory-200">
              {cert}
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation inline pour le défilement */}
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
