import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			'yellow': '#FFC830',
			'wheat': '#F3F3F3',
			'magenta': '#DB4AFF',
			'darkgrey': '#191919',
			'black': '#000000',
		},
		extend: {
		backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic":
			"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
		},
	},
	plugins: [],
};
export default config;
