import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] max-h-[920px] overflow-hidden">

      {/* ── Image de fond avec effet Ken Burns ──── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548679847-1d4ff48016c9?w=1920&q=85"
          alt="Voyage extraordinaire avec Ettaarouf Tourisme"
          fill priority quality={85}
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        {/* Overlay principal */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Voile gauche lapis pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-lapis-900/70 via-lapis-900/30 to-transparent" />
        {/* Lueur ambre — soleil du logo — coin supérieur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none
                         bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,0,0.18)_0%,transparent_65%)]" />
        {/* Éclat doré bas gauche */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none
                         bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,164,90,0.12)_0%,transparent_70%)]" />
      </div>

      {/* ── Contenu ────────────────────────────── */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8
                       max-w-7xl mx-auto pb-24">

        {/* Badge de confiance */}
        <div className="flex items-center gap-2 mb-7
                         opacity-0 animate-fade-in-up"
             style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
          {/* Soleil miniature — icône du logo */}
          <div className="flex items-center gap-1.5 bg-amber/20 border border-amber/35
                           rounded-full px-3 py-1.5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="font-body text-amber-light text-xs font-semibold tracking-[0.2em] uppercase">
              Agence Agréée · Alger
            </span>
          </div>
          <div className="flex items-center gap-0.5 ml-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-gold text-gold" />
            ))}
            <span className="font-body text-white/60 text-xs ml-1.5">4.9/5</span>
          </div>
        </div>

        {/* Titre */}
        <h1 className="font-display text-white font-light mb-2
                         text-5xl sm:text-6xl lg:text-7xl xl:text-[82px]
                         leading-[1.04] tracking-[-0.01em]
                         opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Votre Voyage
        </h1>
        <h1 className="font-display font-semibold mb-7
                         text-5xl sm:text-6xl lg:text-7xl xl:text-[82px]
                         leading-[1.04] tracking-[-0.01em]
                         opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
          <span className="text-white">Commence&nbsp;</span>
          <span className="text-gold-light italic">Ici.</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-white/72 text-base sm:text-lg lg:text-xl
                        max-w-lg leading-relaxed mb-10
                        opacity-0 animate-fade-in-up"
           style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Circuits organisés, Omra, séjours de luxe et billets d&rsquo;avion —
          tout ce dont vous avez besoin pour un voyage parfait.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4
                          opacity-0 animate-fade-in-up"
             style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
          <Link
            href="/voyages"
            className="group inline-flex items-center gap-2.5
                        bg-gold hover:bg-gold-dark text-white font-body font-semibold
                        px-8 py-4 rounded-full shadow-gold text-base
                        transition-all duration-300 ease-luxury
                        hover:shadow-gold-lg hover:-translate-y-0.5"
          >
            Explorer nos voyages
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center
                              group-hover:bg-white/30 transition-colors">
              <ChevronDown className="h-3 w-3 -rotate-90" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2
                        border-2 border-white/50 hover:border-white/80 text-white
                        font-body font-medium px-8 py-4 rounded-full text-base
                        backdrop-blur-sm hover:bg-white/10
                        transition-all duration-300 ease-luxury"
          >
            Devis sur mesure
          </Link>
        </div>

        {/* Séparateur + Stats */}
        <div className="hidden md:flex items-center gap-10 mt-14
                          opacity-0 animate-fade-in-up"
             style={{ animationDelay: '0.95s', animationFillMode: 'forwards' }}>
          {/* Ligne décorative */}
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          {[
            { value: '15+',     label: 'Années d\'expérience', color: 'text-gold-light' },
            { value: '12 000+', label: 'Voyageurs satisfaits',  color: 'text-amber-light' },
            { value: '60+',     label: 'Destinations',          color: 'text-gold-light' },
          ].map(({ value, label, color }, i) => (
            <>
              <div key={label} className="text-center">
                <div className={`font-display text-2xl font-bold ${color}`}>{value}</div>
                <div className="font-body text-white/50 text-xs tracking-wide mt-0.5">{label}</div>
              </div>
              {i < 2 && <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />}
            </>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────── */}
      <div className="absolute bottom-24 right-8 lg:right-12 flex flex-col items-center gap-2
                       text-white/40 animate-float">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase rotate-90 mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* ── Vague ivoire bas ─────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3
                   C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H0Z"
                fill="#F9F4EC"/>
        </svg>
      </div>
    </section>
  )
}
