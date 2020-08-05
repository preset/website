---
title: 'Preset'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/copy/'
next: '/docs/actions/edit-json/'
---

## Preset

A `preset` action can apply another preset. Multiple presets can be applied within one preset.

---

## Fluent API

### `apply`

- **Parameter**: `string`

  A preset name, path or URL.

<!-- prettier-ignore -->
```js
// Will apply
// https://github.com/use-preset/laravel-tailwindcss

module.exports = Preset.make('My preset')
  .apply('use-preset/laravel-tailwindcss')
    .with('--no-interaction')
    .chain();
```

This method will return a `PendingPreset` instance.

#### `with`

- **Parameter**: `string` or `string[]`

  A list of arguments to give to the preset.

#### `inheritsArgument`

- **Parameter**: `bool`

  Whether or not to give the current arguments to the preset.

---

## Object API

### `preset`

- **Type**: `string`

A preset name, path or URL that can be resolved to a preset.

---

### `arguments`

- **Type**: `string` or `string[]`

A list of arguments to give to the preset.

---

### `inherit`

- **Type**: `bool`
- **Default**: `false`

Whether or not to give the current arguments to the preset.
