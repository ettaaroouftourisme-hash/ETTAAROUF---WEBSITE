import type { ElementType } from 'react'
import { Shield, Award, Headphones, Globe2, Clock, CreditCard } from 'lucide-react'

type AccentKey = 'gold' | 'amber' | 'emerald'

const REASONS: { Icon: ElementType; title: string; description: string; accent: AccentKey }[] = [
  {
    Icon:        Award,
    title:       'Agréé par le Ministère',
    description: 'Agence officiellement agréée et réglementée, garantissant votre sécurité et vos droits à chaque voyage.',
    accent: 'gold',
  },
  {
    Icon:        Headphones,
    title:       'Assistance 7j/7',
    description: 'Notre équipe est disponible à toute heure pour vous accompagner avant, pendant et après votre voyage.',
    accent: 'amber',
  },
  {
    Icon:        Shield,
    title:       'Réservation Sécurisée',
    description: 'Vos paiements et données personnelles sont protégés par les standards de sécurité les plus stricts.',
    accent: 'emerald',
  },
  {
    Icon:        Globe2,
    title:       '60+ Destinations',
    description: 'Un portefeuille riche de destinations soigneusement sélectionnées sur 5 continents pour tous les goûts.',
    accent: 'amber',
  },
  {
    Icon:        Clock,
    title:       '15 ans d\'Expérience',
    description: 'Plus de 15 ans au service des voyageurs algériens, avec une expertise reconnue sur les circuits Omra.',
    accent: 'gold',
  },
  {
    Icon:        CreditCard,
    title:       'Meilleur Prix Garanti',
    description: 'Nous vous remboursons la différence si vous trouvez le même voyage moins cher ailleurs. Garanti.',
    accent: 'emerald',
  },
]

// Couleurs par accent
const accentMap = {
  gold: {
    bg:   'bg-gold/12 border-gold/25 group-hover:bg-gold group-hover:border-gold',
    icon: 'text-gold group-hover:text-white',
    glow: 'group-hover:shadow-[0_0_30px_rgba(200,164,90,0.25)]',
    line: 'group-hover:bg-gold/40',
    dot:  'bg-gold',
  },
  amber: {
    bg:   'bg-amber/10 border-amber/25 group-hover:bg-amber group-hover:border-amber',
    icon: 'text-amber group-hover:text-white',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,140,0,0.20)]',
    line: 'group-hover:bg-amber/40',
    dot:  'bg-amber',
  },
  emerald: {
    bg:   'bg-emerald/10 border-emerald/25 group-hover:bg-emerald group-hover:border-emerald',
    icon: 'text-emerald group-hover:text-white',
    glow: 'group-hover:shadow-[0_0_30px_rgba(45,122,62,0.20)]',
    line: 'group-hover:bg-emerald/40',
    dot:  'bg-emerald',
  },
} as const

export default function WhyChooseUs() {
  return (
    <section className="bg-lapis-800 py-20 lg:py-28 relative overflow-hidden">

      {/* ── Motifs décoratifs inspirés du logo ── */}
      {/* Cercle grand fond */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full
                       border border-white/[0.04] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full
                       border border-white/[0.04] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      {/* Lueur ambre — soleil du logo — haut droite */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none
                       bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,0,0.07)_0%,transparent_65%)]" />
      {/* Lueur dorée bas gauche */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none
                       bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,164,90,0.06)_0%,transparent_65%)]" />
      {/* Cercle central décoratif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[800px] h-[800px] rounded-full border border-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── En-tête ─────────────────────────── */}
        <div className="text-center mb-16">
          {/* Eyebrow avec accent soleil */}
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
            <div className="flex items-center gap-2">
              {/* Soleil miniature du logo */}
              <div className="w-4 h-4 rounded-full bg-amber/80 shadow-[0_0_8px_rgba(255,140,0,0.5)]" />
              <span className="font-body text-gold text-xs tracking-[0.35em] uppercase font-semibold">
                Notre engagement
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-display-lg text-white font-semibold leading-tight mb-5">
            Pourquoi Choisir
            <br />
            <span className="text-gold-light italic font-light">Ettaarouf Tourisme ?</span>
          </h2>
          <p className="font-body text-white/55 text-base max-w-xl mx-auto leading-relaxed">
            Depuis 2009, nous construisons des voyages sur la confiance,
            la qualité et la passion de vous faire découvrir le monde.
          </p>
        </div>

        {/* ── Grille ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {REASONS.map(({ Icon, title, description, accent }) => {
            const a = accentMap[accent]
            return (
              <div
                key={title}
                className={`group relative p-7 rounded-2xl
                             border border-white/10 bg-white/[0.04]
                             hover:bg-white/[0.07] hover:border-white/20
                             transition-all duration-400 ease-luxury cursor-default
                             ${a.glow}`}
              >
                {/* Icône */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5
                                  transition-all duration-300 ${a.bg}`}>
                  <Icon className={`h-5 w-5 transition-colors duration-300 ${a.icon}`} />
                </div>

                {/* Titre */}
                <h3 className="font-display text-white text-xl font-semibold mb-3 leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  {description}
                </p>

                {/* Ligne colorée en bas */}
                <div className={`absolute bottom-0 left-7 right-7 h-px bg-transparent
                                  transition-all duration-400 ${a.line}`} />

                {/* Point décoratif coin supérieur droit */}
                <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-0
                                  group-hover:opacity-60 transition-all duration-300 ${a.dot}`} />
              </div>
            )
          })}
        </div>

        {/* ── Bande de confiance bas ──────────── */}
        <div className="mt-14 pt-10 border-t border-white/10
                         flex flex-wrap justify-center gap-8 lg:gap-14">
          {[
            { num: '12 000+', txt: 'Clients satisfaits',     dot: 'bg-gold' },
            { num: '15 ans',  txt: 'D\'expérience',          dot: 'bg-amber' },
            { num: '99%',     txt: 'Taux de satisfaction',   dot: 'bg-emerald' },
            { num: '60+',     txt: 'Destinations couvertes', dot: 'bg-gold' },
          ].map(({ num, txt, dot }) => (
            <div key={txt} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className={`w-1.5 h-1.5 rounded-full ${dot} opacity-70`} />
                <span className="font-display text-2xl font-bold text-white group-hover:text-gold-light
                                  transition-colors duration-300">{num}</span>
              </div>
              <span className="font-body text-white/45 text-xs tracking-wide">{txt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
