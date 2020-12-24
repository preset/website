---
title: 'Aliases'
---

## Aliases

If you are using the same preset a lot, and its name is tedious to type, you may want to create an alias for it. If a `.presetrc.yaml` file exists in the home directory (`/home/<username>` or `C:/Users/<username>`), aliases will be looked for whenever `apply` is used.

Under the hood, [`cosmiconfig`](https://github.com/davidtheclark/cosmiconfig) is used, so any of its supported formats can be used instead of `YAML`.

### Namespace alias

A namespace alias is registered by using a single key/value pair at the root of the configuration file. The key will be what can be used in place of a GitHub organization, and the value will be the actual organization.

```yaml
# ~/.presetrc.yaml
laravel: laravel-presets
```

In this example, both commands will do the same:

```bash
# Original command
npx apply laravel-presets/inertia

# Aliased command
npx apply laravel:inertia
```

### Preset alias

A preset alias is a complete override of what could have been a dynamic namespace alias. It is registered by creating a key/value pair where the value is an object, which itself is a key/value pair.

These keys represent the right side of the alias.

```yaml
# ~/.presetrc.yaml
laravel:
  tailwindcss: laravel-presets/tailwindcss
```

In this example, both commands will do the same:

```bash
# Original command
npx apply laravel-presets/tailwindcss

# Aliased command
npx apply laravel:tailwindcss
```

Additionally, more complex aliases can be registered. By using an object instead of a string, you can configure the `path` and `ssh` keys, which are the equivalent of the command-line arguments `--path <path>` and `--ssh`/`--no-ssh`.

```yaml
# ~/.presetrc.yaml
laravel:
  tailwindcss:
    preset: laravel-presets/tailwindcss
    ssh: false
```

!> Using arguments in aliases is not yet supported.
