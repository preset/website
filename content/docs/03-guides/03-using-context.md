---
title: 'Using context'
---

## Context-aware parameters

Almost every parameter in the `Preset` API can receive a callback that takes the current, updated `Preset` object.

!> Learn more in the [`Preset`](/api/preset/#context-aware-parameters) documentation.

## Context object

The `context` object is accessible via the `Preset` singleton and can persist information throughout the lifecycle of the preset. Since actions are ran individually, instead of parsing the data each time, you can persist it and reuse it later.

A good place to do this is the [hook](/docs/actions/hook) action:

```ts
Preset.hook(({ context, args, options }) => {
	const allowedOptions = ['auth', 'extra'];

	context.presetName = args[2];
	context.options = Object.keys(options)
		.filter((option) => allowedOptions.includes(option))
		.map((option) => `--${option}`);
});
```

And you can reuse it later:

<!-- prettier-ignore -->
```ts
Preset.execute('php')
	.withArguments(({ context }) => [
		'artisan', 
		'ui', 
		context.presetName, 
		...context.options
	])
	.withTitle(({ context }) => `Applying ${context.presetName}`);
```

In the example above, you can call the preset like the following, and it will run a dynamic `php artisan` command.

```bash
# npx apply laravel:frontend . tall --auth
php artisan ui tall --auth
```
