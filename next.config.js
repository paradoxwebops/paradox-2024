/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      PUBLIC_URL: process.env.PUBLIC_URL,
      DJANGO_CLIENT_ID: process.env.DJANGO_CLIENT_ID,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.googleusercontent.com",
          port: "",
          pathname: "**",
        },
      ],
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  