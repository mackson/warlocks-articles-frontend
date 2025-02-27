/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me", "fakeimg.pl", "github.com"],
    unoptimized: process.env.NEXT_PUBLIC_UNOPTIMIZED === "true",
  },
};

module.exports = nextConfig;