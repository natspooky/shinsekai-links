import X from '@/public/links/x.jpg';
import Snapchat from '@/public/links/snapchat.png';
import Whatsapp from '@/public/links/whatsapp.png';
import Facebook from '@/public/links/facebook.png';
import Linkedin from '@/public/links/linkedin.png';

const shareFormat = [
	{
		name: 'Copy Link',
		icon: X.src,
		format: '',
	},
	{
		name: 'WhatsApp',
		icon: Whatsapp.src,
		format: 'https://wa.me/?text={companyName}%20{appName}%20-%20{link}',
	},
	{
		name: 'X',
		icon: X.src,
		format: 'https://x.com/intent/post?text={appName}%20-%20{link}%20{companyName}',
	},
	{
		name: 'Facebook',
		icon: Facebook.src,
		format: 'https://www.facebook.com/sharer.php?u={appName}%20-%20{link}%20{companyName}',
	},
	{
		name: 'Snapchat',
		icon: Snapchat.src,
		format: 'snapchat://creativeKitWeb/camera/1?attachmentUrl={link}',
	},
	{
		name: 'LinkedIn',
		icon: Linkedin.src,
		format: 'https://www.linkedin.com/sharing/share-offsite/?url={link}',
	},
];

export default shareFormat;
