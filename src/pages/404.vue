<template>
	<Layout>
		<div class="flex flex-col items-center justify-center w-full">
			<h1 class="text-6xl font-hairline">404</h1>
			<p class="text-xl text-on-background-blockquote">
				It seems that you have lost yourself.
			</p>
		</div>
	</Layout>
</template>

<script>
import Layout from '@/layouts/Site';

export default {
	components: { Layout },
	metaInfo: {
		title: '404',
	},
};
</script>
