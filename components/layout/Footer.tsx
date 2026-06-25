import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const FOOTER_LINKS = {
  voyages: [
    { label: 'Voyages organisés',  href: '/voyages' },
    { label: 'Omra & Spirituel',   href: '/omra' },
    { label: 'Séjours balnéaires', href: '/voyages?type=sejour' },
    { label: 'Circuits Europe',    href: '/voyages?type=circuit' },
    { label: 'Voyages de luxe',    href: '/voyages?type=luxe' },
    { label: 'Promotions',         href: '/promotions' },
  ],
  services: [
    { label: 'Billets d\'avion',   href: '/vols' },
    { label: 'Réservation hôtels', href: '/hotels' },
    { label: 'Visa & Formalités',  href: '/visa' },
    { label: 'Assurance voyage',   href: '/visa#assurance' },
    { label: 'Transferts',         href: '/contact' },
    { label: 'Devis sur mesure',   href: '/contact' },
  ],
  info: [
    { label: 'À propos de nous',   href: '/a-propos' },
    { label: 'Blog & Conseils',    href: '/blog' },
    { label: 'Témoignages',        href: '/temoignages' },
    { label: 'FAQ',                href: '/faq' },
    { label: 'Mentions légales',   href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-lapis-800 text-white">
      {/* ── Bande dorée ─────────────────────────────────── */}
      <div className="h-0.5 bg-gradient-gold" />

      {/* ── Corps ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Colonne 1 : Identité ───────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-5">
              <div className="font-display text-2xl font-semibold tracking-widest uppercase text-white">
                Ettaarouf
              </div>
              <div className="font-body text-gold text-[10px] tracking-[0.25em] uppercase mt-0.5">
                Tourisme &amp; Voyage
              </div>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Votre partenaire de confiance pour des voyages mémorables depuis plus de 15 ans.
              Experts en Omra, circuits internationaux et séjours sur mesure.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook,  href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Youtube,   href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20
                              flex items-center justify-center text-white/60
                              hover:text-gold hover:border-gold
                              transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Colonne 2 : Voyages ───────────────────── */}
          <FooterColumn title="Nos Voyages" links={FOOTER_LINKS.voyages} />

          {/* ── Colonne 3 : Services ──────────────────── */}
          <FooterColumn title="Nos Services" links={FOOTER_LINKS.services} />

          {/* ── Colonne 4 : Contact ────────────────────── */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase
                            tracking-widest mb-5 pb-2 border-b border-white/10">
              Contact
            </h3>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Alger, Algérie<br />Agréé par le Ministère du Tourisme</span>
              </div>
              <a href="tel:+213XXXXXXXXX"
                 className="flex items-center gap-3 text-white/60 hover:text-gold
                              text-sm font-body transition-colors duration-150">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                +213 XX XX XX XX
              </a>
              <a href="mailto:contact@ettaarouf-tourisme.dz"
                 className="flex items-center gap-3 text-white/60 hover:text-gold
                              text-sm font-body transition-colors duration-150">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                contact@ettaarouf-tourisme.dz
              </a>
            </div>

            {/* Horaires */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-2">
                Horaires
              </p>
              <p className="font-body text-sm text-white/70">
                Sam – Jeu : 08h00 – 18h00<br />
                Vendredi : Fermé
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bas de page ─────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                         flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-sm text-white/40 text-center">
            © {new Date().getFullYear()} Ettaarouf Tourisme et Voyage. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales"
                  className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/confidentialite"
                  className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-white uppercase
                      tracking-widest mb-5 pb-2 border-b border-white/10">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-sm text-white/55 hover:text-gold
                          transition-colors duration-150 flex items-center gap-2 group"
            >
              <span className="w-1 h-1 rounded-full bg-gold/0 group-hover:bg-gold
                                transition-all duration-200 shrink-0" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
