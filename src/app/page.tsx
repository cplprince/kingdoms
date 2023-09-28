'use client';

import { Inventory } from '@/components/inventory/Inventory';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { useModal } from '../hooks/useModal';
import { cn } from '../../lib/utils';
import { Card } from '@/components/card/Card';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { activityInfo } from '../mocks/CardMocks';

export default function Home() {
	const { isOpen, toggle } = useModal();
	const inventoryContainer = cn('container mx-auto mt-4 absolute pl-32');
	const buttonInventory = cn('text-2xl font-bold border-4 p-4 mb-4 border-primary-first text-primary-third');

	const items = [];
	for (let i = 1; i <= 50; i++) {
		items.push({ id: i, name: `Item ${i}` });
	}

	return (
		<main className="">
			<Sidebar />
			<div className=" absolute mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ml-40 place-items-center">
				{activityInfo.map((data, index) => {
					return (
						<div key={index}>
							<Card data={data} />
						</div>
					);
				})}
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
