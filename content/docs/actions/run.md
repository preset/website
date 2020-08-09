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

- **Parameters**: `string` or a function, and `string[]`

The first parameter is the command name. If a function is given, the context will be given as an argument. The second parameter is an array of `string` containing the arguments for that command.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .run('php', ['artisan', 'cache:clear']);
```

This method directly returns the `Preset` object, so calling `chain` is not needed.

## Object API

### `command`

- **Type**: `string` or function

The exact command to be executed. If a function is given, the context will be given as an argument.

### `arguments`

- **Type**: `string[]` or function

An array of `string` containing the arguments to pass to the command. If a function is given, the context will be given as an argument.

### `hook`

- **Type**: Function

A function that takes the context as an argument, and that must return another function which takes the [`process`](https://nodejs.org/api/child_process.html) as an argument.
