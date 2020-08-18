---
title: 'Edit JSON'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/preset/'
next: '/docs/actions/edit/'
---

## Edit JSON

An `edit-json` action can edit a JSON file by merging or removing content. It is useful for adding or removing dependencies from `package.json` or `composer.json` files, but it can be used with an JSON file.

---

## Fluent API

The fluent API translates to the object syntax under the hood, so you can look at the object API reference to understand what every method and property do.

---

### `editJson`

- **Parameter**: `file`

  The path of the file to edit, relative to the root of the target directory.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .editJson('package.json')
```

This method returns a `PendingJSONEdition` object, which exposes a few methods to work with JSON files.

---

#### `merge`

- **Parameter**: `object`

  An object you wish to merge with the JSON file.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .editJson('package.json')
    .merge({
      devDependencies: {
        tailwindcss: '^1.6'
      }
    })
    .chain()
```

---

#### `delete`

- **Parameter**: `string` or `string[]`

  A path or a list of paths of properties you wish to remove.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .editJson('package.json')
    .delete([
      'devDependencies.sass',
      'devDependencies.sass-loader',
    ])
    .chain()
```

---

#### `indentWith`

- **Parameter**: `string` or `number`

  The `space` property of the [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .editJson('package.json')
    .delete([
      'devDependencies.sass',
      'devDependencies.sass-loader',
    ])
    .indentWith('  ')
    .chain()
```

---

## Object API

### `file`

- **Type**: `string` or `string[]`
- **Default**: `[]`

One or more paths to files in the target directory. It also accept globs. If a given file is not found, it is silently ignored. If false, the property is ignored.

---

### `merge`

- **Type**: `object`
- **Default**: `{}`

This property should be an object which will be recusrively merged with every matched file.

---

### `delete`

- `Type`: `string` or `string[]`
- `Default`: `[]`

This property should be a string or an array of strings that represent a path to a JSON property. Each of these paths will be deleted from the matched files. Under the hood, it uses Lodash's `unset`.

---

### `space`

- `Type`: `string` or `number`
- `Default`: `\t`

The `space` property of the [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method.
