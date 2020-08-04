---
title: 'Handling arguments'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/guide/writing-a-preset/'
next: '/docs/guide/hosting/'
---

## Handling arguments

Sometimes, you will want to change your preset's workflow based on the command line arguments used by the user. An example of that would be to copy additional files when the user passes a flag, or to not ask to override a file when the user passes the `--force` flag.

Under the hood, Preset uses [`C.C. sama`](https://github.com/cacjs/cac) for this job.

## Flags

Even if you don't explicitly declare flags, they will still be parsed and you will be able to access them through the context object. For instance, if the `--force` flag is given, the `context.flags.force` property will be set to `true`.

You can explicitly declare such a flag by calling `option` with the fluent builder or by adding an object to the `options` array of the preset object.

<!-- prettier-ignore -->
```js
// Fluent
module.exports = Preset.make('My preset')
  .option('force', false) // Default set to false

// Object
module.exports = {
  name: 'My preset',
  options: [
    { name: 'force', default: false }
  ]
}
```

## Arguments

### Without flags

Arguments without flags will be added to the `context.args` property. The first one will always be the URL, path or name of the preset.

For instance, the following:

```bash
npx use-preset ~/code/my-preset hello world
```

Will give the following `args` property:

```js
['~/code/my-preset', 'hello', 'world'];
```

### With flag

You can name arguments so they can be placed in any order with a flag:

<!-- prettier-ignore -->
```js
// Fluent
module.exports = Preset.make('My preset')
  .option('--name <name>', 'Kurisu')

// Object
module.exports = {
  name: 'My preset',
  options: [
    { name: '--name <name>', default: 'Kurisu' }
  ]
}
```

The following example's `context.flags.name` property will default to `Kurisu`, unless a `--name` flag is given.

```bash
# This will set "name" to "Rintaro"
npx use-preset my-preset --name Rintaro
```
