module.exports = {
	theme: {
		extend: {
			spacing: {
				sm: '24rem',
			},
			screens: {
				xxl: '1400px',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	variants: {},
	plugins: [
		//
		require('tailwindcss-theming'),
	],
};
