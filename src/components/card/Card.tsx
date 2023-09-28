import { FC } from 'react';

type ActivityInfoItems = {
	type: string;
	reqLvl: number;
	lvlGain: number;
	time: number;
};

type ActivityItems = {
	name: string;
	imgUrl: string;
	items: ActivityInfoItems[];
};

type CardProps = {
	data: ActivityItems;
};

export const Card: FC<CardProps> = ({ data }) => {
	const { name, imgUrl, items } = data;

	return (
		<div className="px-14 py-5   bg-primary-second relative  rounded-xl shadow-xl  border-solid border-8 border-primary-first ">
			<div className="flex justify-center items-center flex-col text-black">
				<h5>Name: {name}</h5>
				<div>{imgUrl}</div>
				{items.map((item, index) => (
					<div key={index}>
						<div>Type: {item.type}</div>
						<div>Level required: {item.reqLvl}</div>
						<div>Level gain: {item.lvlGain}</div>
						<div>Time required: {item.time}</div>
					</div>
				))}
			</div>
		</div>
	);
};
