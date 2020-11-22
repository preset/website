---
title: 'Laravel'
---

## Preset's inspiration

[Laravel Frontend Preset](https://github.com/laravel-frontend-presets) is an amazing concept that allows for exactly the same as Preset does, but only for Laravel projects.

Preset is born from the desire to simplify the development, publication and usage of a preset. Additionnaly, it was designed to be available for all ecosystems, not only PHP.

## One-liner for front-end presets

The [`frontend`](https://github.com/laravel-presets/frontend) preset in the `laravel-presets` organization can be used to install any preset in the [`laravel-frontend-presets`](https://github.com/laravel-frontend-presets) organization.

It means that instead of the following:

```bash
composer require laravel/ui laravel-frontend-presets/<name>
php artisan ui <name>
```

You can use this one-liner:

```bash
npx use-preset laravel:frontend <directory> <name>
```

Additionally, you can install [Laravel Breeze](https://github.com/laravel/breeze) with the `--breeze` flag or by using `breeze` as the preset name:

```bash
npx use-preset laravel:frontend --breeze
npx use-preset laravel:frontend my-laravel-app breeze
```

The [`TALL`](https://github.com/laravel-frontend-presets/tall) preset also has its `--tall` flag because it does not depend on `laravel/ui`, so it can be uninstalled after being applied.

!> Read the [hosting](/docs/guides/hosting/#community-organizations) documentation to learn more about the `prefix:repository` syntax.

## Laravel presets

The [Laravel Presets](https://github.com/laravel-presets) organization will offer community-maintained presets specifically made for Laravel.

They can be used with the `laravel:preset-name` syntax:

```shell
npx use-preset laravel:tailwindcss
```

!> Shout me a [direct message](https://twitter.com/enzoinnocenzi) if you want your preset to be added to the organization.
