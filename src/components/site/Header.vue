<template>
	<div class="py-6 transition-colors duration-200 border-t-2 border-brand bg-background text-on-background">
		<div class="container">
			<div class="flex items-center">
				<div class="flex flex-col items-center px-2 sm:px-4 sm:flex-row">
					<g-link to="/" class="flex items-center py-2 rounded text-brand" title="Home">
						<logo :width="30" class="text-brand" />
						<span class="hidden mx-2 text-xl font-bold tracking-tighter lowercase sm:block">
							{{ meta.siteName }}
						</span>
					</g-link>
				</div>

				<div class="flex flex-grow">
					<div class="flex justify-center flex-grow sm:px-4">
						<ClientOnly>
							<Search class="w-full max-w-2xl mx-4" />
						</ClientOnly>
					</div>

					<ul class="flex">
						<li class="flex items-center justify-center">
							<a
								v-if="settings.twitter"
								class="nav-button"
								:href="settings.twitter.url"
								:title="settings.twitter.title"
								:name="settings.twitter.name"
							>
								<icon icon="twitter" class="w-8 h-8" />
							</a>
						</li>
						<li class="flex items-center justify-center">
							<a
								v-if="settings.github"
								class="nav-button"
								:href="settings.github.url"
								:title="settings.github.title"
								:name="settings.github.name"
							>
								<icon icon="github" class="w-8 h-8" />
							</a>
						</li>
						<li class="flex items-center justify-center">
							<theme-manager class="nav-button">
								<template slot="default" slot-scope="{ dark, light }">
									<icon v-if="dark" icon="dark" class="w-8 h-8" />
									<icon v-if="light" icon="light" class="w-8 h-8" />
								</template>
							</theme-manager>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      github { url, name, title }
      twitter { url, name, title }
    }
  }
}
</static-query>

<script>
import ThemeManager from '@/components/ThemeManager';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';

const Search = () =>
	import(/* webpackChunkName: "search" */ '@/components/Search').catch((error) => console.warn(error));

export default {
	components: {
		Logo,
		Search,
		ThemeManager,
		Icon,
	},

	computed: {
		meta() {
			return this.$static.metadata;
		},
		settings() {
			return this.meta.settings;
		},
	},
};
</script>

<style lang="postcss" scoped>
.nav-button {
	@apply rounded px-2 py-2;
	@apply transition-colors duration-200;
	@apply text-on-navigation-icon;

	&:hover {
		@apply bg-navigation-hover text-brand;
	}

	&:focus {
		@apply outline-none bg-navigation-hover shadow-focus;
	}
}
</style>
