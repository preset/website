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

		<div class="container flex flex-col flex-1 mx-auto mt-32 mb-40 md:px-4 md:flex-row">
			<slot />
		</div>
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
import SiteHeader from '@/components/site/Header';
import Icon from '@/components/Icon';

export default {
	components: {
		SiteHeader,
		Icon,
	},
};
</script>
