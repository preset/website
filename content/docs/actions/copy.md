---
title: 'Copy'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/guide/step-by-step-example/'
next: '/docs/actions/preset/'
---

## Copy

A `copy` action can copy files and directories from the template directory to the target directory. It is the most common action in a preset, since most of the time a preset only needs to copy over some new or modified files.

---

## Fluent API

The fluent API translates to the object syntax under the hood, so you can look at the object API reference to understand what every method and property do.

---

### Pending objects

All methods except `copyTemplates` and `copyDirectory` return a `PendingCopy` object. That object has the following methods:

- `files` sets the [`files`](/docs/actions/copy#files) property
- `directories` sets the [`directories`](/docs/actions/copy#directories) property
- `to` sets the [`target`](/docs/actions/copy#to) property
- `whenConflict` sets the [`strategy`](/docs/actions/copy#strategy) property
- `ignoreDotFiles` sets the [`ignoreDotfiles`](/docs/actions/copy#ignoredotfiles) property

---

### `copyTemplates`

Copy all files from the template directory to the target directory.

- **Returns**: `Preset`
- **Parameter**: `ask` | `override` | `skip`

  An optional strategy which defaults to `override`. `ask` will ask if the user wants to replace the conflicting file, `override` will override it anyway, and `skip` won't erase it if it exists.

<!--prettier-ignore-->
```js
module.exports = Preset.make('My preset')
  .copyTemplates();
```

This methods returns the `Preset` object directly instead of a pending object.

---

### `copyFiles`

Copy the given files from the template directory to the target directory.

- **Returns**: `PendingCopy`
- **Parameter**: `string` or `string[]`

  One or more paths to a file in the template directory. It also accept [globs](https://github.com/mrmlnc/fast-glob#faq). The templates' directory structure is preserved, so any non-existing subdirectory in the target path will be created. When specifying directly a file, if it doesn't exists, it is silently ignored.

This method returns a different builder instance, which can be used to chain other `copy`-specific methods. To use the preset builder again, use the `chain` method.

<!--prettier-ignore-->
```js
module.exports = Preset.make('My preset')
  .copyFiles('my/file.txt')
    .to('target/directory')
    .whenConflict('ask')
    .chain()
  // Back to the preset builder
  ;
```

---

### `copyDirectory`

Copy the given directory to the root of the target directory.

- **Returns**: `PendingDirectoryCopy`
- **Parameter**: `string`

  A path to a folder in your template directory, which will be copied to the root of the target directory or to the specified target directory.

<!--prettier-ignore-->
```js
// Will copy the "default" templates to the root
// of the target directory
// Will also copy the "auth" templates to the root
// of the target directory if the --auth flag
// is given

module.exports = Preset.make('My preset')
  .copyDirectories('default')
    .to('/')
    .chain()
  .copyDirectories('default')
    .if(({ flags }) => Boolean(flags.auth))
    .to('/')
    .chain()
```

---

### `copyDirectories`

Copy the given directories to the target directory.

- **Returns**: `PendingCopy`
- **Parameter**: `string`, `string[]` or `{ [source: string]: string }`

  Either one or more paths to folders in your template directory, or an object which keys are paths to folders in your template directory and values are paths relative to the target directory in which to copy the contents of the template paths.

<!--prettier-ignore-->
```js
// Will copy the preset template
// directory `preset-1/` to the target subdirectory
// `one/two/`, and the template directory
// `preset-2/` to the target subdirectory `three/`.

module.exports = Preset.make('My preset')
  .copyDirectories({
    'preset-1': 'one/two',
    'preset-2': 'three',
  })
  .chain()
```

## Object API

### `files`

- **Type**: `string` or `string[]`
- **Default**: `**/**` or `[]` if `directories` is specified

One or more paths to a file in the template directory. It also accept globs. The templates' directory structure is preserved, so any non-existing subdirectory in the target path will be created. When specifying directly a file, if it doesn't exists, it is silently ignored.

By default, the whole `templates/` directory will be copied, unless the `directories` key is specified.

---

### `directories`

- **Type**: `string`, `string[]` or `{ [source: string]: string }`
- **Default**: `[]`

Either one or more paths to folders in your template directory, or an object which keys are paths to folders in your template directory and values are paths relative to the target directory in which to copy the contents of the template paths.

For instance, the following will copy the preset template directory `preset-1/` to the target subdirectory `one/two/`, and the template directory `preset-2/` to the target subdirectory `three/`.

```js
{
  'preset-1': 'one/two',
  'preset-2': 'three',
}
```

This is useful when you don't when the full hierarchy to be copied, like the `files` property always does.

---

### `target`

- **Type**: `string`
- **Default**: current working directory

A path to a directory relative to the target directory. If set, every file will be copied relatively to this path.

---

### `strategy`

- **Type**: `ask`, `override` or `skip`
- **Default**: `ask`

A strategy defining how a conflict will be handled. A conflict happens when a file was supposed to be copied, but the target file already existed.

- Using `ask`, the user will be prompted to either replace or skip that copy.
- Using `override`, the copy will be performed anyway and the existing file will be overwritten.
- Using `skip`, the copy will be skipped so the original file will not be modified.

---

### `ignoreDotfiles`

- **Type**: `boolean`
- **Default**: `false`

If set to `true`, files starting with a dot will be ignored.

> File names ending with `.dotfile` will have their extension removed and their name prepended with a dot.
> For instance, `gitignore.dotfile` will be copied to `.gitignore`.
