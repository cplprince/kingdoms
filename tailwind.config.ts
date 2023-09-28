import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					first: '#05204A',
					second: '#52737B',
					third: '#CEEDDB',
				},
				secondary: {
					first: '#B287A3',
					second: '#BF4E30',
				},
			},
		},
	},

	plugins: [],
};
export default config;
