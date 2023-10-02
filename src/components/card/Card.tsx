import { FC } from 'react';
import Image from 'next/image';
import { typography } from '../../app/layout';

import styles from './Components.module.css';

type ActivityInfoItems = {
	type: string;
	reqLvl: number;
	xpGain: number;
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
						<div key={index}>
							<p>Type: {item.type}</p>
							<p>Level required: {item.reqLvl}</p>
							<p>Xp gain: {item.xpGain}</p>
							<p>Time required: {item.time}</p>
						</div>
					))}
				</section>
			</div>
		</article>
	);
};
