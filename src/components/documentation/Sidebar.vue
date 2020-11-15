<template>
	<div ref="sidebar">
		<div class="flex mb-12 lg:hidden">
			<g-link to="/" class="flex items-center py-2 rounded text-brand" title="Home">
				<logo :width="30" class="text-brand" />
				<span class="mx-2 text-3xl font-bold tracking-tighter lowercase">
					{{ $static.metadata.siteName }}
				</span>
			</g-link>
		</div>

		<div v-for="(category, id) in categories" :key="id" class="pb-4 mb-4">
			<h1 class="mb-4 text-sm font-bold tracking-tight uppercase lg:mb-2 text-on-sidebar-header" v-if="!category.hide">
				{{ category.name }}
			</h1>

			<ul class="max-w-full mb-0 lg:-ml-3">
				<li
					v-for="page in category.links"
					:id="page.path"
					:key="page.path"
					:class="getClassesForAnchor(page)"
					@mousedown="$emit('navigate')"
				>
					<g-link
						:to="`${page.path}`"
						:class="[
							'flex items-center',
							'py-2 px-3 mb-1 rounded',
							'font-medium',
							'text-on-sidebar hover:text-on-sidebar-hover',
							'focus:outline-none focus:shadow-none focus:text-on-sidebar-hover focus-visible:shadow-focus',
							'transition-colors duration-200',
							'lg:py-1',
							...(page.current
								? [
										//
										'bg-sidebar-active',
										'text-on-sidebar-active',
								  ]
								: []),
						]"
					>
						{{ page.title }}
					</g-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

export default {
	components: { Icon, Logo },

	data: () => ({
		expanded: [],
	}),

	computed: {
		categories() {
			// Gets the order and name of a category from a node.
			const categoryFromNode = (node) => {
				const [_, order, name] = node.fileInfo.directory.match(/docs\/(\d{2})-(.*)/);
				return {
					directory: node.fileInfo.directory,
					order,
					name,
				};
			};

			// Gets the unique categories and sort them by order.
			const categories = this.$static.allMarkdownPage.edges
				.filter(({ node }, index, self) => self.findIndex(({ node: _ }) => _.fileInfo.directory === node.fileInfo.directory) === index)
				.map(({ node }) => ({
					...categoryFromNode(node),
					links: [],
				}))
				.sort((a, b) => (a.order < b.order ? -1 : a.order > b.order ? 1 : 0));

			// For each page, adds it to its category.
			this.$static.allMarkdownPage.edges.forEach(({ node }) => {
				categories
					.find(({ name }) => name === categoryFromNode(node).name)
					.links.push({
						order: node.fileInfo.name.split('-').shift(),
						title: node.title,
						path: node.path,
						current: node.path.includes(this.$page.markdownPage.path),
					});
			});

			// Sorts each individual links.
			categories.forEach(({ links }) => links.sort((a, b) => (a.order < b.order ? -1 : a.order > b.order ? 1 : 0)));

			return categories;
		},
		currentPage() {
			return this.$page.markdownPage;
		},
	},

	methods: {
		getClassesForAnchor({ path }) {
			return {
				'text-brand': this.currentPage.path === path,
				'transition transform hover:translate-x-1 hover:text-brand': !this.currentPage.path === path,
			};
		},
	},
};
</script>

<static-query>
query Sidebar {
  metadata {
		siteName,
  }
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
