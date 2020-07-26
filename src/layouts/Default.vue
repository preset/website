<template>
	<div class="font-sans antialiased transition-colors duration-200 bg-background text-on-background">
		<div class="flex flex-col justify-start min-h-screen">
			<!-- Header -->
			<header ref="header" class="sticky top-0 z-10 w-full bg-background" @resize="setHeaderHeight">
				<layout-header />
			</header>

			<!-- Main layout -->
			<main
				role="main"
				:class="[
					'px-6 sm:px-0',
					'container w-full',
					'relative',
					'flex flex-wrap justify-start flex-1',
					'transition-colors duration-200',
					'bg-background text-on-background',
				]"
			>
				<!-- Sidebar -->
				<aside
					v-if="hasSidebar"
					class="fixed"
					:style="sidebarStyle"
					:class="[
						'fixed px-4 inset-x-0 bottom-0 w-full overflow-y-auto transition-all z-40',
						'text-on-background bg-background',
						'transition-all duration-200',
						'transform',
						'lg:w-3/12 lg:px-0 lg:top-0 lg:bottom-auto lg:inset-x-auto lg:sticky lg:z-0 lg:translate-x-0',
						sidebarOpen ? 'translate-x-0' : '-translate-x-full',
					]"
				>
					<div
						:class="[
							'w-full pb-16',
							'transition-colors duration-200',
							'md:w-3/4 md:mx-auto lg:w-full',
							'bg-background text-on-background',
						]"
					>
						<sidebar @navigate="sidebarOpen = false" />
					</div>
				</aside>

				<!-- Content -->
				<div class="w-full pb-24" :class="{ 'pl-0 lg:pl-12 lg:w-3/4': hasSidebar }">
					<slot />
				</div>
			</main>
		</div>

		<!-- Mobile sidebar button -->
		<div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
			<button
				class="p-0 rounded-full shadow-md bg-navigation text-on-navigation"
				:class="[
					'p-3 rounded-full shadow-md',
					'bg-navigation text-on-navigation',
					'focus:outline-none focus:shadow-focus',
				]"
				@click="sidebarOpen = !sidebarOpen"
			>
				<icon v-if="sidebarOpen" :icon="icons.cross" class="text-2xl" />
				<icon v-else :icon="icons.menu" class="text-2xl" />
			</button>
		</div>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from '@/components/Sidebar';
import LayoutHeader from '@/components/LayoutHeader';
import Icon from '@iconify/vue';
import menu from '@iconify/icons-bx/bx-menu';
import cross from '@iconify/icons-bx/bx-x';

export default {
	components: {
		Icon,
		Sidebar,
		LayoutHeader,
	},
	data() {
		return {
			headerHeight: 0,
			sidebarOpen: false,
			icons: {
				menu,
				cross,
			},
		};
	},
	watch: {
		sidebarOpen: function(isOpen) {
			document.body.classList.toggle('overflow-hidden', isOpen);
		},
	},
	methods: {
		setHeaderHeight() {
			this.$nextTick(() => {
				this.headerHeight = this.$refs.header.offsetHeight;
			});
		},
	},
	computed: {
		sidebarStyle() {
			return {
				top: this.headerHeight + 'px',
				height: `calc(100vh - ${this.headerHeight}px)`,
			};
		},
		hasSidebar() {
			return this.$page && this.headerHeight > 0;
		},
	},
	mounted() {
		this.setHeaderHeight();
	},
	metaInfo() {
		return {
			meta: [
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com/',
					crossorigin: true,
				},
				{
					key: 'og:type',
					name: 'og:type',
					content: 'website',
				},
				{
					key: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					key: 'og:image',
					name: 'og:image',
					content: process.env.SITE_URL + '/logo.jpg',
				},
				{
					key: 'twitter:image',
					name: 'twitter:image',
					content: process.env.SITE_URL + '/logo.jpg',
				},
			],
		};
	},
};
</script>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@font-face {
	font-family: 'Inter var';
	font-weight: 100 900;
	font-style: normal;
	font-named-instance: 'Regular';
	font-display: swap;
	src: url('https://rsms.me/inter/font-files/Inter.var.woff2?3.13') format('woff2');
}

@font-face {
	font-family: 'Inter var';
	font-weight: 100 900;
	font-style: italic;
	font-named-instance: 'Italic';
	font-display: swap;
	src: url('https://rsms.me/inter/font-files/Inter-italic.var.woff2?3.13') format('woff2');
}

:root {
	font-size: 15px;
}

@screen lg {
	font-size: 16px;
}

:focus {
	@apply outline-none shadow-focus;
}
</style>
