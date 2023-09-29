import React, { useEffect, useState } from 'react';
import styles from './Components.module.css';

export const ProgressBar = () => {
	const [progress, setProgress] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const handleOnClick = () => {
		if (progress < 100) {
			setProgress(progress + 20);
		}
	};

	const handleOnReset = () => {
		setProgress(0);
	};

	const getColor = () => {
		if (progress == 100) {
			handleOnReset();
		}
		if (progress < 40) {
			return '#ff0000';
		} else if (progress < 70) {
			return '#ffa500';
		} else {
			return '#2ecc71';
		}
	};

	useEffect(() => {
		if (progress < 100 && !isFinished) {
			setInterval(() => {
				setProgress(progress + 20);
			}, 5000);
		} else if (progress === 100) {
			setIsFinished(true);
			console.log('is finishd', isFinished);
			handleOnReset();
		}
	}, [isFinished, progress]);

	return (
		<div className={styles.container}>
			<div className={styles.progressBar}>
				<div className={styles.progressBarFill} style={{ width: `${progress}%`, background: getColor() }}></div>
			</div>
			<div className={styles.progessLabel}>{progress}</div>
			<button onClick={handleOnClick} className="ml-32">
				Progress
			</button>
			<button onClick={handleOnReset} className="ml-32">
				Reset
			</button>
		</div>
	);
};
