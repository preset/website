<template>
	<div>
		<div class="container flex items-center justify-between px-8 mx-auto">
			<div class="hidden w-1/5 lg:flex">
				<g-link to="/" class="flex items-center py-2 rounded text-brand" title="Home">
					<logo :width="30" class="text-brand" />
					<span class="hidden mx-2 text-xl font-bold tracking-tighter lowercase sm:block">
						{{ meta.siteName }}
					</span>
				</g-link>
			</div>

			<div
				:class="[
					//
					'ml-4',
					'flex items-center justify-center',
					'flex-1 order-2',
					'md:order-1 md:ml-0',
				]"
			>
				<ClientOnly>
					<Search class="w-full max-w-2xl md:mx-4" />
				</ClientOnly>
			</div>

			<ul class="flex justify-end order-1 space-x-1 md:w-1/5 md:order-2">
				<li class="flex items-center justify-center">
					<a
						v-if="settings.twitter"
						class="header-button"
						:href="settings.twitter.url"
						:title="settings.twitter.title"
						:name="settings.twitter.name"
					>
						<icon icon="twitter" class="w-6 h-6" />
					</a>
				</li>
				<li class="flex items-center justify-center">
					<a
						v-if="settings.github"
						class="header-button"
						:href="settings.github.url"
						:title="settings.github.title"
						:name="settings.github.name"
					>
						<icon icon="github" class="w-6 h-6" />
					</a>
				</li>
				<li class="flex items-center justify-center">
					<theme-manager class="header-button">
						<template slot="default" slot-scope="{ dark, light }">
							<icon v-if="dark" icon="dark" class="w-6 h-6" />
							<icon v-if="light" icon="light" class="w-6 h-6" />
						</template>
					</theme-manager>
				</li>
			</ul>
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
.header-button {
	@apply rounded p-2;
	@apply transition-all duration-200;
	@apply bg-background text-on-navigation-icon;
	@apply flex items-center justify-center;

	&:hover {
		@apply text-brand bg-navigation-hover;
	}

	&:focus {
		@apply outline-none bg-navigation-hover shadow-focus;
	}
}
</style>
