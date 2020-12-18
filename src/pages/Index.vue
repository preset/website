<template>
	<layout>
		<section class="flex flex-col w-full px-12 lg:space-x-20 lg:items-center lg:flex-row lg:px-0">
			<!-- Left -->
			<div class="w-full mb-20 lg:w-1/2 lg:mb-0">
				<h1 class="text-6xl font-bold leading-tight tracking-tight text-brand">
					Preset
				</h1>
				<p class="mt-4 text-2xl transition-colors duration-200 text-on-background-blockquote">
					A command line tool for kickstarting your application's development by applying presets on top of it.
				</p>

				<div class="flex">
					<g-link
						to="/docs/"
						class="px-4 py-3 mt-8 mr-4 text-lg font-semibold transition-colors duration-200 rounded-lg shadow-md bg-brand text-on-brand"
					>
						Get started
					</g-link>
					<a
						href="https://github.com/preset/awesome"
						class="px-4 py-3 mt-8 text-lg font-semibold transition-colors duration-200 rounded-lg bg-button text-on-button"
					>
						Browse presets
					</a>
				</div>
			</div>

			<!-- Right -->
			<div class="w-full space-y-8 text-lg lg:w-1/2">
				<pre class="rounded-lg shadow-xl prism language-js"><code class="language-js">{{ code }}</code></pre>
				<pre class="rounded-lg shadow-xl prism language-bash"><code class="language-bash">{{ command }}</code></pre>
			</div>
		</section>
	</layout>
</template>

<style lang="postcss">
@import '~prism-themes/themes/prism-nord.css';
</style>

<script>
import Layout from '~/layouts/Site';
import Icon from '@/components/Icon';
import prism from 'prismjs';
import stripIndent from 'strip-indent';

export default {
	components: {
		Layout,
		Icon,
	},

	metaInfo() {
		return {
			title: `Preset - ${this.$static.metadata.siteDescription}`,
			titleTemplate: '%s',
		};
	},

	data: () => ({
		command: stripIndent(`npx apply my-username/my-preset`),
		code: stripIndent(`
			import { Preset } from 'apply'

			// Extracts the preset's templates
			Preset.extract()

			// Updates the package.json file
			Preset.editNodePackages()
				.add('tailwindcss', '^2.0')
				.remove('sass')

			// Runs yarn or npm install
			Preset.installDependencies()
    `).trim(),
	}),
};
</script>

<static-query>
query {
  metadata {
    siteDescription
  }
}
</static-query>
