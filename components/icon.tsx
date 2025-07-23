import { iconNode } from '@/data/types';

export default function Icon({ icon }: iconNode) {
	return (
		<div
			className="page-icon"
			style={{
				mask: `url(${icon}) center center no-repeat`,
			}}
		></div>
	);
}
