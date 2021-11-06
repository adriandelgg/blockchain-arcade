import Image from 'next/image';
import { cardsShuffled } from 'lib/cards';

export const Cards = ({ color }: { color: string }) => {
	return (
		<>
			{cardsShuffled.map(src => (
				<div key={src}>
					<Image src={src} alt="" width={60} height={60} />
					<Image src={`/${color}_back.jpg`} alt="" width={60} height={60} />
				</div>
			))}
		</>
	);
};
