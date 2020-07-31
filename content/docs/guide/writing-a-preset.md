---
title: 'Writing a preset'
description: ''
sidebar: 'docs'
prev: '/docs/concepts/hooks/'
next: '/docs/guide/handling-arguments/'
---

## Creating the project

In its simplest form, a preset can be just one `preset.js` file. But as soon as you want the comfort of typings, you will need to add `use-preset` as a development dependency.

The `preset` preset (_yes_) can do that for you. Run the following command to scaffold a preset project:

```npx
npx use-preset preset
```

If you used that command, the `preset.js` file will be in the `src` directory. You can change that by editing the `preset` key in the `package.json` file.

## Adding actions

The `Preset` object imported from the `use-preset` dependency is a fluent builder with which you can easily build your preset's workflow. Use your IDE to get autocompletion after you created the preset object with `Preset.make()`:

<!-- prettier-ignore -->
```js
// preset.js
const { Preset } = require('use-preset');

module.exports = Preset.make('Your preset name')
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
    // Auto-completion works here too
  }],
});
```

## Then...

- You can learn more about both syntaxes in the [preset API documentation](/docs/api/preset/).
- You can read the [guide](/docs/guide/) to see an example of the process to create a preset.