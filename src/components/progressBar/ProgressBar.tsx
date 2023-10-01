import { FC, useEffect, useState } from 'react';
import styles from './Components.module.css';

type Props = {
	time: number;
	onHandleFinished?: (isFinished: boolean) => void;
};

export const ProgressBar: FC<Props> = ({ time, onHandleFinished }) => {
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

	useEffect(() => {
		if (progress < 100 && !isFinished) {
			const intervalId = setTimeout(() => {
				setProgress((prevProgress) => {
					if (prevProgress + 1 >= 100) {
						setIsFinished(true);
						onHandleFinished && onHandleFinished(isFinished);
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
	}, [isFinished, onHandleFinished, progress, time]);

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
