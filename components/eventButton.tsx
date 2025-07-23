import { eventButton } from '@/data/types';
import Icon from './icon';

export default function EventButton({ clickEvent, icon }: eventButton) {
	return (
		<button onClick={clickEvent} className="event-button">
			{icon && <Icon icon={icon}></Icon>}
		</button>
	);
}
