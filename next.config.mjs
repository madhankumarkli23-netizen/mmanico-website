/** @type {import('next').NextConfig} */
// Force rebuild timestamp: 2026-01-14T00:15:00
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
