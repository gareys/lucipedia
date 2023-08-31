module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.pixura.io',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  }
}
