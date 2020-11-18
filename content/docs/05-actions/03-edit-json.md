---
title: 'Edit JSON'
---

## Purpose

This action makes it easy to edit JSON files in the target directory.

Additionally, it offers a convenient way to edit Node and PHP dependencies by exposing another API made on top of that action.

## Initialization

Call the `editJson` method on the `Preset` singleton. The first arguments specifies the path to the JSON file which is going to be updated.

Additionally, you can call `editNodePackages` or `editPhpPackages` without arguments to update dependencies in the target directory.

```ts
// Returns the EditJson object which contains
// additional methods
Preset.editJson('package.json');

// Returns the EditPhpPackages object which contains
// additional methods
Preset.editPhpPackages();

// Returns the EditNodePackages object which contains
// additional methods
Preset.editNodePackages();
```

---

## API of `EditJson`

### `merge`

Deeply merges the given object into the JSON file.

<!-- prettier-ignore -->
```ts
Preset.editJson('package.json')
  .merge({
    devDependencies: {
      tailwindcss: '^2.0'
    }
  });
```

---

### `delete`

Deletes the properties at the given path. The parameter can be a string or an array.

<!-- prettier-ignore -->
```ts
Preset.editJson('package.json')
  .delete([
    'devDependencies.bootstrap',
    'devDependencies.sass-loader'
  ]);
```

---

## API of `EditNodePackages`

### `remove`

Removes the given dependency from all three of `dependencies`, `devDependencies` and `peerDependencies`.

```ts
Preset.editNodePackages()
	.remove('bootstrap')
	.remove('sass-loader');
```

---

### `add`, `addPeer` and `addDev`

Respectively, add a dependency to the `dependencies`, `peerDependencies` or `devDependencies` object. The first parameter is the name of the dependency, and the second is its version.

<!-- prettier-ignore -->
```ts
Preset.editNodePackages()
	.addDev('tailwindcss', '^2.0')
```

---

### `set`

Updates the value of the given property path of the `package.json` file.

```ts
Preset.editNodePackages()
	.set('license', 'MIT')
	.set('author.name', 'Komi Shouko');
```

---

## API of `EditPhpPackages`

### `remove`

Removes the given dependency from all two of `require` and `require-dev`.

<!-- prettier-ignore -->
```ts
Preset.editPhpPackages()
	.remove('symfony/framework');
```

---

### `add` and `addDev`

Respectively, add a dependency to the `require` or `require-dev` object. The first parameter is the name of the dependency, and the second is its version.

```ts
Preset.editPhpPackages()
	.add('laravel/framework', '^8.12')
	.addDev('fakerphp/faker', '^1.9.1');
```

---

### `set`

Updates the value of the given property path of the `composer.json` file.

```ts
Preset.editPhpPackages()
	.set('license', 'MIT')
	.set('autoload.files', ['app/Support/helpers.php']);
```
