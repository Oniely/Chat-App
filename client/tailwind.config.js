/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary": "#D84D4D",
				"secondary": "#0F1828",
				"grey": "#A4A4A4",
			}
		},
	},
	plugins: [],
};
