<template>
	<Layout>
		<div class="pt-8 md:pt-16">
			<h1 class="text-center font-bold text-4xl text-brand">
				Oh no! There is nothing here.
			</h1>
		</div>
		<div class="mb-10 flex items-center justify-center">
			<g-link to="/" class="font-bold border-b border-brand text-xl"
				>Go back</g-link
			>.
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: '404 - Nothing here',
	},
};
</script>
