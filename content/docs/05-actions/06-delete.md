---
title: 'Delete'
---

## Purpose

This action allows for deleting files and directories in the target project.

## Initialization

Call the `delete` method on the `Preset` singleton. The first parameter can be a string or an array of paths to the files or directories that should be deleted.

```ts
Preset.delete('resources/sass');
```

This action has no further configuration.
