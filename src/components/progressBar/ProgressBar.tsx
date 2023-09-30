import React, { useEffect, useState } from 'react';
import styles from './Components.module.css';

export const ProgressBar = () => {
	const [progress, setProgress] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const handleOnReset = () => {
		setProgress(0);
	};

	const getColor = () => {
		if (progress === 100) {
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
	const time = 10000;
	useEffect(() => {
		if (progress < 100 && !isFinished) {
			const intervalId = setTimeout(() => {
				setProgress((prevProgress) => {
					if (prevProgress + 1 >= 100) {
						setIsFinished(true);
						return 100;
					}
					return prevProgress + 1;
				});
			}, time / 100);
			return () => clearTimeout(intervalId);
		} else if (progress === 100) {
			setIsFinished(true);
			handleOnReset();
		}
	}, [isFinished, progress]);

	return (
		<div className={styles.container}>
			<div className={styles.progressBar}>
				<div className={styles.progressBarFill} style={{ width: `${progress}%`, background: getColor() }}>
					<div>{progress}</div>
				</div>
			</div>
			<div className={styles.progessLabel}>{progress}</div>
		</div>
	);
};
