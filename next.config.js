const path = require('path');

const nextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, 
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'media.dev.to',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'media2.dev.to',
  //       pathname: '**',
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
