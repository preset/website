---
title: 'Context'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/concept/hooks/'
next: '/docs/api/preset/'
---

## Context

This is the reference for the `context` object that is passed to some of the callbacks and methods.

## Properties

### `generator`

- **Type**: `GeneratorContract`

Contains information about the current preset.

---

### `presetName`

- **Type**: `string`

The name of the preset. It is determined, in order, by:

- the `name` property of the preset file,
- the `name` property of the `package.json`,
- the command line argument corresponding to the preset name name or path.

---

### `presetTemplates`

- **Type**: `string`

The absolute path to the templates directory of the current preset.

---

### `presetDirectory`

- **Type**: `string`

The absolute path to the directory of the current preset.

---

### `presetFile`

- **Type**: `string`

The absolute path to the current preset file. A preset file is either `preset.js` in the preset directory, or the path specified in the `package.json`'s `preset` property.

---

### `temporary`

- **Type**: `boolean`

A value indicating whether or not the preset directory is temporary. A preset directory is considered temporary when it has been fetched from an external source, such as a remote repository, or a GitHub gist.

---

### `targetDirectory`

- **Type**: `string`

The absolute path to the current target directory. It is either the current working directory—that is, the directory in which the `use-preset` command has been ran—or the directory that has been specified with the `--in` command line flag.

---

### `argv`

- **Type**: `string[]`

An array containing additionnal command line arguments. The ones used by `use-preset` are not specified. For instance, when using `npx use-preset hello-world --in helloworld`, the `argv` property will be empty.

---

### `args`

- **Type**: `object`

An object containing parsed additional command line arguments.

---

### `flags`

- **Type**: `object`

An object containing parsed additional command line flags.

---

### `prompts`

- **Type**: `object`

An object containing the answers to the prompts actions.

---

### `debug`

- **Type**: `boolean`

A value indicating whether or not the preset is ran in debug mode.

---

### `task`

- **Type**: `ListrTaskWrapper`

The [`listr2`](https://github.com/cenk1cenk2/listr2/) object representing the current task.

---

### `git`

- **Type**: `object`

An object containing two properties, `config` and `context`.

#### `config`

- **Type**: `ConfigValues`

Contains the local Git option.

#### `context`

- **Type**: `SimpleGit`

An instance of [`SimpleGit`](https://github.com/steveukx/git-js).
