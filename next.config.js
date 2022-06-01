/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    SITE_URL: "https://dattiensgroup.site/",
  },
  images: {
    domains: [
      'dattiensgroup.site',
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
