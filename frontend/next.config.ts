/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://chidagoldgalleryonline.onrender.com/',
      },
    ],
  },
};

module.exports = nextConfig;
