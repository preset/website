<template>
	<main
		role="main"
		:class="[
			'font-sans antialiased',
			'transition-colors duration-200',
			'bg-background text-on-background',
			'flex flex-col min-h-screen h-full',
		]"
	>
		<documentation-header
			:class="[
				'fixed z-10 w-full',
				'py-6',
				'transition-colors duration-200',
				'bg-background text-on-background',
				'border-t-2 border-brand',
			]"
		/>

		<div class="container flex flex-col flex-1 mx-auto mt-32 mb-40 md:px-4 md:flex-row">
			<documentation-sidebar
				:class="[
					'w-full p-12',
					'fixed inset-0 z-40',
					'transition-transform duration-300 ease-in-out',
					'transform',
					'text-on-background bg-background',
					'border-t-2 border-brand',
					'md:p-8 sm:w-sidebar shadow-md',
					'lg:border-none',
					'lg:bg-transparent',
					'lg:p-0 lg:mx-0 lg:pl-8 ',
					'lg:static lg:translate-x-0 lg:z-0',
					'lg:shadow-none',
					'xl:w-1/5 xl:pl-0',
					sidebarOpen ? 'translate-x-0' : '-translate-x-full',
				]"
			/>
			<slot />
		</div>

		<!-- Mobile sidebar button -->
		<button
			:class="[
				'fixed bottom-0 right-0 z-50',
				'p-3 mb-10 mr-10',
				'rounded-full',
				'bg-navigation text-on-navigation',
				'lg:hidden',
				'focus:outline-none focus:shadow-focus',
			]"
			@click="sidebarOpen = !sidebarOpen"
		>
			<icon icon="close" class="w-6 h-6" v-if="sidebarOpen" />
			<icon icon="menu" class="w-6 h-6" v-else />
		</button>

		<!-- Footer -->
		<documentation-footer />
	</main>
</template>

<static-query>
query {
  metadata {
    siteName
		longDescription
  }
}
</static-query>

<script>
import DocumentationHeader from '@/components/Header';
import DocumentationFooter from '@/components/Footer';
import DocumentationSidebar from '@/components/documentation/Sidebar';
import Icon from '@/components/Icon';

export default {
	components: {
		DocumentationHeader,
		DocumentationFooter,
		DocumentationSidebar,
		Icon,
	},

	data: () => ({
		sidebarOpen: false,
	}),

	metaInfo() {
		const title = this.$static.metadata.siteName;
		const description = this.$static.metadata.longDescription;

		return {
			titleTemplate: '%s - Preset',
			meta: [
				{
					key: 'description',
					name: 'description',
					content: description,
				},
				{
					key: 'og:description',
					name: 'og:description',
					content: description,
				},
				{
					key: 'twitter:description',
					name: 'twitter:description',
					content: description,
				},
			],
		};
	},
};
</script>
