<template>
	<div class="font-sans antialiased text-on-background bg-background">
		<div class="flex flex-col justify-start min-h-screen">
			<header
				ref="header"
				class="sticky top-0 z-10 w-full border-b bg-background border-border"
				@resize="setHeaderHeight"
			>
				<LayoutHeader />
			</header>

			<main
				class="container relative flex flex-wrap justify-start flex-1 w-full bg-background"
			>
				<aside
					v-if="hasSidebar"
					class="sidebar"
					:class="{ open: sidebarOpen }"
					:style="sidebarStyle"
				>
					<div class="w-full pb-16 bg-background">
						<Sidebar @navigate="sidebarOpen = false" />
					</div>
				</aside>

				<div
					class="w-full pb-24"
					:class="{ 'pl-0 lg:pl-12 lg:w-3/4': hasSidebar }"
				>
					<slot />
				</div>
			</main>
		</div>

		<div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
			<button
				class="p-3 text-white rounded-full shadow-lg bg-brand hover:text-white"
				@click="sidebarOpen = !sidebarOpen"
			>
				<XIcon v-if="sidebarOpen" />
				<MenuIcon v-else />
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
import { MenuIcon, XIcon } from 'vue-feather-icons';

export default {
	components: {
		Sidebar,
		LayoutHeader,
		MenuIcon,
		XIcon,
	},
	data() {
		return {
			headerHeight: 0,
			sidebarOpen: false,
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
* {
	transition-property: color, background-color, border-color;
	transition-duration: 200ms;
	transition-timing-function: ease-in-out;
}

h1,
h2,
h3,
h4 {
	@apply leading-snug font-black mb-4 text-on-background;

	&:hover {
		a::before {
			@apply opacity-100;
		}
	}

	a {
		&::before {
			content: '#';
			margin-left: -1em;
			padding-right: 1em;
			@apply text-brand absolute opacity-0 float-left;
		}
	}
}

h1 {
	@apply text-4xl;
}

h2 {
	@apply text-2xl;
}

h3 {
	@apply text-xl;
}

h4 {
	@apply text-lg;
}

a:not(.active):not(.text-brand):not(.text-white) {
	@apply text-on-background;
}

p,
ol,
ul,
pre,
strong,
blockquote {
	@apply mb-4 text-base text-on-background;
}

.content {
	a {
		@apply text-brand underline;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply -mt-12 pt-20;
	}

	h2 + h3,
	h2 + h2,
	h3 + h3 {
		@apply border-none -mt-20;
	}

	h2,
	h3 {
		@apply border-b border-border pb-1 mb-3;
	}

	ul {
		@apply list-disc;

		ul {
			list-style: circle;
		}
	}

	ol {
		@apply list-decimal;
	}

	ol,
	ul {
		@apply pl-5 py-1;

		li {
			@apply mb-2;

			p {
				@apply mb-0;
			}

			&:last-child {
				@apply mb-0;
			}
		}
	}
}

blockquote {
	@apply border-l-4 border-border py-2 pl-4;

	p:last-child {
		@apply mb-0;
	}
}

code {
	@apply px-1 py-1 text-on-background bg-sidebar font-mono border-b border-r border-border text-sm rounded;
}

pre[class*='language-'] {
	@apply max-w-full overflow-x-auto rounded;

	& + p {
		@apply mt-4;
	}

	& > code[class*='language-'] {
		@apply border-none leading-relaxed;
	}
}

header {
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(4px);
}

table {
	@apply text-left mb-6;

	td,
	th {
		@apply py-3 px-4;
		&:first-child {
			@apply pl-0;
		}
		&:last-child {
			@apply pr-0;
		}
	}

	tr {
		@apply border-b border-border;
		&:last-child {
			@apply border-b-0;
		}
	}
}

.sidebar {
	@apply fixed bg-background px-4 inset-x-0 bottom-0 w-full border-r border-border overflow-y-auto transition-all z-40;
	transform: translateX(-100%);

	&.open {
		transform: translateX(0);
	}

	@screen lg {
		@apply w-1/4 px-0 top-0 bottom-auto inset-x-auto sticky z-0;
		transform: translateX(0);
	}
}
</style>
