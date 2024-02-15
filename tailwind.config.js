/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"green": "#739678",
				"light-green": "#62CF73",
				"black": "#242424"
			},
			fontFamily: {
				"Monserat": "Montserrat",
				"Vollkorn": "Vollkorn"
			}
		},
	},
	plugins: [],
}