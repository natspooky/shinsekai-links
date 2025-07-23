import shareFormat from '@/data/share-index';
import { linkButton } from '@/data/types';
import EventButton from './eventButton';
import Chain from '@/public/svg/chain.svg';

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
					<span>
						<h1>{title}</h1>
					</span>
					{/* put links */}
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
				</div>
			</div>
		</>
	);
}
