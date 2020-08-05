---
title: 'Run'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/prompt/'
next: '/docs/api/context/'
---

## Run

A `run` action can run a shell command.

---

## Fluent API

### `run`

- **Parameter**: `string` or a function

  The exact command to be executed. If a function is given, the context will be given as an argument.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .run('php artisan cache:clear');
```

This method directly returns the `Preset` object, so calling `chain` is not needed.

---

## Object API

### `command`

- **Type**: `string` or function

The exact command to be executed. If a function is given, the context will be given as an argument.
