/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: { 
          allowFutureImage: true,
        },
    },
    output:"export",
    

    
}

module.exports = nextConfig
