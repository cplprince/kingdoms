'use client';

import { ProgressBar } from '@/components/progressBar/ProgressBar';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { useState } from 'react';

export default function Home() {
	const [finished, setIsFinished] = useState(false);

	finished && console.log('Finished');

	return (
		<main>
			<Sidebar />
			<ProgressBar time={10000} onHandleFinished={setIsFinished} />
		</main>
	);
}
