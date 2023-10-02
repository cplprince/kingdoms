import { FC, useEffect, useState, useCallback } from 'react';
import styles from './Components.module.css';

type Props = {
	time: number;
	onHandleFinished: (isFinished: boolean) => void;
};

export const ProgressBar: FC<Props> = ({ time, onHandleFinished }) => {
	const [progress, setProgress] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const handleOnReset = useCallback(() => {
		setProgress(0);
	}, []);

	const getColor = useCallback(() => {
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
	}, [progress, handleOnReset]);

	useEffect(() => {
		if (progress >= 100 || isFinished) {
			onHandleFinished(true);
			handleOnReset();
			return;
		}

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
	}, [handleOnReset, isFinished, onHandleFinished, progress, time]);

	return (
		<div className={styles.container}>
			<div className={styles.progressBar}>
				<div className={styles.progressBarFill} style={{ width: `${progress}%`, background: getColor() }}>
					<div className={styles.progressLabel}>{progress}%</div>
				</div>
			</div>
		</div>
	);
};
