---
title: 'Hooks'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/concepts/templates/'
next: '/docs/guide/writing-a-preset/'
---

## Hooks

Hooks are methods called at certain points of the execution of a preset. They can run arbitrary code, and are given the current context object.

Most of the time, you won't need them at all, but they are here if you need them, just in case.

## Preset hooks

### `before` and `beforeEach`

`before` is called before the actions are ran. `beforeEach` hook is called before an action starts.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('Preset')
  .before((context) => {
    // Run arbitrary code before the actions run
  })
  .beforeEach((context) => {
    // Run arbitrary code before an action run
  });
```

### `after` and `afterEach`

`after` is called after all of the actions are ran. `afterEach` hook is called after an action ends.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('Preset')
  .after((context) => {
    // Run arbitrary code after the actions run
  })
  .afterEach((context) => {
    // Run arbitrary code after an action run
  });
```

## Action hooks

### `before`

This hook is called before an action is executed, right after the `beforeEach` hook.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('test')
  .editJson('package.json')
  .before((context) => {
    // Run arbitrary code before the editJson action is ran
  })
  .delete('devDependencies.axios');
```

### `after`

This hook is called after an action is executed, right after the `afterEach` hook.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('test')
  .editJson('package.json')
  .delete('devDependencies.axios')
  .after((context) => {
    // Run arbitrary code after the editJson action is ran
  });
```
