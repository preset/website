// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: process.env.SITE_NAME,
	icon: {
		favicon: './src/assets/favicon.png',
		touchicon: './src/assets/favicon.png',
	},
	siteUrl: process.env.SITE_URL,
	settings: {
		twitter: {
			name: 'Twitter',
			title: 'Visit my Twitter',
			url: process.env.TWITTER_URL || false,
		},
		github: {
			name: 'Github',
			title: 'Visit the repositories',
			url: process.env.GITHUB_URL || false,
		},
		sidebar: [
			{
				name: 'docs',
				sections: [
					{
						title: 'Getting Started',
						items: ['/docs/'],
					},
				],
			},
		],
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				baseDir: './content',
				path: '**/*.md',
				typeName: 'MarkdownPage',
				remark: {
					externalLinksTarget: '_blank',
					externalLinksRel: ['noopener', 'noreferrer'],
					plugins: ['@gridsome/remark-prismjs'],
				},
			},
		},

		{
			use: '@gridsome/plugin-sitemap',
			options: {},
		},
	],

	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					//
					require('tailwindcss'),
					require('postcss-nested'),
					require('postcss-font-magician'),
				],
			},
		},
	},
};
