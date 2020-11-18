---
title: 'Hook'
---

## Purpose

This action allows for executing custom code during the preset's lifecycle. It is useful for parsing data and storing it into the context. See the [context guide](/docs/guide/using-context#context-object) for more information.

## Initialization

Call the `hook` method on the `Preset` singleton. The only argument is a context-aware callback. If it returns a promise, it will be awaited.

```ts
Preset.hook((preset) => {
	// do something
});
```

This action has no further configuration.
