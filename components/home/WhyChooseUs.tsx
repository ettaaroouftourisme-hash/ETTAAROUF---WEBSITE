import { Shield, Award, Headphones, Globe2, Clock, CreditCard } from 'lucide-react'

const REASONS = [
  {
    Icon:        Award,
    title:       'Agréé par le Ministère',
    description: 'Agence officiellement agréée et réglementée, garantissant votre sécurité et vos droits à chaque voyage.',
  },
  {
    Icon:        Headphones,
    title:       'Assistance 7j/7',
    description: 'Notre équipe est disponible à toute heure pour vous accompagner avant, pendant et après votre voyage.',
  },
  {
    Icon:        Shield,
    title:       'Réservation Sécurisée',
    description: 'Vos paiements et données personnelles sont protégés par les standards de sécurité les plus stricts.',
  },
  {
    Icon:        Globe2,
    title:       '60+ Destinations',
    description: 'Un portefeuille riche de destinations soigneusement sélectionnées sur 5 continents pour tous les goûts.',
  },
  {
    Icon:        Clock,
    title:       '15 ans d\'Expérience',
    description: 'Plus de 15 ans au service des voyageurs algériens, avec une expertise reconnue sur les circuits Omra.',
  },
  {
    Icon:        CreditCard,
    title:       'Meilleur Prix Garanti',
    description: 'Nous vous remboursons la différence si vous trouvez le même voyage moins cher ailleurs. Garanti.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-lapis-800 py-20 lg:py-28 relative overflow-hidden">

      {/* ── Motif décoratif (cercles géométriques) ────────── */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                       border border-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full
                       border border-white/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[600px] h-[600px] rounded-full border border-white/[0.03]
                       pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── En-tête ─────────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Notre engagement
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-display-lg text-white font-semibold leading-tight mb-4">
            Pourquoi Choisir
            <br />
            <span className="text-gold italic font-light">Ettaarouf Tourisme ?</span>
          </h2>
          <p className="font-body text-white/55 text-base max-w-xl mx-auto leading-relaxed">
            Depuis 2009, nous construisons des voyages sur la confiance, la qualité et la passion de vous faire découvrir le monde.
          </p>
        </div>

        {/* ── Grille des raisons ───────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {REASONS.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group relative p-7 rounded-2xl
                          border border-white/10 bg-white/[0.04]
                          hover:bg-white/[0.08] hover:border-gold/30
                          transition-all duration-300 ease-luxury"
            >
              {/* Icône */}
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/25
                               flex items-center justify-center mb-5
                               group-hover:bg-gold group-hover:border-gold
                               transition-all duration-300">
                <Icon className="h-5 w-5 text-gold group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Titre */}
              <h3 className="font-display text-white text-xl font-semibold mb-3 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="font-body text-white/55 text-sm leading-relaxed">
                {description}
              </p>

              {/* Accent ligne dorée au survol */}
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gold/0
                               group-hover:bg-gold/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
