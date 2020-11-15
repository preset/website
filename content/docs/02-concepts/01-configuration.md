---
title: 'Configuration'
description: ''
search: ''
---

## File

A preset consists of at least a configuration file, usually `preset.js` or `preset.ts`. If a `package.json` exists, it can have a `preset` key, which value must be the relative path to the configuration file.

```json
{
	"name": "your-preset",
	"license": "MIT",
	"preset": "src/preset.ts",
	"devDependencies": {
		"use-preset": "^0.2"
	}
}
```

Configuration files named `preset.js` or `preset.ts` at the root of the project or in the `src` directory are automatically discovered.

## Configuration

A preset is configured via the `Preset` singleton exported by `use-preset`:

```ts
// preset.ts
import { Preset } from 'use-preset';

Preset.setName('My preset');
Preset.extract();
```

You can import [vanilla Node modules](https://nodejs.org/docs/latest-v13.x/api/), but you can't use external dependencies, because they are not installed after the preset is cloned.
