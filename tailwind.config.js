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
			inset: {
				18: '6.5rem',
			},
			width: {
				sidebar: '20rem',
			},
		},

		typography: (theme) => {
			return {
				default: {
					css: {
						color: theme('colors.on-background.default'),
						blockquote: {
							color: theme('colors.on-background-blockquote.default'),
							borderLeftColor: theme('colors.on-background-muted.default'),
						},
						hr: {
							borderTopColor: theme('colors.on-background-muted.default'),
						},
						strong: {
							color: theme('colors.brand.default'),
						},
						'figure figcaption': {
							color: theme('colors.on-background-figcaption.default'),
						},
						a: {
							color: theme('colors.brand.default'),
						},
						th: {
							color: theme('colors.brand.default'),
						},
						'thead, tbody tr': {
							borderBottomColor: theme('colors.on-background-muted.default'),
						},
						'h1, h2, h3, h4': {
							color: theme('colors.brand.default'),
						},
						code: {
							color: theme('colors.on-background.default'),
							borderRadius: theme('borderRadius.default'),
							backgroundColor: theme('colors.on-background-code.default'),
							padding: theme('padding.1'),
						},
						'code::before': { content: '' },
						'code::after': { content: '' },
						'ol > li:before': {
							color: theme('colors.on-background-list.default'),
						},
						'ul > li:before': {
							backgroundColor: theme('colors.on-background-muted.default'),
						},
					},
				},
			};
		},
	},

	variants: {
		boxShadow: ['focus', 'responsive', 'focus-visible'],
		typography: ['responsive'],
	},

	plugins: [
		//
		require('tailwindcss-theming'),
		require('@tailwindcss/typography'),
	],
};
