import { FC } from 'react';
import Image from 'next/image';

import styles from './Components.module.css';
import { cn } from '../../../lib/utils';

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

export const Card: FC<CardProps> = ({ data }) => {
	const { name, imgUrl, items } = data;
	const typoName = cn('font-bold');
	const textCard = cn('font-mono');

	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardContent}>
				<div className={typoName}>Name: {name}</div>
				<div className={styles.imgContainer}>
					<Image src={imgUrl} alt={name} width={100} height={100} className={styles.img} />
				</div>
				{items.map((item, index) => (
					<div key={index} className={textCard}>
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
