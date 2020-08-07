---
title: 'Writing a preset'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/concepts/hooks/'
next: '/docs/guide/handling-arguments/'
---

## Writing a preset

In its simplest form, a preset can be just one `preset.js` file. But as soon as you want the safety of typings or the comfort of the fluent API, you will need to add `use-preset` as a development dependency.

## Creating the project

The `preset` preset (_yes_) can do that for you. Run the following command to scaffold a preset project:

```npx
npx use-preset preset --in my-preset
```

If you used that command, the `preset.js` file will be in the `src` directory. You can change that by editing the `preset` key in the `package.json` file.

## Adding actions

The `Preset` object imported from the `use-preset` dependency is a fluent builder with which you can easily build your preset's workflow. Use your IDE to get autocompletion after you created the preset object with `Preset.make()`:

<!-- prettier-ignore -->
```js
// preset.js
const { Preset } = require('use-preset');

module.exports = Preset.make('Your preset name')
  .copyTemplates()
  // Auto-completion will give you a bunch of methods
;
```

Alternatively, you can use the more verbose object syntax:

<!-- prettier-ignore -->
```js
// preset.js
const { Preset } = require('use-preset');

module.exports = Preset.make({
  name: 'Your preset name',
  actions: (context) => [{
    type: 'copy',
    strategy: 'ask',
    // Auto-completion works here too
  }],
});
```

## Tip: archiving edited files

When creating a preset from a test project, if you committed its initial state and started editing it, you can use `git diff` to list the modified files.

Combined with `git archive`, you can zip up all of the files you edited so you can unzip them in the templates directory of your preset.

```bash
git archive -o update.zip HEAD $(git diff --diff-filter=M --name-only)
```

## Then...

- You can learn more about both syntaxes in the [preset API documentation](/docs/api/preset/).
- You can read the [guide](/docs/guide/step-by-step-example) to see an example of the process to create a preset.
