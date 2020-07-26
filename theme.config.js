const { Theme, ThemeManager } = require('tailwindcss-theming/api');
const { TinyColor } = require('@ctrl/tinycolor');

const main = new Theme()
	.setName('light')
	.targetable()
	.addColors({
		brand: {
			default: '#4557b9',
			button: '#e5ecff',
			muted: '#4556babf',
		},
		background: '#ffffff',
		navigation: {
			default: '#edf2f7',
			hover: new TinyColor('#edf2f7').setAlpha(0.75),
		},
		sidebar: {
			active: '#e5ecff',
		},
		'on-background': '#05112f',
		'on-navigation': {
			default: '#05112f',
			icon: new TinyColor('#05112f').setAlpha(0.75),
			muted: new TinyColor('#05112f').setAlpha(0.1),
		},
		'on-sidebar': {
			default: '#4e576f',
			active: '#4557b9',
			header: '#a0aec0',
			hover: '#4557b9',
		},
		'on-brand': '#ffffff',
		border: 'red',
	})
	.setVariable('focus', '0 0 0 3px rgba(66, 153, 225, 0.5)', 'boxShadow', 'shadow')
	.addOpacityVariant('hover', 0.75, 'navigation');

const dark = new Theme()
	.setName('dark')
	.targetable()
	.addColors({
		brand: '#b0bcff',
		background: '#1c1e26',
		navigation: '#2d3747',
		'on-background': '#ffffff',
		'on-navigation': '#ffffff',
		'on-sidebar': '#ffffff',

		sidebar: 'red',
		border: 'red',
	})
	.setVariable('focus', 'inset 0 0 0 4px rgba(66, 153, 225, 0.5)', 'boxShadow', 'shadow')
	.addColorVariant('header', '#dddddd', 'on-sidebar')
	.addOpacityVariant('icon', 0.75, 'on-navigation')
	.addOpacityVariant('muted', 0.35, 'on-navigation')
	.addOpacityVariant('hover', 0.75, 'navigation');

module.exports = new ThemeManager() //
	.setDefaultTheme(main)
	.setDefaultDarkTheme(dark);
