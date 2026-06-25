import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] max-h-[900px] overflow-hidden">

      {/* ── Image de fond avec effet Ken Burns ──────────────── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548679847-1d4ff48016c9?w=1920&q=85"
          alt="Voyage extraordinaire avec Ettaarouf Tourisme"
          fill
          priority
          quality={85}
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        {/* Overlay gradient : sommet transparent → fond opaque lapis */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Voile subtil gauche pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-lapis-900/60 via-lapis-900/20 to-transparent" />
      </div>

      {/* ── Contenu centré ───────────────────────────────────── */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8
                       text-center pb-28">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up"
             style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-gold text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
            Agence de Voyage Algérienne
          </span>
          <div className="h-px w-8 bg-gold" />
        </div>

        {/* Titre principal — typographie Cormorant Garamond signature */}
        <h1 className="font-display text-white font-light mb-3
                         text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
                         leading-[1.05] tracking-[-0.01em]
                         opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Votre Voyage
        </h1>
        <h1 className="font-display font-semibold mb-6
                         text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
                         leading-[1.05] tracking-[-0.01em]
                         opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}>
          {/* "Commence" en blanc, "Ici." en or — moment de marque */}
          <span className="text-white">Commence&nbsp;</span>
          <span className="text-gold-light italic">Ici.</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-white/75 text-base sm:text-lg lg:text-xl
                        max-w-xl leading-relaxed mb-10
                        opacity-0 animate-fade-in-up"
           style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Circuits organisés, Omra, séjours de luxe et billets d&rsquo;avion —
          tout ce dont vous avez besoin pour un voyage parfait.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4
                          opacity-0 animate-fade-in-up"
             style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}>
          <Link
            href="/voyages"
            className="bg-gold hover:bg-gold-dark text-white font-body font-semibold
                        px-8 py-4 rounded-full shadow-gold text-base
                        transition-all duration-300 ease-luxury
                        hover:shadow-none hover:-translate-y-0.5"
          >
            Explorer nos voyages
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/60 hover:border-white text-white
                        font-body font-medium px-8 py-4 rounded-full text-base
                        backdrop-blur-sm hover:bg-white/10
                        transition-all duration-300 ease-luxury"
          >
            Devis sur mesure
          </Link>
        </div>

        {/* Compteurs rapides */}
        <div className="hidden md:flex items-center gap-8 mt-14
                          opacity-0 animate-fade-in-up"
             style={{ animationDelay: '1.05s', animationFillMode: 'forwards' }}>
          {[
            { value: '15+',    label: 'Années d\'expérience' },
            { value: '12 000+', label: 'Voyageurs satisfaits' },
            { value: '60+',    label: 'Destinations' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-gold-light text-2xl font-semibold">{value}</div>
              <div className="font-body text-white/55 text-xs tracking-wide mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Indicateur de scroll ─────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50
                       flex flex-col items-center gap-1 animate-float">
        <span className="font-body text-xs tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="h-4 w-4" />
      </div>

      {/* ── Vague décorative bas ─────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
                fill="#F9F4EC"/>
        </svg>
      </div>
    </section>
  )
}
