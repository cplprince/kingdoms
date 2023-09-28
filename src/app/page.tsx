'use client';

import { ProgressBar } from '@/components/progressBar/ProgressBar';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
	return (
		<main>
			<Sidebar />
			<ProgressBar />
		</main>
	);
}
