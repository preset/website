<template>
	<div ref="sidebar" v-if="showSidebar">
		<div class="flex mb-12 lg:hidden">
			<g-link to="/" class="flex items-center py-2 rounded text-brand" title="Home">
				<logo :width="30" class="text-brand" />
				<span class="mx-2 text-3xl font-bold tracking-tighter lowercase">
					{{ $static.metadata.siteName }}
				</span>
			</g-link>
		</div>

		<div v-for="section in sidebar.sections" :key="section.id" class="pb-4 mb-4">
			<h1 class="mb-4 text-sm font-bold tracking-tight uppercase lg:mb-2 text-on-sidebar-header" v-if="section.title">
				{{ section.title }}
			</h1>

			<ul class="max-w-full mb-0 lg:-ml-3">
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
							'py-2 px-3 mb-1 rounded',
							'font-medium',
							'text-on-sidebar hover:text-on-sidebar-hover',
							'focus:outline-none focus:shadow-none focus:text-on-sidebar-hover focus-visible:shadow-focus',
							'transition-colors duration-200',
							'lg:py-1',
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

<script>
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

export default {
	components: { Icon, Logo },

	data: () => ({
		expanded: [],
	}),

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

<static-query>
query Sidebar {
  metadata {
		siteName,
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
