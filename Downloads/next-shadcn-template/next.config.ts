// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/9.x/notionists-neutral/svg/**',
      },
    ],
    dangerouslyAllowSVG: true, // Allows SVG images from configured remotePatterns
    contentDispositionType: 'inline', // Optional: Controls how SVGs are handled in the browser
  },
};
