---
title: 'Prompt'
---

## Purpose

This action allows for asking information to the user. Under the hood, it uses [Enquirer](https://github.com/enquirer/enquirer).

## Initialization

### `input`

Ask text to the user.

The first parameter is the name of the value, which is stored in the [`preset.prompts`](/docs/api/preset/#prompts) object.

The second parameter is a context-aware string, which will be displayed as the question to the user.

The third one is an optional context-aware string defining the default value of the prompt. It will be used if the preset is started in non-interactive mode.

The last one is an [Enquirer option object](https://github.com/enquirer/enquirer#prompt-options).

```ts
Preset.input('username', 'What is your username?', 'Jon Doe');
```

---

### `confirm`

Asks confirmation to the user.

The first parameter is the name of the value, which is stored in the [`preset.prompts`](/docs/api/preset/#prompts) object.

The second parameter is a context-aware string, which will be displayed as the question to the user.

The third one is an optional context-aware boolean defining the default value of the prompt. It will be used if the preset is started in non-interactive mode.

The last one is an [Enquirer option object](https://github.com/enquirer/enquirer#prompt-options).

```ts
Preset.confirm('username', 'Install ESLint?', true);
```

---

### `prompt`

Creates a generic `Prompt` action. Calling `add` on the returned `Prompt` object is expected.

```ts
Preset.prompt()
	.add(/* ... */)
	.add(/* ... */);
```

## API

### `add`

Adds another prompt in the same action. If you need to ask more than one question, you can use it to avoid having to create another action.

The first parameter is the name of the value, which is stored in the [`preset.prompts`](/docs/api/preset/#prompts) object, and the second is an [Enquirer option object](https://github.com/enquirer/enquirer#prompt-options).

```ts
Preset.prompt().add('username', {
	type: 'input',
	name: 'username',
	message: 'What is your username?',
	initial: 'Jon Doe',
});
```
