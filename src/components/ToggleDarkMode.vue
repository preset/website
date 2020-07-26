<template>
	<button
		@click="toggleTheme"
		:title="isLightTheme ? 'Turn off the god damn light' : 'I wanna see how it looks like when it\'s bright'"
	>
		<slot :dark="isDark" :light="isLight" :theme="theme" :setTheme="setTheme" />
	</button>
</template>

<script>
export const THEME_KEY = 'theme';
export const DEFAULT_THEME = 'dark';

export default {
	data() {
		return {
			theme: DEFAULT_THEME,
		};
	},

	computed: {
		isDark() {
			return this.theme === 'dark';
		},
		isLight() {
			return this.theme === 'light';
		},
	},

	methods: {
		toggleTheme() {
			this.setTheme(this.isDark ? 'light' : this.isLight ? 'dark' : this.theme);
		},

		setTheme(theme) {
			this.writeToStorage(theme);
			this.theme = theme;

			document.querySelector('body').dataset.theme = theme;

			return theme;
		},

		detectPrefered() {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

			return prefersDark ? 'dark' : prefersLight ? 'light' : this.theme;
		},

		hasInStorage() {
			return Boolean(localStorage.getItem(THEME_KEY));
		},

		writeToStorage(themeName) {
			localStorage.setItem(THEME_KEY, themeName);
		},

		getFromStorage() {
			return localStorage.getItem(THEME_KEY);
		},
	},

	mounted() {
		if (this.hasInStorage()) {
			this.setTheme(this.getFromStorage());
			return;
		}

		if (process.isClient && window.matchMedia) {
			this.setTheme(this.detectPrefered());
			return;
		}
	},
};
</script>
