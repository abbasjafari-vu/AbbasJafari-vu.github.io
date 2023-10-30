/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: { 
          allowFutureImage: true,
        },
    },
    output:"standalone",
    

    
}

module.exports = nextConfig
