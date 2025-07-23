import { ImageResponse } from 'next/og';
import { imageSize } from '@/data/types';
import Meta from '@/data/metadata';

export const alt = Meta.name;
export const size = {
	height: 400,
	width: 400,
};
export const contentType = 'image/png';

export default function Image({ size }: imageSize) {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					background: 'white',
					overflow: 'hidden',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			></div>
		),
		{ ...size },
	);
}
