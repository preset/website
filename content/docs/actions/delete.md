---
title: 'Delete'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/edit/'
next: '/docs/actions/custom/'
---

## Delete

A `delete` action can delete files and directories from the target directory.

---

## Fluent API

The fluent API translates to the object syntax under the hood, so you can look at the object API reference to understand what every method and property do.

---

### `delete`

- **Parameter**: `string` or `string[]` (optional)

  A path or an array of paths to the files that should be deleted. If omitted, the `directories` method can be called to delete directories instead.

<!-- prettier-ignore -->
```js
// Will remove the /public/js directory
// in the target directory

module.exports = Preset.make('My preset')
  .delete()
    .directories('public/js')
    .chain();
```

## Object API

### `files`

- **Type**: `string` or `string[]` or `false`
- **Default**: `false`

One or more paths to files in the target directory. It also accept globs. If a given file is not found, it is silently ignored. If false, the property is ignored.

---

### `directories`

- **Type**: `string` or `string[]` or `false`
- **Default**: `false`

One or more paths to folders in the target directory. Behaves the same as `files`.
