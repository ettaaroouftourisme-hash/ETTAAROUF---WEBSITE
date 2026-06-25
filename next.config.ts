import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Unsplash — images de démonstration
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Hygraph CDN — images du CMS (toutes les régions)
      { protocol: 'https', hostname: 'media.graphassets.com' },
      { protocol: 'https', hostname: 'ap-northeast-1.graphassets.com' },
      { protocol: 'https', hostname: 'eu-central-1.graphassets.com' },
      { protocol: 'https', hostname: 'us-east-1.graphassets.com' },
      { protocol: 'https', hostname: 'us-west-2.graphassets.com' },
    ],
    // Dimensionnement responsive performant
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  // Redirects utiles
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/voyage-omra', destination: '/omra', permanent: true },
      { source: '/billet-avion', destination: '/vols', permanent: true },
    ]
  },
}

export default nextConfig
