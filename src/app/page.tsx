'use client';
import { useState } from 'react';

import { ProgressBar } from '@/components/progressBar/ProgressBar';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
	const [finished, setIsFinished] = useState(false);

	finished && console.log('Finished');

	const handleFinished = () => {
		setIsFinished(true);
	};

	return (
		<main>
			<Sidebar />
			<ProgressBar
				time={10000}
				onHandleFinished={handleFinished}
				styleProgressContainer="relative w-52 "
				styleLabel="pl-10"
				htmlFor="progress"
			/>
		</main>
	);
}
