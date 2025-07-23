import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/e/:path*',
				destination: '/',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
