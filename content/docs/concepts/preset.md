---
title: 'Preset'
description: ''
search: ''
sidebar: 'docs'
prev: '/docs/basics/getting-started/'
next: '/docs/concepts/action/'
---

## Preset

A preset consists of, at least, a preset file, usually `preset.js`.
If a `package.json` exists, it can have an optional `preset` key, which value must be the path to the preset file.

<!-- prettier-ignore -->
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

The preset file must export an object. That object describes every step the preset takes when using it. You can learn more about the syntax in the [API reference](/docs/api/preset/).
