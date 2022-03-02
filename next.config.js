const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({

  /** @type {import('next').NextConfig} */
  nextConfig: {
    reactStrictMode: true,
  },
  // Your Next.js config...
});
