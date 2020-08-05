---
title: 'Edit'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/edit-json/'
next: '/docs/actions/delete/'
---

## Edit

An `edit` actions helps working with files' content.

With it, you can look for a line with a regular expression, and add another line before or after it. You can also replace a line, or delete lines before or after a match too.

---

## Fluent API

> Any documentation help is welcome. In the meantime, here's an example.

**From the [Laravel TALL](https://github.com/use-preset/laravel-tall/blob/master/src/preset.js) preset**

<!-- prettier-ignore -->
```js
// This will replace two strings in two files
// with two other strings

const { Preset } = require('use-preset');

module.exports = Preset.make('Laravel TALL')
  // Defines the files to edit
  .edit([
    'app/Providers/RouteServiceProvider.php', 
    'app/Http/Middleware/RedirectIfAuthenticated.php'
  ])
    // First replacement
    .replace(`public const HOME = '/home';`)
      .with(`public const HOME = '/';`)

    // Second replacement
    .replace(`$namespace = 'App\\Http\\Controllers'`)
      .with(`$namespace = ''`)
    .chain()
```

**From the [Laravel Inertia](https://github.com/use-preset/laravel-inertia/blob/master/src/preset.js#L52) preset**

<!-- prettier-ignore -->
```js
// This will find a specified line and add a line
// right after it, keeping the indentation clean

const { Preset } = require('use-preset');

module.exports = Preset.make('Laravel Inertia')
  .edit('config/app.php')
    .title('Register service provider')
    .search(/App\\Providers\\RouteServiceProvider::class,/)
      .addAfter('App\\Providers\\InertiaServiceProvider::class,')
      .end()
    .chain()
```

## Object API

### `files`

- **Type**: `string` or `string[]` or `false`
- **Default**: `false`

One or more paths to a file in the target directory. It also accept globs. All other properties will apply modifications to files matched by this property.

---

### `replace`

- **Type**: `object`

This object needs properties that will find an expression and replace it with the given replacement. If the `search` value matches with the content of one of the files, it will be replaced with the `with` value. The behavior is similar to [`String#replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

---

#### `search`

A `string`, a regular expression, or a function that returns a `string` or a regular expression

### `with`

A `string` or a [replacement function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

---

### `addLines`

- **Type**: `object`

This property allows the addition of lines before of after a line that matches with the search property.

#### `search`

A `string`, a regular expression, or a function that returns a `string` or a regular expression.

#### `before`

A `string` or an array of `string` that contains the lines to add before the first line that matches with the `search` property.

#### `after`

A `string` or an array of `string` that contains the lines to add after the first line that matches with the `search` property.

---

### `removeLines`

- **Type**: `object`

This property allows the removal of a number of lines before or after a line that matches with the `search` property.

#### `before`

The number of lines to remove before the first line that matches with the `search` property.

#### `after`

The number of lines to remove after the first line that matches with the `search` property.

#### `removeMatch`

Whether or not to remove the line that contains the match.
