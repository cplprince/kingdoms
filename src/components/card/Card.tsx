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
		<article className={styles.cardContainer}>
			<div className={styles.cardContent}>
				<header>
					<h2 className={typography.className}>Name: {name}</h2>
				</header>
				<div className={styles.imgContainer}>
					<Image src={imgUrl} alt={name} width={100} height={100} className={styles.img} />
				</div>
				<section>
					{items.map((item, index) => (
						<div key={index} className={roboto.className}>
							<p>Type: {item.type}</p>
							<p>Level required: {item.reqLvl}</p>
							<p>Level gain: {item.lvlGain}</p>
							<p>Time required: {item.time}</p>
						</div>
					))}
				</section>
			</div>
		</article>
	);
};
