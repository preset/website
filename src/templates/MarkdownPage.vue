<template>
	<documentation-layout>
		<section class="flex flex-col flex-wrap items-start justify-start w-full px-8 lg:pl-0 md:flex-row">
			<div class="order-1 w-full md:pr-16 md:w-3/4">
				<div class="lg:pl-8 xl:pl-16">
					<article class="prose prose-dark lg:prose-lg " v-html="$page.markdownPage.content" />

					<div class="mt-12">
						<!-- <bottom-page-links /> -->
					</div>
				</div>
			</div>

			<on-this-page class="order-2 w-full mt-16 md:sticky md:w-1/4 md:top-18 md:mt-0" />
		</section>
	</documentation-layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    timeToRead
    content
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import DocumentationLayout from '@/layouts/Documentation';
// import BottomPageLinks from '@/components/documentation/BottomPageLinks';
import OnThisPage from '@/components/documentation/OnThisPage';
import zoom from 'medium-zoom';

export default {
	components: {
		DocumentationLayout,
		// BottomPageLinks,
		OnThisPage,
	},

	mounted() {
		this.$nextTick(this.initializeZoom());
	},

	watch: {
		$route: function() {
			this.$nextTick(this.initializeZoom);
		},
	},

	methods: {
		initializeZoom() {
			zoom('.prose img', {
				background: 'rgba(0, 0, 0, .5)',
				container: {
					top: 100,
					bottom: 100,
				},
			});
		},
	},

	metaInfo() {
		const title = this.$page.markdownPage.title;
		const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

		return {
			title: title,
			meta: [
				{
					key: 'description',
					name: 'description',
					content: description,
				},
				{
					key: 'og:title',
					name: 'og:title',
					content: title,
				},
				{
					key: 'twitter:title',
					name: 'twitter:title',
					content: title,
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

<style>
@import '~prism-themes/themes/prism-material-oceanic.css';

h1,
h2,
h3,
h4 {
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
			@apply text-brand-muted absolute opacity-0 float-left;
		}
	}
}
</style>
