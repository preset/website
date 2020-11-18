---
title: Preset
---

## The `Preset` object

The `Preset` object is a [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) exported by the `use-preset` dependency. Every action is created from that object.

```ts
import { Preset } from 'use-preset';

// This method returns an Extract object
// to further configure the action
Preset.extract();
```

## Context-aware parameters

Most parameters are **context-aware**. It means that you can pass a callback which takes the `Preset` object as a parameter. To know which parameter is context-aware, use your IDE.

![](/context-aware-autocompletion.png)

The `Preset` object is updated as the actions are executed, so instead of using the globally-available singleton, you should always use the one passed as a parameter to the callback.

**Example**

<!-- prettier-ignore -->
```ts
// Extracts the "default" template directory unless
// the --auth option is passed to the command line
Preset.extract((preset) => {
  if (preset.options.auth) {
    return 'auth';
  }

  return 'default';
});
```

## Methods

### `setName`

Sets the name of the preset. It is displayed in the console when a user uses the preset.

**Example**

```ts
Preset.setName('My preset');
```

---

### `setTemplateDirectory`

Sets the template directory. This is used by the [Extract](/docs/api/extract) action to determine from which directory in the preset the templates files should be extracted.

By default, the template directory is `templates`.

**Example**

```ts
Preset.setTemplateDirectory('stubs');
```

---

### `option`

?> This method has no context-aware parameter.

Defines the default value for a command-line option. The values of the options are available in the [`options`](#options) property of `Preset`.

**Example**

```ts
// options.auth will always be true unless
// --no-auth is passed
Preset.option('auth', true);

// options.extra will be false unless
// --extra is passed
Preset.option('extra', false);
```

---

### `instruct`

Adds properly-formatted instructions when the preset has been applied.

<!-- prettier-ignore -->
```ts
import { Preset, color } from `use-preset`;

Preset.instruct([
	`Run ${color.magenta('yarn run')} to start development.`,
	`Read the documentation at https://usepreset.dev.`,
]);
```

This method returns an object which contains an additional method, `withHeading`, which takes a string parameter that defines the title of the instruction block.

<!-- prettier-ignore -->
```ts
import { Preset, color } from `use-preset`;

Preset.instruct([
	`Run ${color.magenta('yarn run')} to start development.`,
]).withHeading("What's next?");
```

---

### `isInteractive`

Returns true if the preset is interactive. A preset is determed to be interactive if `process.stdout.isTTY` is false _and_ `--interaction` is not passed.
If `--interaction` is given, the interactive mode is forcefully enabled.

This option is useful for testing a preset in a Continuous Interaction pipeline.

---

### `isRepository`

Returns true if the target directory has a `.git` directory.

---

### `isTargetDirectoryEmpty`

Returns true if the target directory do not have any file in it.

---

## Parameters

### `options`

Contains the command-line flags. Flags can be boolean values or string. Boolean values can be negated by prefixing them with `--no-`.

**Examples**

| Flags         | Values             |
| ------------- | ------------------ |
| `--auth`      | `{ auth: true }`   |
| `--no-auth`   | `{ auth: false }`  |
| `--mode auth` | `{ mode: 'auth' }` |

!> Under the hood, this feature uses [C.C.](https://github.com/cacjs/cac) by [Egoist](https://twitter.com/_egoistlily).

---

### `args`

Contains the command-line arguments which are not flags. The preset resolvable and the target directory will always be the first and second ones, respectively.

---

### `prompts`

The user's responses from the [Prompt](/docs/actions/prompt) action, stored as an object which keys are the prompt names.

---

### `context`

An empty object that can be used to store preset-specific computed values.

This is useful if your preset should read and parse command-line flags and arguments, and reuse them multiple times later.

!> Learn more in the [context documentation](/docs/guides/using-context/).

---

### `git`

An object which contains two more Git-related properties.

#### `config`

The local Git configuration of the user. For instance, `git.config['user.name']` will contain the local Git username.

#### `instance`

A [`simple-git`](https://github.com/steveukx/git-js) instance. You can use it to perform Git operations.
