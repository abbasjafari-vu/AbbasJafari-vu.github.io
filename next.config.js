/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: { 
          allowFutureImage: true,
        },
    },
    output:"export",
    exclude: [
        'api',
        'studio',
      ],
    
}

module.exports = nextConfig
