---
title: 'Execute'
---

## Purpose

This action can execute shell commands in the target project's directory.

## Initialization

Call the `execute` method on the `Peeset` singleton. The first parameter should be the program or command name, and the following parameter is variadic and represents the arguments.

```ts
// Will run `composer create-project laravel/laravel`
Preset.execute('composer', 'create-project', 'laravel/laravel');
```

## API

### `withArguments`

Defines the command line arguments to be used by the program or command. It takes a context-aware array of strings as a parameter.

You can use it instead of the variadic parameter of the initialization method if the arguments are specific to the context.

```ts
Preset.execute('echo').withArguments(({ option }) => {
	if (!option.phrase) {
		return ['hello world'];
	}

	return [option.phrase];
});
```

### `withOptions`

Defines the [execa](https://github.com/sindresorhus/execa#options) options that should be used.

```ts
Preset.execute('command').withOptions({
	// options
});
```
