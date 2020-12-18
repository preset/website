---
title: 'Using arguments'
---

## Using arguments

To enable configurable, versatile presets, you can allow the usage of arguments with your preset. A use case would be to copy a specific folder from the template directory only if a specific flag is given, or to not ask the user to override a file when the `--force` flag is given.

!> Under the hood, this feature uses [C.C.](https://github.com/cacjs/cac) by [Egoist](https://twitter.com/_egoistlily).

## Flags

A flag is an argument that starts with two dashes (`--`). Any given flag will be stored in the [`preset.options`](/docs/api/preset#options) object.

### Default values

You can define default values for flags by using [`Preset.option(name, value)`](/docs/api/preset#option).

```ts
import { Preset } from 'apply';

Preset.option('auth', true);
Preset.extract('auth').ifHasOption('auth');
```

### Negating options

You can prefix a flag with `--no-` to negate it. In the example above, the `auth` templates will not be extracted if `--no-auth` is passed.

## Arguments

Every argument used when calling the preset is available in the [`preset.args`](/docs/api/preset#args) array.

The preset name and the target directory will always be the first and second arguments, respectively.
