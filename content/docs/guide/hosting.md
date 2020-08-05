---
title: 'Hosting'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/guide/handling-arguments/'
next: '/docs/guide/step-by-step-example/'
---

## Hosting

Presets can be hosted on your local machine, on any Git provider, as well as on a Github Gist. You can also have a mono-repository containing multiple presets, if it helps you with their maintenance.

## Locally

By providing the path to the directory that contain a preset, you can apply it in your current directory. You should use this method when developing your own presets, or when contributing to existing ones.

```bash
npx use-preset ~/code/presets/your-cool-preset
```

## On GitHub

GitHub receives a special treatment, as you can use the `username/repository` shorthand. You can also pass the full URL to the repository.

```bash
npx use-preset https://github.com/your-username/your-cool-preset

# This works too
npx use-preset your-username/your-cool-preset
```

### Official presets

Presets under the `use-preset` GitHub organization can be applied with just their name. For instance, you can scaffold a new preset by calling the official `preset` preset.

```bash
npx use-preset preset
```

## Mono-repositories

Additionally, if you have a mono-repository, you can install a preset under any subdirectory by adding a colon and the path to the URL.

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
npx use-preset your-username/repository:preset1

# Install /category/preset1
npx use-preset your-username/repository:category/preset2
```

## Private repositories

You can use private repositories if you [configured your SSH key](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account). To do so, you can add the `ssh:` prefix to the shorthands, or use the full URI with the `git` protocol.

```bash
npx use-preset ssh:your-username/repository
npx use-preset git@github.com:your-username/repository.git
```

## On Github's Gists

You can install a preset hosted on a Github Gist by using its URL. Not exactly sure why you would want to do that, but you can.

## On any Git provider

As long as the repository is publicly accessible, you can use it by prepending `git::` to its URL.

```bash
npx use-preset git::git@git.your-domain.com:presets/your-cool-preset.git
```

> As this may not be ideal, if you are in a situation where you often need to install presets hosted on a custom Git provider, feel free to open an issue so we can find a better solution.
