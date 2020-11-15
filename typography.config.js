module.exports = (theme) => {
	return {
		default: {
			css: {
				color: theme('colors.on-background.default'),
				blockquote: {
					color: theme('colors.on-background-blockquote.default'),
					borderLeftColor: theme('colors.on-background-muted.default'),
				},
				'blockquote p:first-of-type::before, blockquote p:last-of-type::after': {
					content: 'none',
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
};
