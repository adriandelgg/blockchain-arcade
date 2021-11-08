import { useState } from 'react';

import { SelectCardColor } from './SelectCardColor';
import { Cards } from './Cards';

export const CardGame = () => {
	const [cardColor, setCardColor] = useState('');

	return (
		<div>
			{cardColor ? (
				<Cards cardColor={cardColor} />
			) : (
				<SelectCardColor setCardColor={setCardColor} />
			)}
		</div>
	);
};
