---
title: 'Writing a preset'
---

## Writing a preset

In its simplest form, a preset can be just one `preset.ts` file. Preset will find that file and evaluate it without installing the dependencies specified in the `package.json`, if there is one.

But as soon as you want the safety of typings, you will need to add `apply` as a development dependency.

As a convenience, the command-line interface as an `--init` parameter for kickstarting your preset's development.

!> Fun fact, `--init` actually applies a preset.

## Creating the preset

Run the following command, replacing `<preset-name>` by the directory in which you want to create your preset.

```bash
npx apply <preset-name> --init
```

## Adding actions

The `Preset` singleton exported by the `apply` dependency contains the entry points for declaring your preset's actions. You can learn more in [each action's documentation page](/docs/concepts/actions/#actions).

```ts
// preset.ts
import { Preset } from 'apply';

// Makes sure `auth` is true by default
Preset.option('auth', true);

// Extracts the `default` templates every time,
// and the `auth` templates if `auth` is true
Preset.extract('default');
Preset.extract('auth').ifHasOption('auth');
```

## Tip: archiving edited files

When creating a preset from a test project, if you committed its initial state and started editing it, you can use `git diff` to list the modified files.

Combined with `git archive`, you can zip up all of the files you edited so you can unzip them in the templates directory of your preset.

```bash
git archive -o update.zip HEAD $(git diff --diff-filter=M --name-only)
```

## Next steps

The next step is to build your preset. You can learn more about actions in [their documentation](/docs/concepts/actions/#actions).

Then, you will need to [publish your preset](/docs/guides/hosting), or you can keep it local for your personal use.
