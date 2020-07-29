<template>
	<layout>
		<section class="flex flex-col w-full px-12 lg:space-x-20 lg:items-center lg:flex-row lg:px-0">
			<!-- Left -->
			<div class="w-full mb-20 lg:w-1/2 lg:mb-0">
				<h1 class="text-6xl font-bold leading-tight tracking-tight text-brand">
					Preset
				</h1>
				<p class="mt-4 text-2xl text-on-background-blockquote">
					A command line tool for applying existing presets to your freshly scaffolded project, so you don't have to do
					it manually.
				</p>

				<div class="flex">
					<g-link
						to="/docs/"
						class="px-4 py-3 mt-8 mr-4 text-lg font-semibold rounded-lg shadow-md bg-brand text-on-brand"
					>
						Get started
					</g-link>
					<a
						href="https://github.com/use-preset/awesome-presets"
						class="px-4 py-3 mt-8 text-lg font-semibold rounded-lg bg-button text-on-button"
					>
						Browse presets
					</a>
				</div>
			</div>

			<!-- Right -->
			<div class="w-full lg:w-1/2">
				<pre class="rounded-lg shadow-xl prism language-js"><code class="language-js">{{ code }}</code></pre>
			</div>
		</section>
	</layout>
</template>

<style lang="postcss">
@import '~prism-themes/themes/prism-material-oceanic.css';
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
			title: 'Preset',
			titleTemplate: '%s',
		};
	},

	data: () => ({
		code: stripIndent(`
      const { Preset } = require('use-preset');

      module.exports = Preset.make('My preset')
        // Copy everything in your template folder
        .copyTemplates()

        // Edit the package.json file
        .editJson('package.json')
          .merge({
            devDependencies: {
              tailwindcss: '^1.6'
            }
          })
          .chain()

        // Run yarn or npm install
        .installDependencies();
    `).trim(),
	}),
};
</script>
