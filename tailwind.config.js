const { fontFamily } = require('tailwindcss/defaultTheme');
const typography = require('./typography.config');

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
				code: ['Fira Code'],
			},
			inset: {
				10: '4.5rem',
				12: '5rem',
				14: '5.5rem',
				16: '6rem',
				18: '6.5rem',
			},
			width: {
				sidebar: '20rem',
			},
		},

		typography,
	},

	variants: {
		boxShadow: ['focus', 'responsive', 'focus-visible'],
		typography: ['responsive'],
		animation: ['motion-safe'],
	},

	plugins: [
		//
		require('tailwindcss-theming'),
		require('@tailwindcss/typography'),
	],
};
