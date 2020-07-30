// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteUrl: process.env.SITE_URL,
	siteName: 'Preset',
	siteDescription: 'Preset and scaffolding tool',
	longDescription: 'Preset is a command line tool for applying existing presets to your freshly scaffolded project.',

	icon: {
		favicon: './src/assets/favicon.png',
		touchicon: './src/assets/favicon.png',
	},

	settings: {
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
		],
		sidebar: [
			{
				name: 'docs',
				sections: [
					{
						id: 'basics',
						title: 'Basics',
						items: ['/docs/basics/introduction/', '/docs/basics/getting-started/', '/docs/basics/writing-a-preset/'],
					},
					{
						id: 'concepts',
						title: 'Concepts',
						items: [
							'/docs/concepts/preset/',
							'/docs/concepts/action/',
							'/docs/concepts/context/',
							'/docs/concepts/templates/',
							'/docs/concepts/hooks/',
						],
					},
					{
						id: 'guide',
						title: 'Guide',
						items: ['/docs/actions/'],
					},
					{
						id: 'api',
						title: 'API reference',
						items: ['/docs/api/context/', '/docs/api/preset/'],
					},
					{
						id: 'other',
						items: ['/docs/alternatives/'],
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
