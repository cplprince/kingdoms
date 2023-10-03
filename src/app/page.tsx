'use client';

import { Inventory } from '@/components/inventory/Inventory';
import { useModal } from '../hooks/useModal';
import { cn } from '../../lib/utils';
import { Card } from '@/components/card/Card';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { activityInfo } from '../mocks/CardMocks';
import styles from './Components.module.css';

export default function Home() {
	const { isOpen, toggle } = useModal();
	const inventoryContainer = cn('container mx-auto pt-10 relative pl-10');
	const buttonInventory = cn('text-2xl font-bold border-4 p-4 mb-4 border-primary-first text-primary-third ');

	const items = [];
	for (let i = 1; i <= 50; i++) {
		items.push({ id: i, name: `Item ${i}` });
	}

	return (
		<main>
			<Sidebar />
			<div className={inventoryContainer}>
				<button className={buttonInventory} onClick={toggle}>
					Inventory
				</button>
				{isOpen && <Inventory items={items} />}
			</div>
			<div className={styles.cardContainer}>
				{activityInfo.map((data, index) => {
					return (
						<div key={index}>
							<Card data={data} />
						</div>
					);
				})}
			</div>
		</main>
	);
}
