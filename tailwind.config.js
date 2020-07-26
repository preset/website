const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: {
		content: ['./src/**/*.vue', './src/**/*.md'],
		options: {
			whitelistPatterns: [/token$/],
		},
	},

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...fontFamily.sans],
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	variants: {
		boxShadow: ['focus'],
	},
	plugins: [
		//
		require('tailwindcss-theming'),
		require('@tailwindcss/typography'),
	],
};
