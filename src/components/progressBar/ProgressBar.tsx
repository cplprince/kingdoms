import { FC, useEffect, useState, useCallback } from 'react';

type Props = {
	time: number;
	onHandleFinished: () => void;
	styleProgressContainer: string;
	styleLabel: string;
};

export const ProgressBar: FC<Props> = ({ time, onHandleFinished, styleProgressContainer, styleLabel }) => {
	const [progress, setProgress] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const handleOnReset = useCallback(() => {
		setProgress(0);
	}, []);

	useEffect(() => {
		if (progress >= 100 || isFinished) {
			onHandleFinished();
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
		<div className={styleProgressContainer}>
			<progress max={100} value={progress}>
				{progress}
			</progress>
			<label className={styleLabel} htmlFor="progress">{`${progress}%`}</label>
		</div>
	);
};
