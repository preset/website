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
		<site-header
			:class="[
				'fixed z-10 w-full',
				'py-6',
				'transition-colors duration-200',
				'bg-background text-on-background',
				'border-t-2 border-brand',
			]"
		/>

		<div class="container flex flex-col flex-1 mx-auto mt-32 md:px-4 md:flex-row">
			<slot />
		</div>

		<site-footer />
	</main>
</template>

<static-query>
query {
  metadata {
    siteName
		longDescription
  }
}
</static-query>

<script>
import SiteHeader from '@/components/Header';
import SiteFooter from '@/components/Footer';
import Icon from '@/components/Icon';

export default {
	components: {
		SiteHeader,
		SiteFooter,
		Icon,
	},

	metaInfo() {
		const title = this.$static.metadata.siteName;
		const description = this.$static.metadata.longDescription;

		return {
			meta: [
				{
					key: 'description',
					name: 'description',
					content: description,
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
