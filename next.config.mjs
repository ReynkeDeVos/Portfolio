import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  // images: {},  // No external domains needed since images are served from the public folder
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
