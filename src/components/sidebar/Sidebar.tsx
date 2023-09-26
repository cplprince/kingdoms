import React, { FC } from 'react';
import Image from 'next/image';

import { cn } from '../../../lib/utils';
import styles from './Components.module.css';

export const Sidebar: FC = () => {
	const sidebarContent = cn('bg-primary-second', 'p-5');
	const x = 0;
	return (
		<div className={styles.sidebarContainer}>
			<div className={sidebarContent}>
				{['/corn.webp', '/tree-silhouette.svg'].map((image) => {
					return (
						<div className={styles.sidebarDivImg} key={image}>
							<Image src={image} alt={image} width={100} height={100} className={styles.sidebarImg} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
