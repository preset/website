---
title: 'Custom'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/copy/'
next: '/docs/actions/delete/'
---

## Purpose

A `custom` actions allows for custom code to be executed.

## Fluent API

### `execute`

- **Parameter**: a callback

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .execute((context) => {
    // Custom code
  });
```

This method directly returns the `Preset` object, so calling `chain` is not needed.

## Object API

### `execute`

- **Type**: `function`

This function will be called when its action is executed. Any arbitrary code here can run, as long as it doesn't depend on external dependencies (only in `eval` mode). This function can also be asynchrone.
