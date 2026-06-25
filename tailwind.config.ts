import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────
//  Système de design ETTAAROUF TOURISME
//  Palette "Manuscrit Maure" : Lapis · Or Antique · Ivoire · Sable
// ─────────────────────────────────────────────

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ── Couleurs ─────────────────────────────
      colors: {
        lapis: {
          50:  '#EEF3FA',
          100: '#D4E1F3',
          200: '#A9C3E7',
          300: '#6A94CC',
          400: '#3D6FAF',
          500: '#1E4D8C',
          600: '#163A6E',
          700: '#0E2650',
          800: '#0C1E3F', // principal
          900: '#070F20',
          DEFAULT: '#0C1E3F',
          light: '#163A6E',
        },
        gold: {
          50:  '#FDF8EE',
          100: '#FAF0D2',
          200: '#F5E0A6',
          300: '#EEC96E',
          400: '#E5B44A',
          500: '#C8A45A', // principal
          600: '#A8852B',
          700: '#8A6B1C',
          800: '#6F5416',
          DEFAULT: '#C8A45A',
          light: '#E5C97B',
          dark:  '#A8852B',
        },
        ivory: {
          50:  '#FDFCFA',
          100: '#F9F4EC', // fond clair principal
          200: '#F2E8D5',
          300: '#E8D5BE',
          DEFAULT: '#F9F4EC',
        },
        sand: {
          DEFAULT: '#EDD9C2',
          light: '#F7EDE0',
          dark:  '#D4B898',
        },
        charcoal: {
          DEFAULT: '#1C1C2E',
          light: '#3A3A52',
        },
      },

      // ── Typographie ──────────────────────────
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl':  ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-lg':  ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md':  ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },

      // ── Espacements ──────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },

      // ── Ombres ───────────────────────────────
      boxShadow: {
        'card':    '0 4px 24px -4px rgba(12, 30, 63, 0.12)',
        'card-lg': '0 16px 48px -8px rgba(12, 30, 63, 0.18)',
        'gold':    '0 8px 32px -4px rgba(200, 164, 90, 0.35)',
        'glass':   '0 8px 32px rgba(12, 30, 63, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
      },

      // ── Arrière-plans ────────────────────────
      backgroundImage: {
        'gradient-lapis':  'linear-gradient(135deg, #070F20 0%, #0C1E3F 60%, #163A6E 100%)',
        'gradient-gold':   'linear-gradient(135deg, #A8852B 0%, #C8A45A 50%, #E5C97B 100%)',
        'gradient-ivory':  'linear-gradient(180deg, #FDFCFA 0%, #F9F4EC 100%)',
        'gradient-hero':   'linear-gradient(to bottom, rgba(12,30,63,0.35) 0%, rgba(12,30,63,0.25) 40%, rgba(12,30,63,0.75) 100%)',
        'gradient-card':   'linear-gradient(to top, rgba(12,30,63,0.95) 0%, rgba(12,30,63,0.4) 60%, transparent 100%)',
      },

      // ── Animations ───────────────────────────
      keyframes: {
        fadeIn:    { from: { opacity: '0' },                                      to: { opacity: '1' } },
        fadeInUp:  { from: { opacity: '0', transform: 'translateY(32px)' },       to: { opacity: '1', transform: 'translateY(0)' } },
        fadeInDown:{ from: { opacity: '0', transform: 'translateY(-16px)' },      to: { opacity: '1', transform: 'translateY(0)' } },
        slideLeft: { from: { opacity: '0', transform: 'translateX(40px)' },       to: { opacity: '1', transform: 'translateX(0)' } },
        scaleIn:   { from: { opacity: '0', transform: 'scale(0.92)' },            to: { opacity: '1', transform: 'scale(1)' } },
        shimmer:   { from: { backgroundPosition: '-200% 0' },                     to:  { backgroundPosition: '200% 0' } },
        pulse:     { '0%,100%': { opacity: '1' },                                 '50%': { opacity: '0.5' } },
        float:     { '0%,100%': { transform: 'translateY(0)' },                   '50%': { transform: 'translateY(-8px)' } },
        kenburns:  { from: { transform: 'scale(1)' },                             to: { transform: 'scale(1.06)' } },
      },
      animation: {
        'fade-in':      'fadeIn 0.5s ease-out',
        'fade-in-up':   'fadeInUp 0.7s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-left':   'slideLeft 0.6s ease-out',
        'scale-in':     'scaleIn 0.4s ease-out',
        'shimmer':      'shimmer 2.5s linear infinite',
        'float':        'float 4s ease-in-out infinite',
        'ken-burns':    'kenburns 12s ease-in-out alternate infinite',
      },

      // ── Transitions ──────────────────────────
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
