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
        // Bleu lapis — couleur primaire du logo
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
        // Or antique — couleur secondaire du logo
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
        // Ambre soleil — couleur du soleil dans le logo
        amber: {
          50:  '#FFF8ED',
          100: '#FFEFD0',
          200: '#FFDCA0',
          300: '#FFC265',
          400: '#FFA030',
          500: '#FF8C00', // soleil du logo
          600: '#E67800',
          700: '#CC6400',
          800: '#A85000',
          DEFAULT: '#FF8C00',
          light: '#FFB347',
          dark:  '#E06000',
        },
        // Vert émeraude — collines du logo
        emerald: {
          50:  '#EDF7F0',
          100: '#D0EBDA',
          200: '#A1D7B5',
          300: '#5CB87A',
          400: '#3DA05F',
          500: '#2D7A3E', // vert collines logo
          600: '#246332',
          700: '#1B4D26',
          DEFAULT: '#2D7A3E',
          light: '#3DA05F',
          dark:  '#1B4D26',
        },
        // Ivoire crème — fond du logo
        ivory: {
          50:  '#FDFCFA',
          100: '#F9F4EC', // fond clair principal
          200: '#F5EDE0',
          300: '#EDD8C0',
          400: '#E5C9A0',
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
        'card':       '0 4px 24px -4px rgba(12, 30, 63, 0.10)',
        'card-lg':    '0 16px 48px -8px rgba(12, 30, 63, 0.18)',
        'card-hover': '0 24px 60px -12px rgba(12, 30, 63, 0.22)',
        'gold':       '0 8px 32px -4px rgba(200, 164, 90, 0.40)',
        'gold-lg':    '0 16px 48px -8px rgba(200, 164, 90, 0.50)',
        'amber':      '0 8px 32px -4px rgba(255, 140, 0, 0.35)',
        'glass':      '0 8px 32px rgba(12, 30, 63, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
        'inner-gold': 'inset 0 1px 0 rgba(229, 201, 123, 0.3)',
      },

      // ── Arrière-plans ────────────────────────
      backgroundImage: {
        'gradient-lapis':    'linear-gradient(135deg, #070F20 0%, #0C1E3F 60%, #163A6E 100%)',
        'gradient-gold':     'linear-gradient(135deg, #A8852B 0%, #C8A45A 50%, #E5C97B 100%)',
        'gradient-ivory':    'linear-gradient(180deg, #FDFCFA 0%, #F9F4EC 100%)',
        'gradient-hero':     'linear-gradient(to bottom, rgba(12,30,63,0.30) 0%, rgba(12,30,63,0.20) 40%, rgba(7,15,32,0.82) 100%)',
        'gradient-card':     'linear-gradient(to top, rgba(12,30,63,0.97) 0%, rgba(12,30,63,0.5) 55%, transparent 100%)',
        'gradient-amber':    'linear-gradient(135deg, #E06000 0%, #FF8C00 50%, #FFB347 100%)',
        'gradient-warm':     'linear-gradient(135deg, #0C1E3F 0%, #1E3A6E 50%, #2D4A80 100%)',
        'gradient-sunrise':  'linear-gradient(to right, rgba(255,140,0,0.15) 0%, rgba(255,215,0,0.08) 50%, transparent 100%)',
      },

      // ── Animations ───────────────────────────
      keyframes: {
        fadeIn:     { from: { opacity: '0' },                                        to: { opacity: '1' } },
        fadeInUp:   { from: { opacity: '0', transform: 'translateY(32px)' },         to: { opacity: '1', transform: 'translateY(0)' } },
        fadeInDown: { from: { opacity: '0', transform: 'translateY(-16px)' },        to: { opacity: '1', transform: 'translateY(0)' } },
        slideLeft:  { from: { opacity: '0', transform: 'translateX(40px)' },         to: { opacity: '1', transform: 'translateX(0)' } },
        slideRight: { from: { opacity: '0', transform: 'translateX(-40px)' },        to: { opacity: '1', transform: 'translateX(0)' } },
        scaleIn:    { from: { opacity: '0', transform: 'scale(0.92)' },              to: { opacity: '1', transform: 'scale(1)' } },
        shimmer:    { from: { backgroundPosition: '-200% 0' },                       to: { backgroundPosition: '200% 0' } },
        shimmerGold:{ '0%': { backgroundPosition: '200% center' },                  '100%': { backgroundPosition: '-200% center' } },
        pulse:      { '0%,100%': { opacity: '1' },                                   '50%': { opacity: '0.5' } },
        float:      { '0%,100%': { transform: 'translateY(0)' },                     '50%': { transform: 'translateY(-8px)' } },
        kenburns:   { from: { transform: 'scale(1)' },                               to: { transform: 'scale(1.06)' } },
        glow:       { '0%,100%': { boxShadow: '0 0 20px rgba(200,164,90,0.3)' },    '50%': { boxShadow: '0 0 40px rgba(200,164,90,0.6)' } },
        sunrise:    { from: { opacity: '0', transform: 'scale(0.8) translateY(10px)' }, to: { opacity: '1', transform: 'scale(1) translateY(0)' } },
        rotate:     { from: { transform: 'rotate(0deg)' },                           to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'fade-in':       'fadeIn 0.5s ease-out',
        'fade-in-up':    'fadeInUp 0.7s ease-out',
        'fade-in-down':  'fadeInDown 0.5s ease-out',
        'slide-left':    'slideLeft 0.6s ease-out',
        'slide-right':   'slideRight 0.6s ease-out',
        'scale-in':      'scaleIn 0.4s ease-out',
        'shimmer':       'shimmer 2.5s linear infinite',
        'shimmer-gold':  'shimmerGold 3s ease-in-out infinite',
        'float':         'float 4s ease-in-out infinite',
        'ken-burns':     'kenburns 12s ease-in-out alternate infinite',
        'glow':          'glow 3s ease-in-out infinite',
        'sunrise':       'sunrise 1s ease-out',
        'spin-slow':     'rotate 8s linear infinite',
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
