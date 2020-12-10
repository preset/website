---
title: 'Extract'
---

## Purpose

This action allows for extracting files from the preset's template directory to the target directory. In most of the cases, this is one of the only actions a preset will use.

## Initialization

Call the `extract` method on the `Preset` singleton. It can take a string as a parameter, which defines the directory to extract, and will return an `Extract` object, which contain additional methods.

By default, it extracts the whole template directory.

```ts
// Extracts the content of `auth`, which is in the `template`
// directory of the preset, to the root of the target directory
Preset.extract('auth');

// Extracts the content of the `template` directory of the
// preset to the root of the target directory.
Preset.extract();
```

## API

### `to`

Changes the target directory.

By default, `extract` would extract the templates to the root of the target directory.

```ts
// Extracts the content of the `template` directory of the
// preset to the `config` directory of the target directory
Preset.extract().to('config');
```

---

### `whenConflict`

Specify the behavior the action should have when a target file already exists. The possible options are:

- `ask`: will ask the user whether to make the copy or not
- `skip`: will skip the file
- `override`: will override the file

By default, files will be overridden.

```ts
Preset.extract().whenConflict('ask');
```

---

### `from`

Changes the directory to extract, relative to the templates directory. This is the same as passing a parameter to `extract`.

```ts
Preset.extract().from('directory');

// Same as
Preset.extract('directory');
```

---

### `withDots`

Allows for extracting files or directory starting with a dot. Without this option, files like `.gitignore` or `.vscode` will be ignored.

However, files ending with `.dotfile` will always be copied (eg. `gitignore.dotfile` will be extracted as `.gitignore`), so you may not need this option.

```ts
Preset.extract().withDots();
```
