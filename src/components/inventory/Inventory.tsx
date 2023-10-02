import { FC } from 'react';
import styles from './Components.module.css';

type InventoryItem = {
	id: number;
	name: string;
};

type Props = {
	items: InventoryItem[];
};

export const Inventory: FC<Props> = ({ items }) => {
	return (
		<div className={styles.inventoryContainer}>
			<div className={styles.inventoryContent}>
				{items.map((item) => (
					<div key={item.id} className={styles.inventoryItem}>
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
};
