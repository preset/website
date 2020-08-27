---
title: 'Install dependencies'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/custom/'
next: '/docs/actions/prompt/'
---

## Install dependencies

An `install-dependencies` action can install or update dependencies for the given ecosystem. Currently, it supports the `PHP` ecosystem (`composer`) and the `Node` ecosystem (`yarn` and `npm`).

## Fluent API

The fluent API translates to the object syntax under the hood, so you can look at the object API reference to understand what every method and property do.

---

### `installDependencies`

- **Parameter**: `install` or `update`
- **Default**: `install`

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .installDependencies()
    .for('node')
    .chain()
```

This methods returns a `PendingDependencyInstallation` object. Alternatively, `updateDependencies` can be used and will default to the `update` installation mode.

#### `for`

- **Parameter**: `node` or `php`

The name of the ecosystem to install dependencies for.

#### `withMode`

- **Parameter**: `install` or `update`

The type of installation.

#### `withoutAsking`

- **Parameter**: `bool`
- **Default**: `true`

Whether or not to perform the installation without asking for user confirmation. If omitted, confirmation will be asked. If the given parameter is false, confirmation **will** be asked.

---

## Object API

### `for`

- **Type**: `node` or `php`

The ecosystem against which to install the dependencies.

---

### `mode`

- **Type**: `install` or `update`

Whether to install or update the dependencies.

---

### `ask`

- **Type**: `boolean`
- **Default**: `true`

Whether or not to ask before installing the dependencies.
