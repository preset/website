---
title: 'Install dependencies'
---

## Purpose

This action can install the target project's dependencies. It handles PHP and Node environments. For other environment, you can use the [execute](/docs/actions/execute) action instead.

## Initialization

Call the `installDependencies` method on the `Preset` singleton. This method takes a single parameter, which can be either `node` or `php`, and defaults to `node`.

```ts
Preset.installDependencies('php');
```

## API

### `ifUserApproves`

Asks the user before installing the dependencies. This method takes an optional context-aware boolean value as a parameter, which defaults to true.

<!-- prettier-ignore -->
```ts
Preset.installDependencies('php')
  .ifUserApproves();
```
