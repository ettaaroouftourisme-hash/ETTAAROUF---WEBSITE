import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import type { Destination } from '@/types'
import { formatPrice } from '@/utils/formatters'

interface Props {
  destinations: Destination[]
}

export default function PopularDestinations({ destinations }: Props) {
  // Layout asymétrique : 1 grande carte + 5 petites
  const [featured, ...rest] = destinations

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── En-tête ─────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Nos destinations
              </span>
            </div>
            <h2 className="font-display text-display-lg text-lapis-800 font-semibold leading-tight">
              Les Incontournables<br />
              <span className="text-gold italic font-light">du Moment</span>
            </h2>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-lapis-800
                        hover:text-gold transition-colors duration-200 group shrink-0"
          >
            Toutes les destinations
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Grille asymétrique ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* Grande carte — colonne gauche */}
          {featured && (
            <Link
              href={`/destinations/${featured.slug}`}
              className="lg:col-span-1 lg:row-span-2 group relative rounded-3xl overflow-hidden
                          shadow-card hover:shadow-card-lg transition-all duration-500 ease-luxury
                          hover:-translate-y-1 block min-h-[320px] lg:min-h-[500px]"
            >
              <Image
                src={featured.image}
                alt={`${featured.name}, ${featured.country}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-card" />
              {/* Badge */}
              {featured.badge && (
                <div className="absolute top-4 left-4 bg-gold text-white font-body text-xs
                                 font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {featured.badge}
                </div>
              )}
              {/* Infos */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-gold/80 mb-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="font-body text-xs uppercase tracking-widest">{featured.country}</span>
                </div>
                <h3 className="font-display text-white text-3xl font-semibold mb-2">{featured.name}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed line-clamp-2 mb-4">
                  {featured.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-body text-white/50 text-xs">À partir de</span>
                    <div className="font-display text-gold-light text-xl font-semibold">
                      {formatPrice(featured.priceFrom, featured.currency)}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40
                                   flex items-center justify-center backdrop-blur-sm
                                   group-hover:bg-gold transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-gold group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* 5 petites cartes — colonnes droite */}
          {rest.slice(0, 5).map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationCard({ destination: d }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${d.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow-card
                  hover:shadow-card-lg transition-all duration-400 ease-luxury
                  hover:-translate-y-1 block min-h-[200px]"
    >
      <Image
        src={d.image}
        alt={`${d.name}, ${d.country}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-card" />

      {d.badge && (
        <div className="absolute top-3 left-3 bg-gold/90 text-white font-body text-[10px]
                         font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {d.badge}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1 text-gold/75 mb-1">
          <MapPin className="h-3 w-3" />
          <span className="font-body text-[10px] uppercase tracking-widest">{d.country}</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-white text-lg font-semibold">{d.name}</h3>
          <div className="text-right">
            <div className="font-body text-white/45 text-[10px]">dès</div>
            <div className="font-display text-gold-light text-sm font-semibold">
              {formatPrice(d.priceFrom, d.currency)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
