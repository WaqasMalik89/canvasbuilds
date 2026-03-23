/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services/toronto/renovation-contractors',
        destination: '/services/toronto-renovation-contractors',
        permanent: true,
      },
    ];
  },

  // ✅ Fix HMR + network access warning
  allowedDevOrigins: ['localhost', '127.0.0.1', '10.0.0.2'],

  // ✅ Fix images not rendering in Next 16 (Turbopack)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;