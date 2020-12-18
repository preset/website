---
title: 'Templates'
---

## Templates

Templates are the files available in a preset. These files may be extracted to the target directory and edited by the preset to modify the project the preset is applied on.

They can be organized however you want, but most presets will simply copy the file hierarchy inside the template directory to the target directory.

By default, the template directory is `/templates` at the root of a preset project, but it can be changed with `setTemplateDirectory`:

```ts
// preset.ts
import { Preset } from 'apply';

Preset.setName('My preset');
Preset.setTemplateDirectory('stubs');

// Will extract the hierarchy from /stubs to the
// root of the target directory
Preset.extract();
```
