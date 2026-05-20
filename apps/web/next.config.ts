import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@copilotkit/react-core', '@copilotkit/react-ui'],
  },
};

export default nextConfig;
