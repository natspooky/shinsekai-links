import shareFormat from '@/data/share-index';
import { linkButton } from '@/data/types';
import EventButton from './eventButton';
import Icon from './icon';
import Meta from '@/data/metadata';
import Image from 'next/image';
import Cross from '@/public/svg/cross.svg';

interface generator {
	format: string;
	link?: string;
	appName?: string;
	companyName?: string;
}

export default function LinkModal({
	href,
	icon,
	title,
	modalProp,
}: linkButton) {
	const clickHandler = () => {
		modalProp(null);
	};

	const generateLink = ({
		format,
		link,
		appName,
		companyName,
	}: generator): string => {
		if (link && format.includes('{link}')) {
			format = format.replace('{link}', link);
		}

		if (appName && format.includes('{appName}')) {
			format = format.replace('{appName}', appName);
		}

		if (companyName && format.includes('{companyName}')) {
			format = format.replace('{companyName}', companyName);
		}

		return format;
	};

	return (
		<>
			<section className="modal-bg"></section>

			<div className="modal-container">
				<EventButton clickEvent={clickHandler}></EventButton>
				<div className="modal">
					<div className="top-bar">
						<h1>Share</h1>
						<EventButton
							clickEvent={clickHandler}
							icon={Cross.src}
						></EventButton>
					</div>

					<a href={href} target="_blank" className="modal-link-info">
						<Icon icon={icon}></Icon>
						<span>
							<h1>{title}</h1>
							<p>{Meta.tag}</p>
						</span>
					</a>

					<span className="link-container">
						{shareFormat.map((data, index) => {
							return (
								<a
									key={index}
									href={generateLink({
										format: data.format,
										link: href,
										appName: title,
										companyName: Meta.name,
									})}
									target="_blank"
								>
									<Image
										alt="icon"
										src={data.icon}
										width={40}
										height={40}
									></Image>
									<p>{data.name}</p>
								</a>
							);
						})}
					</span>
				</div>
			</div>
		</>
	);
}
