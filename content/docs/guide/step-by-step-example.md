---
title: 'Step-by-step example'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/guide/hosting/'
next: '/docs/actions/copy/'
---

## Step-by-step example

Since a preset is meant to perform modifications on an existing project, you will need to know what kind of modifications you want to make.

For that, you will need to make an installation of the project you want the preset to be applied on, and make the modifications yourself. Then, you'll have to translate these modifications as instructions on your actual preset project.

### Initialize the preset

Create a directory with the name of your choice, and initialize the preset in it:

```bash
npx use-preset preset --in my-preset
```

### Initialize the project

The goal here is to make a preset that adds Tailwind CSS to a Vite application. Go ahead and use `npm init vite-app` to initialize the project.

```bash
npm init vite-app
```

### Initialize the repository

If not already done, initialize a Git repository. You will need it to be able to roll back to a fresh install after you perform your modifications.

```bash
git init
git add .
git commit -m "chore: initialize project"
```

### Make the modifications

In this case, our first step is to add `tailwindcss` as a dependency. We will need to run the command on our test project, but it's a simple action so I can just add it to the preset as well:

<!-- prettier-ignore -->
```js
const { Preset } = require('use-preset');

module.exports = Preset.make('Tailwind CSS')
  .editJson('package.json')
  .merge({
    devDependencies: {
      tailwindcss: '^1',
      '@tailwindcss/ui': '^0',
      autoprefixer: '9.8',
    },
  })
  .chain();
```

Let's go ahead and add `@tailwindcss/ui` and `autoprefixer` as well.

**We'll continue these steps until we arrive at the state we want to be when we'll use the preset**.

For instance, in this case, we need to create a `postcss.config.js`. Since the file does not exist on the test porject, we can add it as a template file in the `/templates` directory. Then, a `copy` action will allow us to copy it over when the preset is applied.

<!-- prettier-ignore -->
```js
const { Preset } = require('use-preset');

module.exports = Preset.make('Tailwind CSS')
  .copyTemplates() // <-- this method copies the templates
  .editJson('package.json')
  .merge({
    devDependencies: {
      tailwindcss: '^1',
      '@tailwindcss/ui': '^0',
      autoprefixer: '9.8',
    },
  })
  .chain();
```

We also want the base `index.html` to use Tailwind CSS, so let's override it by adding our modified version to the `/templates` directory.

### Test it

Since we added a few steps to the preset, we can try it to see if we didn't do any mistake. For that, we can use Git to reset the repository to the last commit, so we are back to our fresh install:

```bash
git reset --hard HEAD
```

Then, we can apply our preset and see if we did not make any mistake:

```bash
npx use-preset ~/code/presets/vite-tailwindcss
```

If everything is good, we can go back to the previous step and continue, until we're done with the preset.

### Publish it

Once the preset does everything we want it to, we can make it available for everyone (or just ourselves). For that, you can refer to the [hosting documentation](/docs/guide/hosting/).

When a preset is hosted, it can be used by everyone as long as they have Node installed, which comes with `npx`.

```bash
npx use-preset use-preset/tailwindcss
```
