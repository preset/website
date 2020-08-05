---
title: 'Prompt'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/actions/install-dependencies/'
next: '/docs/actions/run/'
---

## Prompt

A `prompt` action can ask the user for information. Under the hood, it uses [Enquirer](https://github.com/enquirer/enquirer/).

## How it works

Multiple prompts can be added into a single prompt action. Each of them will add a property to the `context.prompts` object. The property name is determined by the `name` property on each of the action's `prompt` objects.

---

## Fluent API

Every method below is called right after the `prompts` method, which returns the `PendingPrompts` object.

---

### `confirm`

Asks for a confirmation. First argument is the question to display, second is the name of the variable that will be added to the context, and third is an object that contains the options for Enquirer.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .prompts()
    .confirm('Directory is empty. Do you want to scaffold the app?', 'scaffold')
    .chain();
```

---

### `input`

Asks for text. First argument is the message to display second is the name of the variable that will be added to the context, and third is an object that contains the options for Enquirer.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .prompts()
    .input('Enter the name of the project', 'projectName')
    .chain();
```

---

### `add`

Adds a prompt object to the list of prompts. First argument is the name of the variable that will be added to the context, second is the prompt object.

<!-- prettier-ignore -->
```js
module.exports = Preset.make('My preset')
  .prompts()
    .add('projectName', {
      type: 'Input',
      message: 'Enter the name of the project'
    })
    .chain();
```

Refer to the [Enquirer documentation](https://github.com/enquirer/enquirer) for more information.

---

## Object API

### `prompts`

- **Type**: `PromptOptions` or `PromptOptions[]`

  Refer to the [Enquirer documentation](https://github.com/enquirer/enquirer) for more information.
  A `name` property must be present in the `PromptOptions` object.
