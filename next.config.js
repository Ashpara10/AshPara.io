const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  nextConfig: {
    reactStrictMode: true,
  },
  // Your Next.js config...
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com", // Twitter Profile Picture
    ],
  },
});
