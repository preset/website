---
title: 'Group'
---

## Purpose

This action can group other actions under the same conditions or title.

## Initialization

Call the `group` method on the `Preset` singleton. The only parameter is a callback which is given a `Preset` object. You must call actions on that object instead of the global `Preset` one.

```ts
Preset.group((preset) => {
	preset.extract();
	// other actions
});
```

This action has no further configuration.
