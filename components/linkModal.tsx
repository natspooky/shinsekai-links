import shareFormat from '@/data/share-index';
import { linkButton } from '@/data/types';
import EventButton from './eventButton';
import Chain from '@/public/svg/chain.svg';
import Icon from './icon';

export default function LinkModal({
	href,
	icon,
	title,
	modalProp,
}: linkButton) {
	const clickHandler = () => {
		modalProp(null);
	};

	const generateLink = (format: string, message?: string): string => {
		return format + (message ?? '');
	};

	return (
		<>
			<section className="modal-bg"></section>

			<div className="modal-container">
				<EventButton clickEvent={clickHandler}></EventButton>
				<div className="modal">
					<a href={href} className="modal-link-info">
						<Icon icon={icon}></Icon>
						<h1>{title}</h1>
					</a>

					<span>
						{shareFormat.map((data, index) => {
							return (
								<div key={index}>
									<EventButton
										clickEvent={() => {
											window.open(
												generateLink(data.format, href),
												'_blank',
											);
										}}
										icon={Chain.src}
									></EventButton>
								</div>
							);
						})}
					</span>
				</div>
			</div>
		</>
	);
}
