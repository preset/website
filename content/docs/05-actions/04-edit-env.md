---
title: 'Edit environment'
---

## Purpose

This action can update a [dotenv](https://github.com/vlucas/phpdotenv) file in the target directory.

## Initialization

Call the `env` method on the `Preset` singleton. It takes an optional parameter sets the path to the environment file, and defaults to `.env`.

```ts
Preset.env('.env.example');
```

## API

### `set`

Sets an environment variable to the given value. The first parameter is the name of the environment variable, while the second can be either a simple string or a callback.

If a callback is used, it is given an object which keys are the target file's environment variable names.

```ts
Preset.env()
  // Uses a default value for APP_NAME if it is not set
  .set('APP_NAME', ({ APP_NAME }) => APP_NAME ?? 'Laravel')

  // Sets the APP_URL environment variable
  // by using the value from APP_NAME
  .set('APP_URL', ({ APP_NAME }) => {
    return `https://${APP_NAME}.test`.toLowerCase();
  })
```

---

### `skipIfMissing`

Defines whether the action should be skipped if the target environment file does not exist.
The default behavior is to create one.

```ts
Preset.env().skipIfMissing();
```

---

### `createIfMissing`

Defines whether the target environment file should be created if it does not exist. This is the default b behavior.

This method takes a context-aware boolean value as a parameter.

```ts
// Creates the missing .env file only if the
// --force flag is given
Preset.env().createIfMissing(({ options }) => {
	return Boolean(options.force);
});
```
