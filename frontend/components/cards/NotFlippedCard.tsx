import { useState } from 'react';
import Image from 'next/image';

export const NotFlippedCard = ({ color }: { color: string }) => {
	return <Image src={`/${color}_back.jpg`} alt="" width={60} height={70} />;
};
