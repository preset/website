const { Theme, ThemeManager } = require('tailwindcss-theming/api');
const { TinyColor } = require('@ctrl/tinycolor');

const main = new Theme()
	.setName('light')
	.targetable()
	.addColors({
		brand: {
			default: '#4557b9',
			muted: '#4556babf',
		},
		button: '#e5ecfe',
		background: '#ffffff',
		navigation: {
			default: '#edf2f7',
			hover: new TinyColor('#edf2f7').setAlpha(0.75),
		},
		sidebar: {
			active: '#e5ecff',
		},
		'on-background': {
			default: '#05112f',
			code: '#f1f4ff',
			blockquote: '#828d9a',
			figcaption: '#828d9a',
			list: '#828d9a',
			muted: '#e2e8f0',
		},
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
		'on-button': {
			default: '#7a93b0f5',
			hover: '#4557b9',
		},
	})
	.setVariable('focus', '0 0 0 3px rgba(66, 153, 225, 0.5)', 'boxShadow', 'shadow')
	.addOpacityVariant('hover', 0.75, 'navigation');

const dark = new Theme()
	.setName('dark')
	.targetable()
	.addColors({
		brand: {
			default: '#b0bcff',
			muted: '#4556babf',
		},
		button: '#252732',
		background: '#1c1e26',
		navigation: {
			default: '#2d3747',
			hover: new TinyColor('#2d3747').setAlpha(0.75),
		},
		sidebar: {
			active: '#21232d',
		},
		'on-background': {
			default: '#efefef',
			code: '#23252f',
			blockquote: '#626884',
			figcaption: '#626884',
			list: '#626884',
			muted: '#252732',
		},
		'on-navigation': {
			default: '#ffffff',
			icon: new TinyColor('#ffffff').setAlpha(0.75),
			muted: new TinyColor('#ffffff').setAlpha(0.1),
		},
		'on-sidebar': {
			default: '#959bb1',
			active: '#ffffff',
			header: '#a0aec0',
			hover: '#ffffff',
		},
		'on-brand': '#ffffff',
		'on-button': {
			default: '#829caf',
			hover: '#cbd3ff',
		},
	})
	.setVariable('focus', '0 0 0 3px rgba(66, 153, 225, 0.5)', 'boxShadow', 'shadow')
	.addOpacityVariant('hover', 0.75, 'navigation');

module.exports = new ThemeManager() //
	.setDefaultTheme(main)
	.setDefaultDarkTheme(dark);
