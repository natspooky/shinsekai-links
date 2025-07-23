import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface linkButton {
	href?: string;
	icon?: string;
	title?: string;
	modalProp: Dispatch<SetStateAction<ReactNode>>;
}

export interface linkProps {
	href?: string;
	icon?: string;
	title?: string;
}

export interface iconNode {
	icon?: string;
}

export type eventCallbackButton = (
	...args: React.MouseEvent<HTMLButtonElement>[]
) => void;

export type eventCallbackDiv = (
	...args: React.MouseEvent<HTMLElement>[]
) => void;

export interface eventElement {
	clickEvent: eventCallbackDiv;
}

export interface eventButton {
	clickEvent: eventCallbackButton;
	icon?: string;
}

export interface imageSize {
	size: {
		height: number;
		width: number;
	};
}
