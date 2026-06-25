'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  {
    label: 'Destinations',
    href:  '/destinations',
    submenu: [
      { label: 'Europe',        href: '/destinations?continent=europe' },
      { label: 'Moyen-Orient',  href: '/destinations?continent=moyen-orient' },
      { label: 'Asie',          href: '/destinations?continent=asie' },
      { label: 'Afrique',       href: '/destinations?continent=afrique' },
    ],
  },
  {
    label: 'Voyages',
    href:  '/voyages',
    submenu: [
      { label: 'Circuits organisés', href: '/voyages?type=circuit' },
      { label: 'Séjours',           href: '/voyages?type=sejour' },
      { label: 'Voyages luxe',       href: '/voyages?type=luxe' },
      { label: 'Famille',            href: '/voyages?type=famille' },
    ],
  },
  { label: 'Omra',       href: '/omra' },
  { label: 'Hôtels',    href: '/hotels' },
  { label: 'Vols',      href: '/vols' },
  { label: 'Visa',      href: '/visa' },
  { label: 'Blog',      href: '/blog' },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeMenu,  setActiveMenu]  = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Détecte le scroll pour changer l'apparence du header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile au changement de route
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
        scrolled
          ? 'bg-lapis-800/97 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ─────────────────────────────────────────── */}
            <Link href="/" className="flex flex-col group">
              <span className="font-display text-white text-xl font-semibold tracking-widest uppercase
                               transition-opacity duration-200 group-hover:opacity-80">
                Ettaarouf
              </span>
              <span className="font-body text-gold text-[10px] tracking-[0.25em] uppercase -mt-0.5">
                Tourisme &amp; Voyage
              </span>
            </Link>

            {/* ── Navigation desktop ───────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.submenu ? handleMouseEnter(link.label) : undefined}
                  onMouseLeave={link.submenu ? handleMouseLeave : undefined}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-lg',
                      'font-body text-sm text-white/85 hover:text-white',
                      'transition-all duration-200 hover:bg-white/10',
                      activeMenu === link.label && 'bg-white/10 text-white'
                    )}
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        activeMenu === link.label && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Sous-menu */}
                  {link.submenu && activeMenu === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52
                                 bg-white rounded-2xl shadow-card-lg border border-ivory-200
                                 overflow-hidden animate-fade-in-down"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.submenu.map(sub => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 font-body text-sm text-charcoal
                                     hover:bg-ivory-100 hover:text-lapis-800
                                     transition-colors duration-150"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Actions desktop ───────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Langue */}
              <button className="flex items-center gap-1.5 text-white/70 hover:text-white
                                  text-sm font-body transition-colors duration-200 px-2 py-1.5">
                <Globe className="h-4 w-4" />
                <span>FR</span>
              </button>

              {/* Téléphone WhatsApp */}
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gold hover:text-gold-light
                            text-sm font-body font-medium transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>+213 XX XX XX XX</span>
              </a>

              {/* CTA principal */}
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-white font-body font-semibold
                            text-sm px-5 py-2.5 rounded-full shadow-gold
                            transition-all duration-300 ease-luxury hover:shadow-none
                            hover:-translate-y-0.5"
              >
                Devis gratuit
              </Link>
            </div>

            {/* ── Burger mobile ────────────────────────────────── */}
            <button
              className="lg:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/10
                          transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Menu mobile (drawer) ────────────────────────────── */}
      <div className={cn(
        'fixed inset-0 z-40 lg:hidden transition-all duration-300',
        menuOpen ? 'visible' : 'invisible'
      )}>
        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-lapis-900/80 backdrop-blur-sm transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div className={cn(
          'absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-lapis-800',
          'transition-transform duration-300 ease-luxury flex flex-col',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          {/* Header drawer */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div>
              <div className="font-display text-white text-lg font-semibold tracking-widest uppercase">
                Ettaarouf
              </div>
              <div className="font-body text-gold text-[9px] tracking-[0.2em] uppercase">
                Tourisme &amp; Voyage
              </div>
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white p-1">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-6 py-3.5 font-body text-white/80 hover:text-white
                            hover:bg-white/10 transition-colors duration-150 text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Footer drawer */}
          <div className="p-5 border-t border-white/10 space-y-3">
            <a
              href="https://wa.me/213XXXXXXXXX"
              className="flex items-center gap-2 text-gold font-body text-sm font-medium"
            >
              <Phone className="h-4 w-4" /> +213 XX XX XX XX
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-gold text-white text-center font-body font-semibold
                          text-sm py-3 rounded-full"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
