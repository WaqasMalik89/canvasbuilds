import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Permanent (301/308) redirects for URLs that have moved — keeps Google rankings.
  async redirects() {
    return [
      { source: '/services/toronto-renovation-contractors', destination: '/areas-we-serve/toronto-gta', permanent: true },
      { source: '/services/toronto/renovation-contractors', destination: '/areas-we-serve/toronto-gta', permanent: true },
      { source: '/toronto', destination: '/areas-we-serve/toronto-gta', permanent: true },
      { source: '/kitchener', destination: '/areas-we-serve/kitchener-waterloo', permanent: true },
      { source: '/waterloo', destination: '/areas-we-serve/kitchener-waterloo', permanent: true },
      { source: '/milton', destination: '/areas-we-serve', permanent: true },
      { source: '/areas-we-serve/milton', destination: '/areas-we-serve/bradford', permanent: true },
      { source: '/bradford', destination: '/areas-we-serve/bradford', permanent: true },
      { source: '/portfolio', destination: '/projects', permanent: true },
    ];
  },

  // Lets other devices on your network open the dev server.
  allowedDevOrigins: ['localhost', '127.0.0.1', '10.0.0.2'],

  // Next.js resizes photos per screen and serves AVIF/WebP (faster pages rank better).
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [70, 75],
  },

  // Only bundle the icons actually used (react-icons is huge otherwise).
  experimental: {
    optimizePackageImports: ['react-icons'],
  },

  // Security headers (Lighthouse "Best Practices" + safer site).
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
