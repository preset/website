---
title: 'Edit files'
---

## Purpose

This action makes it easy to perform modifications on files' content, such as adding a line at a specific place or replacing placeholders with their values.

## Initialization

Call the `edit` method on the `Preset` singleton. It takes a context-aware string as a parameter, which is the path to the file that should be updated.

```ts
Preset.edit('app/Providers/AppServiceProvider.php');
```

## API

### `update`

Uses a callback to update the file's content.

The callback gets the content as the first parameter, the `Preset` object as the second parameter, and must return a string with the updated content.

```ts
Preset.edit('config/app.php').update((content) => {
	return content.replace('en_US', 'fr_FR');
});
```

---

### `replaceVariables`

Replaces placeholders in a file with the given values. The only parameter is a context-aware object, which keys are the placeholder names and the values their replacements.

```ts
// Will replace "{{ projectName }}" with "Preset"
Preset.edit('README.md').replaceVariables(({ prompts }) => ({
	projectName: prompts.name ?? 'Preset',
}));
```

---

### `addAfter` and `addBefore`

Adds content after (or before) the line where the given search terms are found. The first parameter is a string or a regular expression that should match against content in the file, and the second parameter is a string or an array of string representing the lines that will be added.

This method returns a `LineAddition` object, which contains additional configuration methods.

```ts
Preset.edit('app/Providers/AppServiceProvider.php').addAfter(
	'use Illuminate\\Support\\ServiceProvider;',
	'use Illuminate\\Pagination\\Paginator;',
);
```

---

## API of `LineAddition`

### `skipLines`

Defines the amount of lines to skip before adding the content.

```ts
Preset.edit('app/Providers/AppServiceProvider.php')
  .addAfter('public function boot', 'Paginator::useTailwind();')\
  .skipLines(1);
```

---

### `withIndent`

Defines the spacing used to indent the content that will be added. By default, the indentation of the previous line will be detected and used.

The possible values are:

- `double`: detects the indentation of the previous line and doubles it
- `number`: uses the specified amount of spaces
- `string`: uses the given string to indent

```ts
Preset.edit('app/Providers/AppServiceProvider.php')
  .addAfter('public function boot', 'Paginator::useTailwind();')\
  .skipLines(1)
  .withIndent('double');
```
