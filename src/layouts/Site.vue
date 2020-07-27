<template>
	<main
		role="main"
		:class="[
			'font-sans antialiased',
			'transition-colors duration-200',
			'bg-background text-on-background',
			'flex flex-col min-h-screen h-full',
		]"
	>
		<site-header />
		<slot class="flex-1" />
	</main>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteHeader from '@/components/site/Header.vue';

export default {
	components: {
		SiteHeader,
	},

	metaInfo() {
		const title = 'Preset';
		const description = 'A practical preset system that replace manual refactoring tasks.';

		return {
			title: title,
			meta: [
				{
					name: 'description',
					content: description,
				},
				{
					key: 'og:title',
					name: 'og:title',
					content: title,
				},
				{
					key: 'twitter:title',
					name: 'twitter:title',
					content: title,
				},
				{
					key: 'og:description',
					name: 'og:description',
					content: description,
				},
				{
					key: 'twitter:description',
					name: 'twitter:description',
					content: description,
				},
			],
		};
	},
};
</script>
