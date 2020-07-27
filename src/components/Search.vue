<template>
	<div @keydown.down="increment" @keydown.up="decrement" @keydown.enter="go" class="relative">
		<label class="relative block">
			<span class="sr-only">Search the documentation</span>
			<div class="absolute inset-y-0 left-0 flex items-center justify-center px-4 py-2 opacity-50">
				<icon :icon="icons.search" class="text-xl text-on-background" />
			</div>
			<input
				ref="input"
				type="text"
				:value="query"
				:class="[
					...[showResult ? 'sm:rounded-b-none shadow-md' : []],
					'block w-full',
					'py-3 pl-12 pr-4',
					'rounded-lg',
					'bg-navigation text-on-navigation',
					'transition-colors duration-100',
				]"
				placeholder="Search the documentation (Ctrl + K)"
				@focus="focused = true"
				@blur="focused = false"
				@input="
					focusIndex = -1;
					query = $event.target.value;
				"
				@change="query = $event.target.value"
			/>
		</label>
		<nav
			v-if="showResult"
			style="max-height: calc(100vh - 95px)"
			:class="[
				'results',
				'fixed z-50 inset-x-0 bottom-0',
				'overflox-y-auto',
				'shadow-md rounded-md rounded-t-none',
				'bg-navigation text-on-navigation',
				'sm:bottom-auto sm:absolute',
			]"
		>
			<ul class="px-4 py-0 m-0" :class="{ 'py-4': results.length === 0 }">
				<li v-if="results.length === 0" class="px-2">
					<span v-if="query.length === 0">Type something to search the documentation.</span>
					<span v-else>
						No results for
						<span class="font-medium text-brand">{{ query }}</span>
						<span>.</span>
					</span>
				</li>

				<li
					v-else
					v-for="(result, index) in results"
					:key="result.path + result.anchor"
					@mouseenter="focusIndex = index"
					@mousedown="go"
					class="transition-none border-on-navigation-muted"
					:class="{
						'border-b': index + 1 !== results.length,
					}"
				>
					<g-link
						:to="result.path + result.anchor"
						:class="[
							...[focusIndex === index ? 'bg-navigation-hover text-brand' : []],
							'transition-none',
							'rounded block px-3 py-2 my-2 -mx-2',
							'text-base font-bold',
						]"
					>
						<span v-if="result.value === result.title" class="transition-none">
							{{ result.value }}
						</span>

						<span v-else class="flex items-center transition-none">
							{{ result.title }}
							<icon :icon="icons.chevronRight" class="mx-2 text-2xl transition-none" />
							<span class="font-normal opacity-75">{{ result.value }}</span>
						</span>
					</g-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<static-query>
query Search {
   allMarkdownPage{
    edges {
      node {
        id
        path
        title
        headings {
        	depth
          value
          anchor
      	}
      }
    }
  }
}
</static-query>

<script>
import Fuse from 'fuse.js';
import Icon from '@iconify/vue';
import search from '@iconify/icons-bx/bx-search';
import chevronRight from '@iconify/icons-bx/bx-chevron-right';

export default {
	components: {
		Icon,
	},

	data: () => ({
		query: '',
		focusIndex: -1,
		focused: false,
		icons: {
			search,
			chevronRight,
		},
	}),

	computed: {
		results() {
			const fuse = new Fuse(this.headings, {
				keys: ['value'],
				threshold: 0.25,
			});

			return fuse.search(this.query).slice(0, 15);
		},
		headings() {
			let result = [];
			const allPages = this.$static.allMarkdownPage.edges.map((edge) => edge.node);

			// Create the array of all headings of all pages.
			allPages.forEach((page) => {
				page.headings.forEach((heading) => {
					result.push({
						...heading,
						path: page.path,
						title: page.title,
					});
				});
			});

			return result;
		},
		showResult() {
			// Show results, if the input is focused and the query is not empty.
			return this.focused && this.query.length > 0;
		},
	},
	methods: {
		increment() {
			if (this.focusIndex < this.results.length - 1) {
				this.focusIndex++;
			}
		},
		decrement() {
			if (this.focusIndex >= 0) {
				this.focusIndex--;
			}
		},
		go() {
			// Do nothing if we don't have results.
			if (this.results.length === 0) {
				return;
			}

			let result;

			// If we don't have focus on a result, just navigate to the first one.
			if (this.focusIndex === -1) {
				result = this.results[0];
			} else {
				result = this.results[this.focusIndex];
			}

			this.$router.push(result.path + result.anchor);

			// Unfocus the input and reset the query.
			this.$refs.input.blur();
			this.query = '';
		},
	},
};
</script>
