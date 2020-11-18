---
title: 'Apply'
---

## Purpose

This action allows for applying another preset. This makes presets composable and reusable.

## Initialization

Call the `apply` method on the `Preset` singleton. It takes a string as a parameter, which is the preset [resolvable](/docs/basics/getting-started#usage).

```ts
Preset.apply('organization/repository');
```

## API

### `with`

Passes the specified arguments to the preset, as if they were coming from the command line.

```ts
Preset.apply('laravel/frontend').with([
	'.', // directory in which to apply the preset
	'tall', // name of the preset
	'--no-interaction', // disable interactions
]);
```

---

### `inheritsArguments`

Defines whether the preset will inherit the current command line arguments. By default, they do.

<!-- prettier-ignore -->
```ts
// Exactly the same as the default
Preset.apply('/path/to/local/preset').inheritsArgument();

// Only inherits arguments if the --inherits flag is
// passed to the current preset
Preset.apply('/path/to/local/preset')
  .inheritsArgument(({ options }) => Boolean(options.inherits));
```
