/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/styleA/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;