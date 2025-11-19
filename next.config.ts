/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services/toronto/renovation-contractors', // old path
        destination: '/services/toronto-renovation-contractors', // new path
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
