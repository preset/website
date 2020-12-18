// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteUrl: process.env.SITE_URL,
	siteName: 'Preset',
	siteDescription: 'Elegant preset mechanism',
	longDescription: 'Preset is a command line tool for applying existing presets to your freshly scaffolded project.',

	icon: {
		favicon: './src/assets/favicon.png',
		touchicon: './src/assets/favicon.png',
	},

	templates: {
		MarkdownPage: [
			{
				// Removes the digits in the urls, used to order stuff in the source code
				path: (node) => node.path.replace(/(\d{2}-)/g, ''),
			},
		],
	},

	settings: {
		websiteRepository: process.env.WEBSITE_REPOSITORY,
		links: [
			{
				id: 'docs',
				name: 'Documentation',
				title: 'Read the documentation',
				url: '/docs/',
				icon: 'book',
			},
			{
				id: 'twitter',
				name: 'Twitter',
				title: 'Visit my Twitter',
				url: process.env.TWITTER_URL || false,
				icon: 'twitter',
			},
			{
				id: 'github',
				name: 'Github',
				title: 'Visit the repositories',
				url: process.env.GITHUB_URL || false,
				icon: 'github',
			},
			{
				id: 'discord',
				name: 'Discord',
				title: 'Join the Discord server',
				url: process.env.DISCORD_URL || false,
				icon: 'discord',
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
					plugins: ['@gridsome/remark-prismjs', 'remark-hint'],
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
