/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RAZORPAY_KEY: "rzp_live_l23slxM6fTRUQf",
    RAZORPAY_SECRET: "b78v1lWRPM2qLI7lEBsCFuQC",
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["res.cloudinary.com","source.unsplash.com"],
  },
};
