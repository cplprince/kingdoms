'use client';

import { Inventory } from '@/components/inventory/Inventory';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { useModal } from '../hooks/useModal';
import { cn } from '../../lib/utils';
import { Card } from '@/components/card/Card';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
	const { isOpen, toggle } = useModal();
	const inventoryContainer = cn('container mx-auto mt-4 absolute pl-32');
	const buttonInventory = cn('text-2xl font-bold border-4 p-4 mb-4 border-primary-first text-primary-third');

	const items = [];
	for (let i = 1; i <= 50; i++) {
		items.push({ id: i, name: `Item ${i}` });
	}

	return (
		<main className="absolute">
			<Sidebar />
			<div className="mx-auto flex items-center justify-center">
				<Card />
			</div>
			<div className={inventoryContainer}>
				<button className={buttonInventory} onClick={toggle}>
					Inventory
				</button>
				{isOpen && <Inventory items={items} />}
			</div>
		</main>
	);
}
