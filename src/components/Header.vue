<template>
	<header>
		<div class="container flex justify-between px-8 mx-auto sm:px-4">
			<!-- Logo -->
			<div class="flex">
				<g-link to="/" class="flex items-center py-2 mr-4 rounded text-brand" title="Home">
					<logo :width="30" class="text-brand" />
					<span class="mx-2 text-xl font-bold tracking-tighter lowercase">
						{{ meta.siteName }}
					</span>
				</g-link>
			</div>

			<!-- Search and navigation -->
			<div class="relative flex justify-end md:w-2/3">
				<!-- Search -->
				<div class="w-full max-w-md md:mr-6">
					<ClientOnly>
						<Search placeholder="Search (Ctrl + K)" />
					</ClientOnly>
				</div>

				<!-- Open button -->
				<button class="ml-4 header-button md:hidden" @click="toggleNavigation">
					<icon icon="menu" class="w-6 h-6 mx-1" />
				</button>

				<!-- Navigation -->
				<nav
					:class="[
						'absolute top-0 right-0',
						'flex',
						'transition-all duration-200',
						'transform -translate-x-1 translate-y-16',
						'opacity-0',
						'md:static md:opacity-100 md:transform-none',
						isNavigationOpen ? 'opacity-100' : '',
					]"
				>
					<ul class="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
						<li
							:class="[
								'flex items-center justify-center',
								'transform transition-transform duration-200',
								'md:transform-none md:pointer-events-auto',
								isNavigationOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none',
							]"
							v-for="link in links"
							:key="link.id"
						>
							<a class="header-button" :href="link.url" :title="link.title" :name="link.name">
								<icon :icon="link.icon" class="w-6 h-6" />
							</a>
						</li>
						<li
							:class="[
								'flex items-center justify-center',
								'transform transition-transform duration-200',
								'md:transform-none md:pointer-events-auto',
								isNavigationOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none',
							]"
						>
							<theme-manager class="header-button">
								<template slot="default" slot-scope="{ dark, light }">
									<icon v-if="dark" icon="dark" class="w-6 h-6" />
									<icon v-if="light" icon="light" class="w-6 h-6" />
								</template>
							</theme-manager>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
			links {
				id,
				url, 
				name, 
				title, 
				icon
			}
    }
  }
}
</static-query>

<script>
import ThemeManager from '@/components/ThemeManager';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

const Search = () =>
	import(/* webpackChunkName: "search" */ '@/components/Search').catch((error) => console.warn(error));

export default {
	components: {
		Logo,
		Search,
		ThemeManager,
		Icon,
	},

	data: () => ({
		isNavigationOpen: false,
	}),

	computed: {
		meta() {
			return this.$static.metadata;
		},
		links() {
			return this.meta.settings.links;
		},
	},

	methods: {
		toggleNavigation() {
			this.isNavigationOpen = !this.isNavigationOpen;
		},
	},
};
</script>

<style lang="postcss" scoped>
.header-button {
	@apply rounded p-2;
	@apply transition-colors duration-200;
	@apply bg-background text-on-navigation-icon;

	&:hover {
		@apply bg-navigation-hover;
	}

	&:focus {
		@apply outline-none bg-navigation-hover shadow-focus;
	}
}
</style>
