import Image from 'next/image';
import { cards } from '../../lib/cards';

export const FlippedCard = () => {
	return (
		<>
			{cards.map(src => (
				<Image key={src} src={src} alt="" width={60} height={60} />
			))}
		</>
	);
};
