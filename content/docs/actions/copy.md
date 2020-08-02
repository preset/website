---
title: 'Copy'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/guide/step-by-step-example/'
next: '/docs/actions/custom/'
---

## Purpose

A `copy` action can copy files and directories from the template directory to the target directory.

## Fluent API

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
// Will copy the "config" directory to the target directory
module.exports = Preset.make('My preset')
  .copyDirectories('lib/config')
    // .to('config')  // /config instead of root
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
// The following will copy the preset template
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
