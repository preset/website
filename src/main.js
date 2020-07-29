// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/main.css';

console.log('Come on, give the site some time. I swear I will make it fancier in the future.');

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
			key: 'og:site_name',
			name: 'og:site_name',
			content: process.env.SITE_NAME,
		},
		{
			key: 'og:title',
			name: 'og:title',
			content: process.env.SITE_NAME,
		},
		{
			key: 'og:url',
			name: 'og:url',
			content: process.env.SITE_URL,
		},
		{
			key: 'og:type',
			name: 'og:type',
			content: 'website',
		},
		{
			key: 'og:image',
			name: 'og:image',
			content: process.env.SITE_URL + '/logo.jpg',
		},
		{
			key: 'twitter:card',
			name: 'twitter:card',
			content: 'summary',
		},
		{
			key: 'twitter:image',
			name: 'twitter:image',
			content: process.env.SITE_URL + '/logo.jpg',
		},
		{
			key: 'twitter:image:alt',
			name: 'twitter:image:alt',
			content: process.env.SITE_NAME,
		},
	);
}
