<template>
	<div>
		<div class="flex flex-col justify-between sm:flex-row">
			<div>
				<g-link
					v-if="prev"
					:to="prev.path"
					:class="[
						'w-full px-4 py-2 mb-4 sm:mb-0',
						'flex items-center justify-center sm:justify-start',
						'rounded-lg',
						'font-bold',
						'text-on-button bg-button',
						'hover:text-on-button-hover',
						'transition-colors duration-200',
					]"
				>
					<icon icon="leftArrow" class="mr-2 text-2xl" />
					{{ prev.title }}
				</g-link>
			</div>

			<div>
				<g-link
					v-if="next"
					style="place-self: end"
					:to="next.path"
					:class="[
						'w-full px-4 py-2',
						'flex items-center justify-center sm:justify-start',
						'rounded-lg',
						'font-bold',
						'text-on-button bg-button',
						'hover:text-on-button-hover',
						'transition-colors duration-200',
					]"
				>
					{{ next.title }}
					<icon icon="rightArrow" class="ml-2 text-2xl" />
				</g-link>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from '@iconify/vue';

export default {
	components: {
		Icon,
	},

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
