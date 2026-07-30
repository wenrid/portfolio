/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Portfolio statique : pas d'optimisation serveur nécessaire, Vercel gère très bien.
    remotePatterns: [],
  },
};

export default nextConfig;
