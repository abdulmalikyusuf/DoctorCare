/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DMSans: ["DM Sans", "sans-serif"],
			},
			colors: {
				"brand-green": "#00856F",
				"brand-green-light": "#DCE9E2",
				"brand-green-light-02": "#F7F9F9",
				"brand-beige": "#FFFAF1",
				"brand-green-hover": "#00453A",

				"gray-headline": "#061800",
				"gray-paragraph": "#384633",
				"sec-white": "#3E3E3E",
			},
			padding: {
				124: "124px",
				120: "120px",
				60: "60px",
			},
			lineHeight: {
				"extra-snug": "130%",
				52: "52px",
				67: "67px",
			},
			letterSpacing: {
				custom: "0.08em",
			},
			fontSize: {
				40: "40px",
				52: "52px",
			},
		},
	},
	plugins: [],
};
