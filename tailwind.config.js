const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			black: "#2d2d2d",
			white: "#ffffff",
			primary: "#ED7801",
			secondary: "#8B542F",
			dark: "#502314",
			cream: "#F5EBDC",
			darkCream: "#FBE6D6",
			yellow: "#FAAF18",
			grey: "#9F816F",
			base: "#F9F4F2",
			form: "#B7B7B7",
		},
		extend: {},
	},
	plugins: [],
});
