---
title: 'Hosting'
---

## Hosting

Presets can be hosted on your local machine or on GitHub. You can also have a mono-repository containing multiple presets, if it helps you with their maintenance.

## GitHub

You can install a preset by using its GitHub URL or shorthand.

```bash
# Shorthand
npx apply your-organization/your-cool-preset

# Full URL
npx apply git@github.com:your-organization/your-cool-preset

# Without SSH
npx apply https://github.com/your-organization/your-cool-preset
```

## Community organizations

In order to create an easy-to-remember syntax, organizations may have a prefix assigned to them.

```bash
npx apply prefix:repository
```

Prefixes may not be necessary if your organization name is short enough, but if you grow a community and you would like a prefix for its presets, feel free to create a pull request to add it.

**Current list**:

| Prefix    | GitHub organization                                     |
| --------- | ------------------------------------------------------- |
| `laravel` | [`laravel-presets`](https://github.com/laravel-presets) |

## Mono-repositories

If you prefer organizing your presets within a single mono-repository, you can specify a path to the preset's subdirectory with the `--path` option.

For instance, imagine the following structure:

```
<your-username/repository>
├── preset1/
└── category/
    ├── preset2/
    └── preset3/
```

You can use the presets in it with the following commands:

```bash
# Install /preset1
npx apply your-username/repository --path preset1

# Install /category/preset1
npx apply your-username/repository --path category/preset2
```

## Private repositories

You can use private repositories if you [configured your SSH key](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account). Repositories are cloned using SSH by default, so there isn't anything special to do.

```bash
npx apply your-username/private-repository
```
