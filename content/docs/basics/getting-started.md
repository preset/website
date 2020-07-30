---
title: 'Getting started'
description: ''
sidebar: 'docs'
prev: '/docs/basics/introduction/'
next: '/docs/concepts/preset/'
---

## Installation

Preset can be used by running `npx use-preset`. Running it this way will ensure that it is always up-to-date when you use it.

However, if you are using it frequently, you may want to install it globally:

```bash
# Yarn
yarn global add use-preset

# NPM
npm i -g use-preset
```

## Requirements

Preset requires the current [long-term-support version of Node](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads). Since presets are cloned locally, `git` must be accessible from the `PATH` environment variable.

## Usage

A preset can be applied by providing its URL, GitHub handle or path as the first argument.

```bash
npx use-preset your-github-username/your-preset
```

## Authoring

The interesting part with Preset is that it exposes an API that makes it easy to create presets. To build your own, see the [authoring guide](/docs/authoring).
