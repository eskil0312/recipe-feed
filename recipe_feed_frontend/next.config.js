/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["images.app.goo.gl", "lh3.googleusercontent.com"]
  }
}

module.exports = nextConfig