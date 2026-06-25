import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { generateMetadata as buildMeta, generateOrganizationSchema, SITE_CONFIG } from '@/lib/seo'

// ── Polices Google Fonts (next/font — zero layout shift) ──────
const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display:  'swap',
})

const dmMono = DM_Mono({
  subsets:  ['latin'],
  weight:   ['300', '400', '500'],
  variable: '--font-dm-mono',
  display:  'swap',
})

// ── Métadonnées root ─────────────────────────────────────────
export const metadata: Metadata = {
  ...buildMeta(),
  manifest: '/site.webmanifest',
  icons: {
    icon:        [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple:       [{ url: '/apple-touch-icon.png' }],
  },
}

// ── Viewport ─────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor:      '#0C1E3F',
  colorScheme:     'light',
  width:           'device-width',
  initialScale:    1,
  maximumScale:    5,
}

// ── Layout principal ─────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = generateOrganizationSchema()

  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        {/* Données structurées JSON-LD — Organisation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Préconnexions pour performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://media.graphassets.com" />
      </head>
      <body className="font-body antialiased">
        {/* Skip to content — accessibilité */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
                      focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded-lg
                      focus:font-body focus:font-semibold focus:text-sm"
        >
          Aller au contenu principal
        </a>

        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
