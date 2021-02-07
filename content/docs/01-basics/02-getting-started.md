---
title: 'Getting started'
description: ''
search: ''
---

## Installation

Preset can be used by running `npx apply`. Running it this way will ensure that it is always up-to-date when you use it.

However, if you are using it frequently, you may want to install it globally:

```bash
# Yarn
yarn global add apply

# NPM
npm i -g apply
```

### Mac OS and Free BSD

You'll likely encounter an error when trying `npx apply` if you didn't install it locally. This is because `npx` looks in the `PATH`, and `apply` [already exists](https://www.freebsd.org/cgi/man.cgi?query=apply&manpath=4.4BSD+Lite2).

To fix this, you need to install `apply` or use [`--ignore-existing`](https://www.npmjs.com/package/npx#description).

## Requirements

Preset requires the current [long-term-support version of Node](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads). Since presets are cloned locally, `git` must be accessible from the `PATH` environment variable.

## Usage

A preset can be applied by providing its URL, GitHub handle or path as the first argument.

```bash
# GitHub handle
npx apply organization/preset

# GitHub URL
npx apply git@github.com:organization/preset.git

# Local path
npx apply /your/local/preset
```

You can change the directory of installation by passing it as the second parameter. This may be useful for presets that are actually scaffolding projects.

```bash
npx apply /your/local/preset your-app
```
