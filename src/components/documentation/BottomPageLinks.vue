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
		links() {
			return this.categories.map(({ links }) => links).flat();
		},
		indexOfCurrent() {
			return this.links.findIndex(({ current }) => current === true);
		},
		next() {
			if (this.links.length > this.indexOfCurrent) {
				return this.links[this.indexOfCurrent + 1];
			}
		},
		prev() {
			if (0 <= this.indexOfCurrent - 1) {
				return this.links[this.indexOfCurrent - 1];
			}
		},
	},
};
</script>

<static-query>
query Sidebar {
	allMarkdownPage {
    edges {
      node {
        path
        title
        fileInfo {
          name
          path
          directory
        }
      }
    }
  }
}
</static-query>
