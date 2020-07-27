<template>
	<layout>
		Todo
	</layout>
</template>

<script>
import Layout from '~/layouts/Site.vue';

export default {
	components: {
		Layout,
	},

	metaInfo() {
		return {
			title: 'Preset',
			titleTemplate: '%s',
		};
	},
};
</script>
