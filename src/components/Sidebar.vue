<template>
	<div ref="sidebar" v-if="showSidebar" class="px-4 pt-8 lg:pt-12">
		<div v-for="section in sidebar.sections" :key="section.title" class="pb-4 mb-4">
			<h1 class="mb-2 text-sm font-bold tracking-tight uppercase text-on-sidebar-header">
				{{ section.title }}
			</h1>

			<ul class="max-w-full mb-0 -ml-3">
				<li
					v-for="page in findPages(section.items)"
					:id="page.path"
					:key="page.path"
					:class="getClassesForAnchor(page)"
					@mousedown="$emit('navigate')"
				>
					<g-link
						:to="`${page.path}`"
						:class="[
							'flex items-center',
							'py-1 px-3 mb-1 rounded',
							'font-medium',
							'text-on-sidebar hover:text-on-sidebar-hover',
							'focus:outline-none focus:shadow-focus',
							'transition-colors duration-200',
							...(currentPage.path === page.path
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

<static-query>
query Sidebar {
  metadata {
    settings {
      sidebar {
        name
        sections {
          title
          items
        }
      }
    }
  }
}
</static-query>

<script>
export default {
	data() {
		return {
			expanded: [],
		};
	},
	computed: {
		pages() {
			return this.$page.allMarkdownPage.edges.map((edge) => edge.node);
		},
		sidebar() {
			return this.$static.metadata.settings.sidebar.find((sidebar) => sidebar.name === this.$page.markdownPage.sidebar);
		},
		showSidebar() {
			return this.$page.markdownPage.sidebar && this.sidebar;
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
		findPages(links) {
			return links.map((link) => this.pages.find((page) => page.path === link));
		},
	},
};
</script>
