<template>
	<div class="mt-8 sm:pl-4 md:pl-6 md:pt-12 lg:pl-8 sm:pb-16 md:mt-0">
		<h1 class="mb-2 text-sm font-bold tracking-tight uppercase text-on-sidebar-header">
			On this page
		</h1>
		<div>
			<ul>
				<li
					v-for="heading in headings"
					:key="`${page.path}${heading.anchor}`"
					class="text-on-sidebar-header"
					:class="{
						'font-medium': heading.depth === 2,
						[`depth-${heading.depth}`]: true,
					}"
				>
					<g-link
						:to="`${page.path}${heading.anchor}`"
						:class="[
							'relative',
							'py-1',
							'rounded text-sm',
							'flex items-center',
							'transition-all duration-200',
							'transform hover:translate-x-1',
							'focus:shadow-none focus:text-on-sidebar',
							heading.depth === 3 ? 'pl-2' : '',
							heading.depth === 4 ? 'pl-3' : '',
							heading.depth === 5 ? 'pl-4' : '',
							heading.depth === 6 ? 'pl-5' : '',
							activeAnchor === heading.anchor ? 'font-bold text-brand' : '',
						]"
					>
						{{ heading.value }}
					</g-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeAnchor: '',
			observer: null,
		};
	},

	computed: {
		page() {
			return this.$page.markdownPage;
		},
		headings() {
			return this.page.headings.filter((h) => h.depth > 1);
		},
	},

	watch: {
		$route: function() {
			if (process.isClient && window.location.hash) {
				this.activeAnchor = window.location.hash;
			}

			// Clear the current observer.
			this.observer.disconnect();

			// And create another one for the next page.
			this.$nextTick(this.initObserver);
		},
	},

	methods: {
		observerCallback(entries, observer) {
			// This early return fixes the jumping
			// of the bubble active state when we click on a link.
			// There should be only one intersecting element anyways.
			if (entries.length > 1) {
				return;
			}

			const id = entries[0].target.id;

			// We want to give the link of the intersecting
			// headline active and add the hash to the url.
			if (id) {
				this.activeAnchor = '#' + id;

				if (history.replaceState) {
					history.replaceState(null, null, '#' + id);
				}
			}
		},

		initObserver() {
			this.observer = new IntersectionObserver(this.observerCallback, {
				// This rootMargin should allow intersections at the top of the page.
				rootMargin: '0px 0px 99999px',
				threshold: 1,
			});

			const elements = document.querySelectorAll('.content h2, .content h3, .content h4, .content h5, .content h6');

			for (let i = 0; i < elements.length; i++) {
				this.observer.observe(elements[i]);
			}
		},
	},

	mounted() {
		if (process.isClient) {
			if (window.location.hash) {
				this.activeAnchor = window.location.hash;
			}
			this.$nextTick(this.initObserver);
		}
	},
};
</script>
