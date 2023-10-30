/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: { 
          allowFutureImage: true,
        },
    },
    output:"export",
    exclude: [
        './app/(admin)',
      ],
    
}

module.exports = nextConfig
