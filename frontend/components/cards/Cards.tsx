import Image from 'next/image';
import { cardsShuffled } from 'lib/cards';

export const Cards = ({ cardColor }: { cardColor: string }) => {
	return (
		<>
			{cardsShuffled.map(src => (
				<div className="flex" key={src}>
					<Image src={src} alt="" width={60} height={60} />
					<Image src={`/${cardColor}_back.jpg`} alt="" width={60} height={60} />
				</div>
			))}
		</>
	);
};
