const { Theme, ThemeManager } = require('tailwindcss-theming/api');

const main = new Theme()
	.setName('light')
	.targetable()
	.addColors({
		background: '#ffffff',
		'on-background': '#05112f',
		brand: '#4557b9',

		sidebar: 'red',
		border: 'red',
	});

const dark = new Theme()
	.setName('dark')
	.targetable()
	.addColors({
		background: '#1c1e26',
		'on-background': '#ffffff',
		brand: '#4557b9',

		sidebar: 'red',
		border: 'red',
	});

module.exports = new ThemeManager() //
	.setDefaultTheme(main)
	.setDefaultDarkTheme(dark);
