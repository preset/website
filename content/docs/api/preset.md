---
title: 'Preset'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/api/context/'
---

## Preset

This is the reference for the `generator` object that you pass to `Preset.make()` if you are using the object syntax.

## Fluent API

For methods not described here, please refer to the corresponding documentation in the **Actions** section.

---

### Pending objects

Methods that define actions, for the most part, return pending objects. These are objects to which you can chain additional methods to modify the default behavior of the action. To return to the preset object, use the `chain` method on the pending object.

#### `title`

- **Parameter**: `string`

Defines the title of the action, which will be displayed on the console when using the preset.

#### `if`

- **Parameter**: `function`

Defines whether or not the action should run. The function is given the current [context](/docs/concepts/context/).

#### `chain`

Returns the initial `Preset` object.

#### `before` and `after`

- **Parameter**: `function`

Sets the `before` and `after` action hooks. More information on the [hook documentation](/docs/concepts/hooks).

---

### `make`

Create the preset. If a string is given, it will be the name of the preset. If an object is given, refer to the [Object API](#objectapi).

---

### `setTemplateDirectory`

- **Parameter**: `string`
- **Default**: `templates`

Sets the path of the template directory.

---

### `before`, `beforeEach`, `after`, `afterEach`

- **Parameter**: functions

Defines the preset hooks. The functions can be given the context object. See the [hook documentation](/docs/concepts/hooks/) for more information.

---

### `option`

- **Parameters**: `string` and `any`

Defines an argument option. The first parameter is its definition, and the second the default. See the [argument documentation](/docs/guide/handling-arguments/) for more information.

---

### `addAction`

- **Parameter**: `object`

Adds an action from its object syntax.

---

## Object API

### `name`

- **Type**: `string`

The name of the preset. This name is displayed in the output of the console when the preset is applied.

---

### `templates`

- **Type**: `string`
- **Default**: `templates`

The path to the directory that contain the templates, relative to the root of the preset project.

---

### `actions`

- **Type**: `(context: Context) => Action[]`

A method that takes the context as a parameter and return a list of actions.

---

### `options`

- **Type**: `object`

A list of command line options. See [`C.C. sama`](https://github.com/cacjs/cac) for information on the syntax.

---

### `before`

- **Type**: `(context: Context) => void`

A callback that is executed before the actions start to be executed.

---

### `beforeEach`

- **Type**: `(context: Context) => void`

A callback that is executed before an action is executed.

---

### `after`

- **Type**: `(context: Context) => void`

A callback that is executed after the actions have been executed.

---

### `afterEach`

- **Type**: `(context: Context) => void`

A callback that is executed after an action is executed.
