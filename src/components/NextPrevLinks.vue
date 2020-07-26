<template>
	<div>
		<div class="flex flex-col items-center justify-between sm:flex-row">
			<g-link
				v-if="prev"
				:to="prev.path"
				:class="[
					'px-4 py-2',
					'flex items-center',
					'rounded-lg',
					'font-bold',
					'text-on-button bg-button',
					'hover:text-on-button-hover',
					'transition-colors duration-200',
				]"
			>
				<icon :icon="icons.leftArrow" class="mr-2 text-2xl" />
				{{ prev.title }}
			</g-link>

			<g-link
				v-if="next"
				:to="next.path"
				:class="[
					'px-4 py-2',
					'flex items-center',
					'rounded-lg',
					'font-bold',
					'text-on-button bg-button',
					'hover:text-on-button-hover',
					'transition-colors duration-200',
				]"
			>
				{{ next.title }}
				<icon :icon="icons.rightArrow" class="ml-2 text-2xl" />
			</g-link>
		</div>
	</div>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons';
import Icon from '@iconify/vue';
import leftArrow from '@iconify/icons-bx/bx-left-arrow-alt';
import rightArrow from '@iconify/icons-bx/bx-right-arrow-alt';

export default {
	components: {
		Icon,
	},

	data: () => ({
		icons: { leftArrow, rightArrow },
	}),

	computed: {
		page() {
			return this.$page.markdownPage;
		},
		pages() {
			return this.$page.allMarkdownPage.edges.map((edge) => edge.node);
		},
		next() {
			if (this.pages && !this.page.next) {
				return false;
			}

			return this.pages.find((page) => page.path === this.page.next);
		},
		prev() {
			if (this.pages && !this.page.prev) {
				return false;
			}

			return this.pages.find((page) => page.path === this.page.prev);
		},
	},
};
</script>
