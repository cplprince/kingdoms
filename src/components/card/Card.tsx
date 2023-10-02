import { FC } from 'react';
import Image from 'next/image';
import { Roboto, Roboto_Mono } from 'next/font/google';

import styles from './Components.module.css';

type ActivityInfoItems = {
	type: string;
	reqLvl: number;
	lvlGain: number;
	time: number;
};

type ActivityItems = {
	name: string;
	imgUrl: string;
	items: ActivityInfoItems[];
};

type CardProps = {
	data: ActivityItems;
};

const roboto = Roboto_Mono({
	subsets: ['latin'],
});

const typography = Roboto({
	subsets: ['latin'],
	weight: ['700'],
});

export const Card: FC<CardProps> = ({ data: { name, imgUrl, items } }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardContent}>
				<div className={typography.className}>Name: {name}</div>
				<div className={styles.imgContainer}>
					<Image src={imgUrl} alt={name} width={100} height={100} className={styles.img} />
				</div>
				{items.map((item, index) => (
					<div key={index} className={roboto.className}>
						<div>Type: {item.type}</div>
						<div>Level required: {item.reqLvl}</div>
						<div>Level gain: {item.lvlGain}</div>
						<div>Time required: {item.time}</div>
					</div>
				))}
			</div>
		</div>
	);
};
