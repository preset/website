---
title: 'Preset'
sidebar: 'docs'
prev: '/docs/basics/getting-started/'
next: '/docs/concepts/action/'
---

## Definition

A preset consist of, at least, a preset file, usually `preset.js`.
If a `package.json` exists, it can have an optional `preset` key, which value must be the path to the preset file.

```json
{
	"name": "your-preset",
	"license": "MIT",
	"preset": "src/preset.js",
	"devDependencies": {
		"use-preset": "^0.1"
	}
}
```

The preset file must export an object.

> TODO
