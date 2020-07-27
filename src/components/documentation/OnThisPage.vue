<template>
	<aside v-if="headings.length > 0">
		<h1 class="mb-2 text-sm font-bold tracking-tight uppercase text-on-sidebar-header">
			On this page
		</h1>
		<div>
			<ul class="on-this-page">
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
	</aside>
</template>

<script>
export default {
	data: () => ({
		activeAnchor: '',
		observer: null,
	}),

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
			this.$nextTick(this.registerSmoothScroll);
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

			const elements = document.querySelectorAll('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6');

			for (let i = 0; i < elements.length; i++) {
				this.observer.observe(elements[i]);
			}
		},

		registerSmoothScroll() {
			const links = document.querySelectorAll('.on-this-page a, .prose a[href^="#"]');

			for (const link of links) {
				link.addEventListener('click', (e) => {
					e.preventDefault();
					this.scrollTo(e.target.getAttribute('href'));
				});
			}
		},

		scrollTo(href) {
			if (!href.includes('#')) {
				return;
			}

			const [_, hash] = href.split('#');
			const offsetTop = document.querySelector(`#${hash}`).offsetTop;

			scroll({
				top: offsetTop - '120',
				behavior: 'smooth',
			});
		},
	},

	mounted() {
		if (process.isClient) {
			if (window.location.hash) {
				this.activeAnchor = window.location.hash;
				this.$nextTick(() => this.scrollTo(window.location.hash));
			}

			this.$nextTick(this.initObserver);
			this.$nextTick(this.registerSmoothScroll);
		}
	},
};
</script>
