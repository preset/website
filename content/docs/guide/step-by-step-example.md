---
title: 'Step-by-step example'
description: ''
sidebar: 'docs'
prev: '/docs/guide/writing-tests/'
next: '/docs/actions/copy/'
---

## Workflow

Since a preset is meant to perform modifications on an existing project, you will need to know what kind of modifications you want to make.

For that, you will need to make an installation of the project you want the preset to be applied on, and make the modifications yourself. Then, you'll have to translate these modifications as instructions on your actual preset project.

### Initialize the preset

Create a directory with the name of your choice, and initialize the preset in it:

```bash
npx use-preset preset
```

### Initialize the project

My goal is to make a preset that adds Tailwind CSS to a Vite application. I'll go ahead and use `npm init vite-app` to initialize the project.

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

In this case, my first step is to add `tailwindcss` as a dependency. I'll run the command on my test project, but it's a simple action so I can just add it to the preset as well.

3. **Step by step, I make the modifications by hand in the sample project**. I want to add Tailwind CSS in this case, so I'll add it as a dependency. This is something that won't need more modifications, so I can add it to the preset:

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

   I went ahead and added `@tailwindcss/ui` and `autoprefixer` as well.

4. **Continue until you arrive at the state you want to be when you'll use the preset**. For that, I just repeat #3.

   For instance, to create the Tailwind CSS preset, I needed to create a `postcss.config.js`. Since the file did not exist prior to that, I added it as a template file in the `/templates` directory, and I added a `copy` action to the preset. I also had to edit the `index.html`, as well as a few other files.

   Since the preset is supposed to run on a fresh install, I can safely replace these files, so I added them as templates too. In the end, the preset consits of a `copyTemplates` and an `editJson` method.

5. **I test the preset**. I use Git to reset the repository to the fresh installation state, and I apply my local preset to it.

   ```bash
   npx use-preset ~/code/presets/vite-tailwindcss
   ```

6. **I publish it**. The work is done, so I can push it to GitHub. I can now apply the preset with my GitHub handle.

   ```bash
   # It doesn't actually exist, so don't try it
   npx use-preset innocenzi/tailwindcss
   ```
