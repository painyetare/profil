/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC and use Babel instead
  swcMinify: false,
  compiler: {
    // Remove SWC-specific options that might cause issues
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  // Ensure mobile compatibility
  experimental: {
    esmExternals: false,
    // Disable SWC in experimental features
    forceSwcTransforms: false
  }
};

export default nextConfig;