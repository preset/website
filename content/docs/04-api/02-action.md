---
title: 'Action'
---

## The `Action` class

Every action extends the `Action` class. It means that the few methods listed below are available on every action.

## Methods

### `if`

Defines the conditions required for the action to be run. This method accepts a single or an array of [context-aware](/api/preset/#context-aware-parameters) boolean values.

**Example**

```ts
// Will only run if --extract is given
Preset.extract().if((preset) => preset.options.extract === true);
```

---

### `ifOptionEquals`

Runs the action if the specified option strictly equals the specified value.

**Example**

```ts
// Will only run if --extract is given
Preset.extract().ifOptionEquals('extract', true);
```

---

### `ifHasOption`

Runs the action if the specified option is defined, regardless of its value.

**Example**

```ts
// Will even run if --extract is not a boolean
Preset.extract().ifHasOption('extract');
```

---

### `ifNotOption`

Runs the action if the specified option is defined and is falsy.

**Example**

```ts
// Will NOT run if --preserve is given,
// but WILL run if --no-preserve is given
Preset.extract().ifNotOption('preserve');
```

---

### `ifInteractive`

Runs the action if the preset is not interactive. This is a shortcut to `Preset`'s [`isInteractive`](/docs/api/preset#isinteractive) method.

---

### `ifRepository`

Runs the action if the target directory is a Git repository. This is a shortcut to `Preset`'s [`isRepository`](/docs/api/preset#isinteractive) method.

---

### `ifDirectoryEmpty`

Runs the action if the target directory is empty. This is a shortcut to `Preset`'s [`isEmpty`](/docs/api/preset#istargetdirectoryempty) method.

---

### `withTitle`

Sets the title of the action, which will be displayed in the console when the action is executed.

**Example**

```ts
Preset.extract().withTitle('Extracting templates...');
```

---

### `withoutTitle`

Hides the title of the action, which will prevent the default title to be displayed when the action is executed.
