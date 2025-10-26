/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://www.canvasbuilds.ca/:path*>; rel="canonical"',
          },
        ],
      },
    ];
  },
  // Your existing config here
};

module.exports = nextConfig;
