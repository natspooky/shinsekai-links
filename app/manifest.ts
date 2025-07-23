import type { MetadataRoute } from 'next';
import Meta from '@/data/metadata';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: Meta.name,
		short_name: Meta.name,
		description: Meta.description,
		start_url: '/',
		display: 'standalone',
	};
}
