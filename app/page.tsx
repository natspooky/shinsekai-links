'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import LinkButton from '@/components/linkButton';

import Index from '@/data/link-index';
import { linkProps } from '@/data/types';
import { useState, ReactNode } from 'react';

export default function Page() {
	const [modal, setModal] = useState<ReactNode>(null);

	return (
		<section>
			<main>
				<Header></Header>

				<div className="grid-container">
					{Index &&
						Index.map(({ href, icon, title }: linkProps, index) => {
							return (
								<LinkButton
									key={`${index} ${icon}`}
									href={href}
									icon={icon}
									title={title}
									modalProp={setModal}
								></LinkButton>
							);
						})}
				</div>
			</main>
			<Footer></Footer>
			{modal}
		</section>
	);
}
