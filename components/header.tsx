import Image from 'next/image';
import Meta from '@/data/metadata';
import Profile from '@/public/profile.jpeg';

export default function Header() {
	return (
		<header>
			<div className="header-center">
				<span>
					<Image
						alt="profile"
						src={Profile.src}
						width={100}
						height={100}
						draggable={false}
					></Image>
				</span>

				<h1>{Meta.name}</h1>
				<p>{Meta.description}</p>
			</div>
		</header>
	);
}
