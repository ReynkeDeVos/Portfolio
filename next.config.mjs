import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  // Enable AVIF image format with WebP as a fallback
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
