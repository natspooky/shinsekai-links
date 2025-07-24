'use client';

import { linkButton } from '@/data/types';
import Icon from './icon';
import EventButton from './eventButton';
import Link from 'next/link';
import LinkModal from './linkModal';
import Chain from '@/public/svg/chain.svg';

export default function LinkButton({
	href,
	icon,
	title,
	modalProp,
}: linkButton) {
	const clickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
		if (ev && ev.stopPropagation) ev.stopPropagation();
		ev.preventDefault();
		modalProp(
			<LinkModal
				modalProp={modalProp}
				href={href}
				icon={icon}
				title={title}
			></LinkModal>,
		);
	};

	return (
		<div className="link-button">
			<Link
				href={{
					pathname: href,
				}}
				prefetch={true}
			>
				<span>
					<Icon icon={icon}></Icon>
					<p>{title}</p>
				</span>
				<EventButton
					clickEvent={clickHandler}
					icon={Chain.src}
				></EventButton>
			</Link>
		</div>
	);
}
