/** @type {import('next').NextConfig} */
import withMarkdoc from '@markdoc/next.js';

const nextConfig = { mode: 'static' };

export default withMarkdoc(nextConfig)({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/docs',
  //       permanent: true,
  //     },
  //   ];
  // },
});
