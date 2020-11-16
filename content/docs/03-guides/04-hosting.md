---
title: 'Hosting'
---

## Hosting

Presets can be hosted on your local machine or on GitHub. You can also have a mono-repository containing multiple presets, if it helps you with their maintenance.

## GitHub

You can install a preset by using its GitHub URL or shorthand.

```bash
# Shorthand
npx use-preset your-organization/your-cool-preset

# Full URL
npx use-preset git@github.com:your-organization/your-cool-preset

# Without SSH
npx use-preset https://github.com/your-organization/your-cool-preset
```

## Community organizations

A prefix is assigned to community organizations, as a way to make the syntax easier to remember.

```bash
npx use-preset prefix:repository
```

### Current community organizations

The list of supported organizations is below.

| Prefix    | GitHub organization                                     |
| --------- | ------------------------------------------------------- |
| `laravel` | [`laravel-presets`](https://github.com/laravel-presets) |

!> If you grow a community which offer multiple presets, feel free to create a pull request to add your own organization.

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
npx use-preset your-username/repository --path preset1

# Install /category/preset1
npx use-preset your-username/repository --path category/preset2
```

## Private repositories

You can use private repositories if you [configured your SSH key](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account). Repositories are cloned using SSH by default, so there isn't anything special to do.

```bash
npx use-preset your-username/private-repository
```
