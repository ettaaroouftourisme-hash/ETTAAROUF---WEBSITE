'use client'

import { useState } from 'react'
import { Plane, Hotel, Map, Moon, Search, Users, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

type TabType = 'circuit' | 'vol' | 'hotel' | 'omra'

const TABS: { id: TabType; label: string; Icon: React.ElementType }[] = [
  { id: 'circuit', label: 'Circuits',    Icon: Map    },
  { id: 'vol',     label: 'Vols',        Icon: Plane  },
  { id: 'hotel',   label: 'Hôtels',      Icon: Hotel  },
  { id: 'omra',    label: 'Omra',        Icon: Moon   },
]

const DESTINATIONS_SUGGESTIONS = [
  'Istanbul, Turquie', 'Paris, France', 'Dubaï, EAU',
  'Maldives', 'Barcelone, Espagne', 'La Mecque, Arabie Saoudite',
  'Bali, Indonésie', 'Rome, Italie',
]

export default function SearchEngine() {
  const [activeTab, setActiveTab] = useState<TabType>('circuit')
  const [destination, setDestination] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [departDate, setDepartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState(2)

  const filtered = DESTINATIONS_SUGGESTIONS.filter(d =>
    d.toLowerCase().includes(destination.toLowerCase()) && destination.length > 0
  )

  const handleSearch = () => {
    const routes: Record<TabType, string> = {
      circuit: '/voyages', vol: '/vols', hotel: '/hotels', omra: '/omra'
    }
    const params = new URLSearchParams({ destination, departDate, returnDate, passengers: String(passengers) })
    window.location.href = `${routes[activeTab]}?${params}`
  }

  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-card-lg border border-ivory-200 overflow-hidden">

          {/* ── Onglets ─────────────────────────────────────── */}
          <div className="flex border-b border-ivory-200">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  'flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2',
                  'py-4 sm:py-3.5 px-2 font-body text-xs sm:text-sm font-medium',
                  'transition-all duration-200 border-b-2 -mb-px',
                  activeTab === id
                    ? 'border-gold text-gold bg-gold/5'
                    : 'border-transparent text-charcoal/50 hover:text-charcoal hover:bg-ivory-100'
                )}
              >
                <Icon className="h-4 w-4 sm:h-4 sm:w-4 shrink-0" />
                <span className="leading-none">{label}</span>
              </button>
            ))}
          </div>

          {/* ── Formulaire ─────────────────────────────────── */}
          <div className="p-5 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-end">

              {/* Destination */}
              <div className="flex-1 min-w-0 relative">
                <label className="block font-body text-xs font-semibold text-charcoal/60
                                   uppercase tracking-widest mb-1.5">
                  {activeTab === 'vol' ? 'Destination' :
                   activeTab === 'hotel' ? 'Ville / Hôtel' :
                   activeTab === 'omra' ? 'Package Omra' : 'Destination / Circuit'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      activeTab === 'omra' ? 'Omra Ramadan, Omra Hors-saison…'
                      : 'Istanbul, Paris, Dubaï…'
                    }
                    value={destination}
                    onChange={e => { setDestination(e.target.value); setShowSuggestions(true) }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-full px-4 py-3 bg-ivory-100 rounded-xl border border-ivory-200
                                font-body text-sm text-charcoal placeholder-charcoal/35
                                focus:outline-none focus:border-gold focus:bg-white
                                focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                  />
                  {showSuggestions && filtered.length > 0 && (
                    <ul className="absolute top-full left-0 right-0 mt-1 z-50
                                    bg-white rounded-xl shadow-card-lg border border-ivory-200
                                    overflow-hidden max-h-48 overflow-y-auto">
                      {filtered.map(s => (
                        <li key={s}>
                          <button
                            onMouseDown={() => { setDestination(s); setShowSuggestions(false) }}
                            className="w-full text-left px-4 py-2.5 font-body text-sm text-charcoal
                                        hover:bg-ivory-100 hover:text-lapis-800 transition-colors"
                          >
                            {s}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Départ */}
              <div className="w-full lg:w-40">
                <label className="block font-body text-xs font-semibold text-charcoal/60
                                   uppercase tracking-widest mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> Départ
                  </span>
                </label>
                <input
                  type="date"
                  value={departDate}
                  onChange={e => setDepartDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-ivory-100 rounded-xl border border-ivory-200
                              font-body text-sm text-charcoal
                              focus:outline-none focus:border-gold focus:bg-white
                              focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                />
              </div>

              {/* Retour */}
              {activeTab !== 'hotel' && (
                <div className="w-full lg:w-40">
                  <label className="block font-body text-xs font-semibold text-charcoal/60
                                     uppercase tracking-widest mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> Retour
                    </span>
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={e => setReturnDate(e.target.value)}
                    min={departDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-ivory-100 rounded-xl border border-ivory-200
                                font-body text-sm text-charcoal
                                focus:outline-none focus:border-gold focus:bg-white
                                focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                  />
                </div>
              )}

              {/* Voyageurs */}
              <div className="w-full lg:w-36">
                <label className="block font-body text-xs font-semibold text-charcoal/60
                                   uppercase tracking-widest mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3 w-3" />
                    {activeTab === 'hotel' ? 'Chambres' : 'Voyageurs'}
                  </span>
                </label>
                <div className="flex items-center bg-ivory-100 rounded-xl border border-ivory-200
                                 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20
                                 overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => setPassengers(p => Math.max(1, p - 1))}
                    className="px-3 py-3 text-charcoal/60 hover:text-gold hover:bg-ivory-200
                                font-body text-lg leading-none transition-colors"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-body text-sm font-semibold text-charcoal">
                    {passengers}
                  </span>
                  <button
                    onClick={() => setPassengers(p => Math.min(20, p + 1))}
                    className="px-3 py-3 text-charcoal/60 hover:text-gold hover:bg-ivory-200
                                font-body text-lg leading-none transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Bouton recherche */}
              <button
                onClick={handleSearch}
                className="w-full lg:w-auto flex items-center justify-center gap-2
                            bg-gold hover:bg-gold-dark text-white font-body font-semibold
                            px-7 py-3 rounded-xl shadow-gold text-sm
                            transition-all duration-300 hover:shadow-none hover:-translate-y-0.5
                            whitespace-nowrap"
              >
                <Search className="h-4 w-4" />
                Rechercher
              </button>
            </div>

            {/* Recherches rapides */}
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="font-body text-xs text-charcoal/40 mr-1">Populaire :</span>
              {['Omra Ramadan', 'Istanbul 7j', 'Dubai Luxe', 'Europe 15j'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setDestination(tag)}
                  className="font-body text-xs text-charcoal/60 hover:text-gold
                              bg-ivory-100 hover:bg-gold/10 border border-ivory-200 hover:border-gold/30
                              px-3 py-1.5 rounded-full transition-all duration-150"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
