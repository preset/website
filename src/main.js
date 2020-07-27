// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/main.css';

export default function(Vue, { router, head, isClient }) {
	// Set the OpenGraph URL for each route
	router.beforeEach((to, _from, next) => {
		head.meta.push({
			key: 'og:url',
			name: 'og:url',
			content: process.env.SITE_URL + to.path,
		});
		next();
	});

	// Add meta properties for every route
	head.meta.push(
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com/',
			crossorigin: true,
		},
		{
			key: 'og:type',
			name: 'og:type',
			content: 'website',
		},
		{
			key: 'twitter:card',
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			key: 'og:image',
			name: 'og:image',
			content: process.env.SITE_URL + '/logo.jpg',
		},
		{
			key: 'twitter:image',
			name: 'twitter:image',
			content: process.env.SITE_URL + '/logo.jpg',
		},
	);
}
