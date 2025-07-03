/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use Babel instead of SWC
  swcMinify: false,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    unoptimized: true
  },
  
  // Ensure mobile compatibility
  experimental: {
    esmExternals: false,
  },
  
  // Webpack configuration to handle potential issues
  webpack: (config, { isServer }) => {
    // Fallback for modules that might not be available
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
};

export default nextConfig;