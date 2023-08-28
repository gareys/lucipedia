/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tools/decoder',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
