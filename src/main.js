// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/main.css';

console.log('Come on, give the site some time. I swear I will make it fancier in the future.');

export default function(Vue, { router, head, isClient }) {
	Vue.mixin({
		computed: {
			categories() {
				const current = this.$page?.markdownPage || this.$static?.markdownPage;

				if (!this.$static?.allMarkdownPage || !current) {
					console.warn('Categories can not be accessed without fetching all pages.');
					return [];
				}

				// Gets the order and name of a category from a node.
				const categoryFromNode = (node) => {
					const [_, order, name] = node.fileInfo.directory.match(/docs\/(\d{2})-(.*)/);
					return {
						directory: node.fileInfo.directory,
						order,
						name,
					};
				};

				// Gets the unique categories and sort them by order.
				const categories = this.$static.allMarkdownPage.edges
					.filter(({ node }, index, self) => self.findIndex(({ node: _ }) => _.fileInfo.directory === node.fileInfo.directory) === index)
					.map(({ node }) => ({
						...categoryFromNode(node),
						links: [],
					}))
					.sort((a, b) => (a.order < b.order ? -1 : a.order > b.order ? 1 : 0));

				// For each page, adds it to its category.
				this.$static.allMarkdownPage.edges.forEach(({ node }) => {
					categories
						.find(({ name }) => name === categoryFromNode(node).name)
						.links.push({
							...node,
							order: node.fileInfo.name.split('-').shift(),
							current: node.path.includes(current.path),
						});
				});

				// Sorts each individual links.
				categories.forEach(({ links }) => links.sort((a, b) => (a.order < b.order ? -1 : a.order > b.order ? 1 : 0)));

				return categories;
			},
		},
	});

	router.beforeEach((to, _from, next) => {
		const redirections = {
			'/docs/': '/docs/basics/introduction/',
		};

		if (Reflect.has(redirections, to?.path)) {
			next({ path: redirections[(to?.path)] });
		}

		next();
	});

	// Set the OpenGraph URL for each route
	router.beforeEach((to, _from, next) => {
		const url = process.env.SITE_URL + to.path;

		head.meta.push(
			{
				key: 'og:url',
				name: 'og:url',
				content: url,
			},
			{
				key: 'canonical',
				rel: 'canonical',
				href: url,
			},
		);
		next();
	});

	const siteName = 'Preset';
	const siteUrl = process.env.SITE_URL || 'https://usepreset.dev';

	// Add meta properties for every route
	head.meta.push(
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com/',
			crossorigin: true,
		},
		{
			key: 'og:site_name',
			name: 'og:site_name',
			content: siteName,
		},
		{
			key: 'og:title',
			name: 'og:title',
			content: siteName,
		},
		{
			key: 'og:url',
			name: 'og:url',
			content: siteUrl,
		},
		{
			key: 'og:type',
			name: 'og:type',
			content: 'website',
		},
		{
			key: 'og:image',
			name: 'og:image',
			content: siteUrl + '/logo.jpg',
		},
		{
			key: 'twitter:card',
			name: 'twitter:card',
			content: 'summary',
		},
		{
			key: 'twitter:image',
			name: 'twitter:image',
			content: siteUrl + '/logo.jpg',
		},
		{
			key: 'twitter:image:alt',
			name: 'twitter:image:alt',
			content: process.env.SITE_NAME,
		},
	);
}
